const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`Hay,Dengan ofc.syadBotz Ada Yang Bisa Di Bantu?
 No Whatsapp BotV1:wa.me/6285717667324 Jika Menemukan Bug Atau Eror Harap Lapor Owner
 fitur Menfess Di Bot V2 Masih Eror Silahkan Menfess Di Bot 1 Nya TerimaBabi

*MAIN MENU*${petik}
 • ${prefix}menu
 • ${prefix}infobot
 • ${prefix}donate
 • ${prefix}dashboard
 • ${prefix}owner
 • ${prefix}cekdrive
 • ${prefix}cekbandwidth
 • ${prefix}cekpremium
 • ${prefix}listpremium
 • ${prefix}listsewa
 • ${prefix}speed
 • ${prefix}runtime
 • ${prefix}listbahasa${petik}

*CONVERTER/TOOLS*${petik} 
 • ${prefix}sticker
 • ${prefix}stickerwm
 • ${prefix}smeme
 • ${prefix}toimg
 • ${prefix}tovideo
 • ${prefix}tomp3
 • ${prefix}ttp
 • ${prefix}attp
 • ${prefix}emojimix
 • ${prefix}nuliskiri
 • ${prefix}nuliskanan
 • ${prefix}foliokiri
 • ${prefix}foliokanan
 • ${prefix}say
 • ${prefix}translate${petik}

*ANONYMOUS CHATS*${petik}
• ${prefix}menfess nama|62xxx|pesan
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}next
 • ${prefix}stop
 • ${prefix}sendprofile${petik}

*STORE MENU*${petik}
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}jeda
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi
 • ${prefix}delsetdone
 • ${prefix}changedone
 • ${prefix}setdone
 • ${prefix}delsetproses
 • ${prefix}changeproses
 • ${prefix}setproses
 • proses < reply chat >
 • done < reply chat >${petik}

*RPG GAMES*${petik}
 • ${prefix}inventory
 • ${prefix}mining
 • ${prefix}buy 
 • ${prefix}sell
 • ${prefix}heal
 • ${prefix}hunt
 • ${prefix}adventure
 • ${prefix}luckyday
 • ${prefix}killslime
 • ${prefix}killgoblin
 • ${prefix}killdevil
 • ${prefix}killbehemoth
 • ${prefix}killdemon
 • ${prefix}killdemonking
 • ${prefix}joinrpg
 • ${prefix}sellikan
 • ${prefix}sellbesi
 • ${prefix}sellemas
 • ${prefix}jelajah
 • ${prefix}mancing
 • ${prefix}jualikan
 • ${prefix}jualcoal
 • ${prefix}lebur
 • ${prefix}jualstone
 • ${prefix}jualingot
 • ${prefix}jualkayu
 • ${prefix}nebang
 • ${prefix}goplanet
 • ${prefix}jualbahankimia${petik}

*DOWNLOADS MENU*${petik}
 • ${prefix}play
 • ${prefix}ytmp3
 • ${prefix}ytmp4
 • ${prefix}instagram
 • ${prefix}igphoto
 • ${prefix}igvideo
 • ${prefix}igreels
 • ${prefix}tiktok
 • ${prefix}tiktoknowm
 • ${prefix}tiktokaudio
 • ${prefix}mediafire
 • ${prefix}gitclone${petik}

*GROUP MENU*${petik}
 • ${prefix}afk
 • ${prefix}welcome
 • ${prefix}left
 • ${prefix}setopen
 • ${prefix}changesetopen
 • ${prefix}delsetopen
 • ${prefix}setclose
 • ${prefix}changesetclose
 • ${prefix}delsetclose
 • ${prefix}setwelcome
 • ${prefix}changewelcome
 • ${prefix}delsetwelcome
 • ${prefix}setleft
 • ${prefix}changeleft
 • ${prefix}delsetleft
 • ${prefix}linkgc
 • ${prefix}setppgc
 • ${prefix}setnamegc
 • ${prefix}setdesc
 • ${prefix}antilink
 • ${prefix}antiwame
 • ${prefix}open
 • ${prefix}close
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}revoke
 • ${prefix}hidetag
 • ${prefix}checksewa${petik}

*GAME MENU*${petik}
 • ${prefix}tictactoe
 • ${prefix}delttt
 • ${prefix}casino
 • ${prefix}delcasino${petik}

*SEARCH MENU*${petik}
 • ${prefix}lirik
 • ${prefix}grupwa
 • ${prefix}pinterest
 • ${prefix}ytsearch
 • ${prefix}searchbyimage${petik}

*RANDOM MENU*${petik}
 • ${prefix}cecan
 • ${prefix}cogan
 • ${prefix}waifu${petik}


*BALANCE MENU*${petik}
 • ${prefix}topglobal
 • ${prefix}toplocal
 • ${prefix}buylimit
 • ${prefix}buyglimit
 • ${prefix}transfer
 • ${prefix}limit
 • ${prefix}balance${petik}

*STORAGE*${petik}
 • ${prefix}addstik
 • ${prefix}addvn
 • ${prefix}addimg
 • ${prefix}addvid
 • ${prefix}liststik
 • ${prefix}listvn
 • ${prefix}listimg
 • ${prefix}listvid${petik}
 
*BAILEYS‍*${petik}
 • ${prefix}fitnah
 • ${prefix}nowa
 • ${prefix}getquoted
 • ${prefix}fakehidetag
 • ${prefix}react
 • ${prefix}setcmd
 • ${prefix}delcmd${petik}

*OWNERS MENU️*${petik}
 • ${prefix}autoread
 • ${prefix}autobio
 • ${prefix}autorespond
 • ${prefix}anticall
 • ${prefix}autoblok212
 • ${prefix}join
 • ${prefix}left
 • ${prefix}self
 • ${prefix}public
 • ${prefix}setppbot
 • ${prefix}broadcast
 • ${prefix}bcimg
 • ${prefix}bcstik
 • ${prefix}bcvn
 • ${prefix}bcvideo
 • ${prefix}bcsewa
 • ${prefix}addpremium
 • ${prefix}delpremium
 • ${prefix}addsewa
 • ${prefix}delsewa${petik}

*ASUPAN MENU*${petik}
 • ${prefix}chika
 • ${prefix}delvira
 • ${prefix}ayu
 • ${prefix}bunga
 • ${prefix}aura
 • ${prefix}nisa
 • ${prefix}ziva
 • ${prefix}yana
 • ${prefix}viona
 • ${prefix}syania
 • ${prefix}riri
 • ${prefix}syifa
 • ${prefix}mama_gina
 • ${prefix}alcakenya
 • ${prefix}mangayutri
 • ${prefix}rikagusriani
 • ${prefix}asupan
 • ${prefix}bocil
 • ${prefix}geayubi
 • ${prefix}santuy
 • ${prefix}ukhty
 • ${prefix}syifa${petik}

*NSFW MENU*${petik}
 • ${prefix}baka
 • ${prefix}smug
 • ${prefix}neko_sfw
 • ${prefix}hentai_gif
 • ${prefix}spank
 • ${prefix}blowjob
 • ${prefix}cumarts
 • ${prefix}eroyuri
 • ${prefix}eroneko
 • ${prefix}erokemonomimi
 • ${prefix}erokitsune
 • ${prefix}ero
 • ${prefix}feet
 • ${prefix}erofeet
 • ${prefix}feetgif
 • ${prefix}femdom
 • ${prefix}futanari
 • ${prefix}hentai
 • ${prefix}holoero
 • ${prefix}holo
 • ${prefix}keta
 • ${prefix}kitsune
 • ${prefix}kemonomimi
 • ${prefix}pussyart
 • ${prefix}pussywankgif
 • ${prefix}girl_solo
 • ${prefix}girl_solo_gif
 • ${prefix}tits
 • ${prefix}trap
 • ${prefix}yuri
 • ${prefix}avatar2
 • ${prefix}anal
 • ${prefix}bj
 • ${prefix}boobs
 • ${prefix}classic
 • ${prefix}cumsluts
 • ${prefix}kuni
 • ${prefix}lesbian
 • ${prefix}neko
 • ${prefix}neko_gif
 • ${prefix}ahegao
 • ${prefix}bdsm
 • ${prefix}cuckold
 • ${prefix}cum
 • ${prefix}foot
 • ${prefix}gangbang
 • ${prefix}glasses
 • ${prefix}jahy
 • ${prefix}masturbation
 • ${prefix}nsfw_neko
 • ${prefix}orgy
 • ${prefix}panties
 • ${prefix}tentacles
 • ${prefix}thighs
 • ${prefix}zettai${petik}


*_®Bot By ofc.syadBotz*
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}
