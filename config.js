/**
   * Created By Abdallah.
   * Contact Me on wa.me/201010835622
   * Follow https://github.com/Lord-official
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '«𝒂𝑩𝒅𝒂𝒍𝒍𝒂𝒉.𝒐𝒇𝒄»🇮'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/GBBClqFrb2m4kdDLWl2MsA'
global.linkig = 'http://instagram.com/abdallah_elsayed08?utm_source=qr'
global.linkyt = 'https://youtube.com/channel/UC9pWDF4BVUy4XFRzm8HvoKA'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/Lord-official'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'Abdallah-official'
// Other
global.watermark = '«𝒂𝑩𝒅𝒂𝒍𝒍𝒂𝒉.𝒐𝒇𝒄»🇮🇳'
global.owner = ['201010835622']
global.premium = ['201010835622']
global.packname = '𝒂𝑩𝒅𝒂𝒍𝒍𝒂𝒉-𝒘𝒂'
global.author = '𝒂𝑩𝒅𝒂𝒍𝒍𝒂𝒉-𝑜𝑓𝑓𝑖𝑐𝑖𝑎𝑙'
global.sessionName = 'Abdallah'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
