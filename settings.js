/*
——————————
≈ Create By @RIY
≈ Base Ori @DikaArdnt
≈ Kalau Mau Nambahin/Ubah List Menu » language » help.js
——————————
∞ BACA BANG ∞
≈ Seseorang bisa menjual barang yang bukan miliknya apabila telah mendapatkan ijin dari pemilik barang.
≈ Rasullullah saw bersabda : “Janganlah engkau menjual barang yang bukan milikmu.”
——————————
*/

const fs = require('fs')
const chalk = require('chalk')
const apikey = require('./apikey/apikey.js')

//—————「 Website Apikey 」—————//
global.APIs = {
//biarin aja gausah di ubah!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di ubah, udah free apikey!
'https://zenzapis.xyz': `${riykey}`,
}

//—————「 Setting Owner 」—————//
global.owner = ['62895397918020','6285642159032','6281327496283'] //ubah jadi nomor kamu
global.premium = ['62895397918020','6281327496283','6285642159033','6285724404318'] //ubah jadi nomor kamu
global.ownernomer = '62895397918020' //ubah jadi nomor kamu

//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝐴𝑘𝑎𝑟𝑖' //ubah jadi nama kamu
global.botname = '𝐴𝑘𝑎𝑟𝑖 𝐵𝑜𝑡⃪᭪' //ubah jadi nama bot kamu
global.footer = '𝐴𝑘𝑎𝑟𝑖 𝐵𝑜𝑡⃪᭪' //ubah jadi nama kamu

//—————「 Set Kebutuhan Button & Kontak 」—————//
global.youtube = 'https://youtube.com/channel/akari' //ubah jadi link yt kmu, kalau gk pnya gsh di gnti anggap aja credits :)
global.ig = 'https://instagram.com/akari' //ubah jadi link ig kamu
global.mygc = 'https://chat.whatsapp.com/DSFTbb0giUsH9borzEDGEv' //ubah jadi link group kamu
global.myweb = 'https://lolhuman.xyz' //terserah mau ubah/nggak
global.email = 'akari32@gmail.com' //ubah jadi email kamu
global.region = 'indonesia' //terserah mau ubah/nggak

//—————「 Set Wm 」—————//
global.packname = '© 𝐴𝑘𝑎𝑟𝑖 𝐵𝑜𝑡⃪᭪' //ubah jadi nama bot kamu
global.author = '𝐴𝑘𝑎𝑟𝑖 𝐵𝑜𝑡⃪᭪' //ubah jadi nama kamu

//—————「 Set Nama Session 」—————//
global.sessionName = 'akun' //biarin aja gausah di ubah!

//—————「 Set Limit 」—————//
global.limitawal = {
premium: "Infinity", //biarin aja gausah di ubah!
free: 99999, //terserah mau ubah/nggak
}

//—————「 Set Image 」—————//
global.thumb = fs.readFileSync('./image/chika.jpg')
global.velochika = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg' //terserah mau ubah/nggak

//—————「 Set Random Image Menu 」—————//
//biarin aja gausah di ubah!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
global.prefa = ['','!','.','🐦','🐤','🗿'] //biarin aja gausah di ubah!

//—————「 Set Simbol 」—————//
global.sp = '⭔' //terserah mau ubah/nggak

//—————「 Set Message 」—————//
//terserah mau ubah/nggak
global.mess = {
success: '_Done._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//

//gausah di apa² in
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
