module.exports = async (context) => {
  const { client, m, prefix } = context; // Destructure 'm' and 'prefix' properly

  // Define the message content
  let p = `

  
 button ✅ Testing...
  `;

  // Define the image URL
  let imagePath = 'https://i.ibb.co/dJPR3mss/4fee3389898c57cf.jpg';

  // Define the buttons
  const buttons = [
    {
      buttonId: `${prefix}support`, 
      buttonText: { displayText: "Support" },
    },
    {
      buttonId: `${prefix}repo`, 
      buttonText: { displayText: "Repo" },
    },
    {
      buttonId: `${prefix}ping`, 
      buttonText: { displayText: "Speed" },
    },
  ];

 
  const flowActions = [
    {
      buttonId: "action",
      buttonText: { displayText: "Options" },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "MENU",
          sections: [
            {
              title: "Select The Menu",
              highlight_label: "",
              rows: [
                {
                  header: "Dinu ",
                  title: "MD",
                  description: "Regards Keith",
                  id: `${prefix}menu`, 
                },
                {
                  header: "CYBER DINU MD",
                  title: "Appreciation",
                  description: "Regards to the owner",
                  id: `${prefix}speed`, 
                },
              ],
            },
          ],
        }),
      },
      viewOnce: true,
    },
  ];

 
  const buttonMessage = {
    image: { url: imagePath },
    caption: p,
    footer: "© Dinu\n",
    headerType: 1,
    buttons: buttons,
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '0029Vb3n3T5HltYC47zpGs2N@newsletter',
        newsletterName: 'CYBER DINU MD Support',
      },
      externalAdReply: {
        title: "Keith Testing",
        body: "Keith",
        thumbnailUrl: 'https://i.ibb.co/dJPR3mss/4fee3389898c57cf.jpg',
        sourceUrl: "https://whatsapp.com/channel/0029Vb3n3T5HltYC47zpGs2N",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };


  buttonMessage.buttons.push(...flowActions);

  
  await client.sendMessage(m.key.remoteJid, buttonMessage);
};
