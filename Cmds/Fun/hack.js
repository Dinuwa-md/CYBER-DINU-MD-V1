module.exports = async (context) => {
  try {
    const { m } = context;
    const mek = m; // The message object for quoting

    // Define the steps of the prank
    const steps = [
      "```Injecting Malware```",
    "``` █ 10%```",
    " ```█ █ 20%```",
    " ```█ █ █ 30%```",
    "``` █ █ █ █ 40%```",
    "``` █ █ █ █ █ 50%```",
    "``` █ █ █ █ █ █ 60%```",
    "``` █ █ █ █ █ █ █ 70%```",
    " ```█ █ █ █ █ █ █ █ 80%```",
    " ```█ █ █ █ █ █ █ █ █ 90%```",
    " ```█ █ █ █ █ █ █ █ █ █ 100%```",
    "```System hijacking on process..```\n```Connecting to Server error to find 404```",
    "```Device successfully connected...\nReceiving data...```",
    "```Data hijacked from device 100% completed\nKilling all evidence, killing all malwares...```",
    "```HACKING COMPLETED```",
    "```SENDING LOG DOCUMENTS...```",
    "```SUCCESSFULLY SENT DATA AND Connection disconnected```",
    "```BACKLOGS CLEARED```",
    "```POWERED BY CYBER DINU MD```",
    "```By CYBER DINU ID```"
    "```FUCK YOU DIVEIC```"
    "```END 💀💥.```*
    ];

    // Loop through all the steps and send them
    for (const line of steps) {
      await context.client.sendMessage(m.chat, { text: line }, { quoted: mek });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for effect
    }

  } catch (error) {
    console.error('Error during prank:', error);
    // Send a more detailed error message
    context.client.sendMessage(m.chat, {
      text: `❌ *Error!* Something went wrong. Reason: ${error.message}. Please try again later.`
    });
  }
};
