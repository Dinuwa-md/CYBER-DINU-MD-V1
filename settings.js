// Bot settings

// You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep

const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "94";
const author = process.env.OWNER_NAME || 'Dinu';
const packname = process.env.PACKNAME || 'Dinu';
const dev = process.env.OWNER_NUMBER || '94764972683';
const DevKeith = dev.split(".");
const botname = process.env.BOTNAME || 'CYBER-DINU-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://i.ibb.co/VYpSBknD/db2841a838abbf9b.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb3n3T5HltYC47zpGs2N';
const reactemoji = process.env.EMOJI || '☠️';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || '*declined your 🤙 call BY `CYBER DINU MD`*';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl,  // Use groupControl for antilink
  antibad: groupControl,   // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete
};
