const fs = require('fs');
const path = require('path');
const { session } = require("./settings");

// Function to handle authentication and session management
async function authenticationn() {
  if (session !== "zokk" && session.trim() !== "") {
    const dirPath = "./session";
    const credsPath = path.join(dirPath, "creds.json");

    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    if (!fs.existsSync(credsPath)) {
      console.log("Connecting...");
    }
    try {
      const decodedSession = Buffer.from(session, 'base64').toString('utf8');
      fs.writeFileSync(credsPath, decodedSession, "utf8");
    } catch (error) {
      console.log("Session is invalid: " + error);
    }
  }
}

module.exports = authenticationn;
