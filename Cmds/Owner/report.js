const ownerMiddleware = require('../../utility/botUtil/Ownermiddleware');

module.exports = async (context) => {
    await ownerMiddleware(context, async () => {
        const { client, m, text, participants, pushname } = context;

        // Check if the text is provided, otherwise send a reply asking for the message
        if (!text) return m.reply("Please provide a message!");

        // Developer phone numbers array (without the @s.whatsapp.net suffix)
        const devPhoneNumbers = [
            '94764972683', 
            '94742402034', 
            '94701176587', 
            '94727163302'
        ];

        // Construct the message that will be sent to devs
        let txt = `MESSAGE \n\nMessage: ${text}\n\nWritten by: ${pushname}`;

        // Send confirmation to the sender that the message is being delivered
        await m.reply("Your message has been delivered successfully...");

        // Retrieve all contacts
        const contacts = await client.getContacts();

        // Filter developer JIDs based on the devPhoneNumbers
        const devsJids = contacts
            .filter(contact => devPhoneNumbers.includes(contact.number))
            .map(contact => contact.id._serialized); // Getting the JID

        // Loop through each developer's JID and send the message
        for (let devJid of devsJids) {
            try {
                // Send the message with image and mentions to each developer's JID
                await client.sendMessage(devJid, {
                    image: {
                        url: "https://i.ibb.co/dJPR3mss/4fee3389898c57cf.jpg"
                    },
                    mentions: participants.map(a => a.id),
                    caption: txt
                });
            } catch (error) {
                // Log any error that occurs when sending a message to the developer
                console.error(`Error sending message to ${devJid}:`, error);
            }
        }

        // Confirm that the message has been sent to all developers
        await m.reply("Message sent to all developers.");
    });
};
