// Bot settings

// You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep

const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09vTWljUzdvMXo3UHg2MmpoSldOQTRhQUhUTTBoWThUQkJhQTZpUDdGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHptRWZTRzJWbFFMYU54aVJjNFNlRWlsd3c0N254WHdzWVdYUUNRdjNBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RTdaN203M2xsWW1wYXV2c2NvY1JGTDV2ejJLWVFkR2V3S01WS0t6WWxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlV1hsNGVUSDBTUGV2Y29jYit3SlMwWlN0OFpQUWVlbUJhV2E3WnpEbmc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNNEN6UFNZMXRHdDM3bElxdWl0YlJxWW52eTc3MWhUczhmV2s3a2FiVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc3amRyR0F6ZGtTMitndFV1SXUvcG5IRXQvbUxwTFcyZTJBZkYvcWVQUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJGdXA3WnNnS0lidnRPTHBmOTAvNEVYMlFZaVo1SnNBdGJNb3ZZc0wwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1lBQVRPb3R6VXJNY294aU9qdmFlb3pzc00zRGZ3TWtvcVlQZFM1bzZoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJzS1c5UVFrNkt2QmJBYkRYMkYxb3N3Y0QxTTFQVS8xR0JMbkxRekVQR2QxZTVXRkp6Tk9HNjFoVjNoK1pqUkdwU0FseFpmRnN3T2dhZkNIUVp4MmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJXNkIvZkVrSlJlK2N5Q0ZDQ2FoU1VRR0hUeElVTlBNNGcvN1hYS2RPcWw0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLcDBaUU5tX1FHMnh0VFNJdkN3bVF3IiwicGhvbmVJZCI6IjFjNGZlNjAxLWQ5ZWQtNGE4Yy04MjIzLTNiMjUxMzNmNGY2NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvT05WWk1Tdll6aC8yQ2d5U0pnVkRONlZvV3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWxCWlEvaE5JWXREdUtQb2RYT2VYb0JLbkFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllXS1paTUhXIiwibWUiOnsiaWQiOiI5NDc2NDk3MjY4MzoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRycyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTNkcEtvR0VOWEdwYjRHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibDRvN0JWVldmR1ZkYU1GMVAyaU1DbkQ3VE1VcHpkSi9sWmlSZk94dE9WRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicHdxbm5KR3ZDNllsSEhYYkc2RXgrV3dScWVTaEhqSkVOQXp3ejFTMFRxMWdkMWVPRUVjTm03Y0pKOW1HMXNjNnl1WXZpUjJjZ2krUmJ2cDFtNVViRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IkhreE1rYnN3aysxeHpwT3RhaGJicS9YU3dtVkF4QWpkZlBmMHB3ZmdyUnRha3ByaWVqUVowcUlnb0tHczZkWkVEZWUyR01VeHJuWTU0ZDM2UTNnN2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjQ5NzI2ODM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaZUtPd1ZWVm54bFhXakJkVDlvakFwdyswekZLYzNTZjVXWWtYenNiVGxSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQxMjUxNDI2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURIRSJ9';

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
