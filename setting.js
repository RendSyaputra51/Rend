//Pairing Code
global.pairingCode = true //true = gausah scan qr cukup 1 hp || false = harus scan qr dan 2 hp

//Backup otomatis 
// global.jamBackup = 12 //Contoh: 12, berarti setiap 12 jam otomatis backup script

//Setting Apikey Junaastore.com
global.apikey = "JSAPI-DXZRgVGn76utt7arJU06"

//Setting Order Kuota
global.merchantId = ""
global.apikey_orkut = ""
global.codeqr = ""

//Persentase fee deposit
global.feeDepo = 2

//Type profit
global.type = "persen" //persen = profit menggunakan persentase || nominal = profit menggunakan nominal

//Persentase default || Jika type profit menggunakan persentase
global.bronze = 2 //Persentase keuntungan Bronze
global.silver = 1 //Persentase keuntungan Silver
global.gold = 1 //Persentase keuntungan Gold

//Profit nominal default || Jika type profit menggunakan nominal
global.nBronze = 1000 //Nominal keuntungan Bronze
global.nSilver = 500 //Nominal keuntungan Silver
global.nGold = 200 //Nominal keuntungan Gold

//Harga upgrade role
global.uSilver = 50000
global.uGold = 100000

//Other
global.botName = "Rizz Pedia Topup" //Nama bot
global.owner = ["6283867753633", "6285882669869"] //Ganti agar fitur owner bisa digunakan
global.ownerNomer = "6285882669869"//Nomor lu
global.ownerName = "Rend" //Nama lu
global.packname = "Rizz Pedia" //Seterah
global.author = "Created By Rizz Pedia" //Seterah
global.sessionName = "session" //Ngga usah di ganti
global.linkGroup = "https://" //Link gc lu

//Image
global.thumbnail = "./options/image/thumbnail.jpg"

//Message
global.mess = {
  sukses: "Done🤗",
  admin: "Command ini hanya bisa digunakan oleh Admin Grup",
  botAdmin: "Bot Harus menjadi admin",
  owner: "Command ini hanya dapat digunakan oleh owner bot",
  prem: "Command ini khusus member premium",
  group: "Command ini hanya bisa digunakan di grup",
  private: "Command ini hanya bisa digunakan di Private Chat",
  wait: "⏳ Mohon tunggu sebentar...",
  error: {
    lv: "Link yang kamu berikan tidak valid",
    api: "Maaf terjadi kesalahan"
  }
}

//Payment
global.payment = {
  qris: {
    an: "WELLY GROSIR" //Atas nama qris
  },
  bca: {
    nope: "08×××xxxxxx",
    an: "-"
  },
  seabank: {
    nope: "08×××xxxxxx",
    an: "-"
  },
  dana: {
    nope: "08×××××××××",
    an: "-"
  },
  gopay: {
    nope: "08×××xxxxxx",
    an: "-"
  },
  shopeepay: {
    nope: "08×××xxxxxx",
    an: "-"
  }
}

//Function buat menu
const fs = require("fs");
const chalk = require('chalk');
const moment = require("moment-timezone");
const { runtime } = require("./function/myfunc");

const d = new Date(new Date + 3600000)
const dateIslam = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(d)

//Tampilan menu
global.menu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`
}

global.allmenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
${readmore}
╭─────╼「 *GROUP MENU* 」
│☛ ${prefix}ceksewa
│☛ ${prefix}kick
│☛ ${prefix}open
│☛ ${prefix}close
│☛ ${prefix}tagall
│☛ ${prefix}hidetag
│☛ ${prefix}delete
│☛ ${prefix}revoke
│☛ ${prefix}antilink
│☛ ${prefix}antilinkv2
│☛ ${prefix}welcome
│☛ ${prefix}promote
│☛ ${prefix}demote
│☛ ${prefix}setdesc
│☛ ${prefix}linkgc
│☛ ${prefix}setppgc
╰─────╼

╭─────╼「 *INFO BOT* 」
│☛ ${prefix}owner
│☛ ${prefix}ping
│☛ ${prefix}runtime
╰─────╼

╭─────╼「 *OWNER MENU* 」
│☛ ${prefix}cekip
│☛ ${prefix}ceksaldo
│☛ ${prefix}settype (Type profit)
│☛ ${prefix}setprofitl
│☛ ${prefix}addsaldo
│☛ ${prefix}minsaldo
│☛ ${prefix}addsewa
│☛ ${prefix}delsewa
│☛ ${prefix}listsewa
│☛ ${prefix}block
│☛ ${prefix}unblock
│☛ ${prefix}backup
╰─────╼

╭─────╼「 *STALKER MENU* 」
│☛ ${prefix}cekml
│☛ ${prefix}cekff
│☛ ${prefix}cekpubg
│☛ ${prefix}cekgi
│☛ ${prefix}cekhok
│☛ ${prefix}cekag
│☛ ${prefix}cekhsr
│☛ ${prefix}cekhi
│☛ ${prefix}cekvalo
│☛ ${prefix}cekaov
│☛ ${prefix}cekcodm
│☛ ${prefix}cekzzz
│☛ ${prefix}ceksus
│☛ ${prefix}ceksm
│☛ ${prefix}cekpb
│☛ ${prefix}cekpgr
╰─────╼

╭─────╼「 *STORE MENU* 」
│☛ ${prefix}list
│☛ ${prefix}addlist
│☛ ${prefix}dellist
│☛ ${prefix}setlist
│☛ ${prefix}testi
│☛ ${prefix}addtesti
│☛ ${prefix}deltesti
│☛ ${prefix}settesti
│☛ ${prefix}kalkulator
│☛ ${prefix}done
│☛ ${prefix}setdone
│☛ ${prefix}deldone
│☛ ${prefix}changedone
│☛ ${prefix}proses
│☛ ${prefix}setproses
│☛ ${prefix}delproses
│☛ ${prefix}changeproses
╰─────╼

╭─────╼「 *TOPUP MENU* 」
│☛ ${prefix}deposit
│☛ ${prefix}saldo
│☛ ${prefix}listharga
│☛ ${prefix}upgrade
╰─────╼`
}

global.groupmenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
${readmore}
╭─────╼「 *GROUP MENU* 」
│☛ ${prefix}ceksewa
│☛ ${prefix}kick
│☛ ${prefix}open
│☛ ${prefix}close
│☛ ${prefix}tagall
│☛ ${prefix}hidetag
│☛ ${prefix}delete
│☛ ${prefix}revoke
│☛ ${prefix}antilink
│☛ ${prefix}antilinkv2
│☛ ${prefix}welcome
│☛ ${prefix}promote
│☛ ${prefix}demote
│☛ ${prefix}setdesc
│☛ ${prefix}linkgc
│☛ ${prefix}setppgc
│☛ ${prefix}setnamegc
╰─────╼`
}

global.infobot = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
${readmore}
╭─────╼「 *INFO BOT* 」
│☛ ${prefix}owner
│☛ ${prefix}ping
│☛ ${prefix}runtime
╰─────╼`
}

global.ownermenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
${readmore}
╭─────╼「 *OWNER MENU* 」
│☛ ${prefix}cekip
│☛ ${prefix}ceksaldo
│☛ ${prefix}settype (Type profit)
│☛ ${prefix}setprofit
│☛ ${prefix}addsaldo
│☛ ${prefix}minsaldo
│☛ ${prefix}addsewa
│☛ ${prefix}delsewa
│☛ ${prefix}listsewa
│☛ ${prefix}block
│☛ ${prefix}unblock
│☛ ${prefix}backup
╰─────╼`
}

global.stalkermenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
${readmore}
╭─────╼「 *STALKER MENU* 」
│☛ ${prefix}cekml
│☛ ${prefix}cekff
│☛ ${prefix}cekpubg
│☛ ${prefix}cekgi
│☛ ${prefix}cekhok
│☛ ${prefix}cekag
│☛ ${prefix}cekhsr
│☛ ${prefix}cekhi
│☛ ${prefix}cekvalo
│☛ ${prefix}cekaov
│☛ ${prefix}cekcodm
│☛ ${prefix}cekzzz
│☛ ${prefix}ceksus
│☛ ${prefix}ceksm
│☛ ${prefix}cekpb
│☛ ${prefix}cekpgr
╰─────╼`
}

global.storemenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
${readmore}
╭─────╼「 *STORE MENU* 」
│☛ ${prefix}list
│☛ ${prefix}addlist
│☛ ${prefix}dellist
│☛ ${prefix}setlist
│☛ ${prefix}testi
│☛ ${prefix}addtesti
│☛ ${prefix}deltesti
│☛ ${prefix}settesti
│☛ ${prefix}kalkulator
│☛ ${prefix}done
│☛ ${prefix}setdone
│☛ ${prefix}deldone
│☛ ${prefix}changedone
│☛ ${prefix}proses
│☛ ${prefix}setproses
│☛ ${prefix}delproses
│☛ ${prefix}changeproses
╰─────╼`
}

global.topupmenu = (prefix, sender, pushname) => {
  let more = String.fromCharCode(8206)
  let readmore = more.repeat(4001)
  return `*🤖 BOT INFO 🤖*
• Bot Name: ${botName}
• Runtime: ${runtime(process.uptime())}
• Owner: @${ownerNomer}

*👤 USER INFO 👤*
• Tag: @${sender.split("@")[0]}
• Name: ${pushname}
• Time: ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
${readmore}
╭─────╼「 *TOPUP MENU* 」
│☛ ${prefix}deposit
│☛ ${prefix}saldo
│☛ ${prefix}listharga
│☛ ${prefix}upgrade
╰─────╼`
}

let time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.greenBright(`[ ${botName} ]  `) + time + chalk.cyanBright(` "${file}" Telah diupdate!`))
  delete require.cache[file]
  require(file)
})