module.exports = async (context) => {
  const { client, m, url } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
  ╭────────────────
  │ *Wachannel:* https://whatsapp.com/channel/0029Vb3n3T5HltYC47zpGs2N
  
    
  │ *wagroup:*  https://chat.whatsapp.com/FSNnGoVAdcxBoLMHgz6hnn

  │ *Telegram:*  https://t.me/whiteviperinc
    
  │ *Contact owner:* https://api.whatsapp.com/send?phone=+94764972683&text=𝐖𝐇𝐈𝐓𝐄_𝐕𝐈𝐏𝐄𝐑📍

 ╰─────────────────── 
  `;

  // Prepare the image URL
  const image = {
    url: url
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

