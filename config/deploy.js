require("dotenv").config();
const path = require("path");
const FtpDeploy = require("ftp-deploy");

const host = process.env.HOST || null;
const login = process.env.LOGIN || null;
const password = process.env.PASSWORD || null;
const folder = process.env.FOLDER || null;
const ftpDeploy = new FtpDeploy();
const localFolder = path.resolve(__dirname, "..", "out");

if (!host || !login || !password || !folder) {
  console.log("Не найдены переменные");
  process.exit(1);
}

const config = {
  user: login,
  // Password optional, prompted if none given
  password: password,
  host: host,
  port: 21,
  localRoot: localFolder,
  remoteRoot: `/${folder}/public_html/`,
  include: ["*", "**/*"], // this would upload everything except dot files
  //   include: ["*.php", "dist/*", ".*"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  //   exclude: [
  //     "dist/**/*.map",
  //     "node_modules/**",
  //     "node_modules/**/.*",
  //     ".git/**"
  //   ],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: false
};

// use with promises
ftpDeploy
  .deploy(config)
  .then(res => console.log("Send!"))
  .catch(err => console.log(err));
