const {Telegraf, Markup} = require('telegraf');
const bot = new Telegraf('5899934452:AAGG0s_CzPJmidy2R1EHFLy_FiaDG0N6fvI');
const photos = [
    { url: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/ksbsn4xdmhyssrra7ztz.jpg', caption: '1) The Web App where people can learn more about planets and inner and outter structures \nhttps://magenta-salmiakki-a26269.netlify.app/' },
    { url: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/yezt1f56cfp2njnakpbo.jpg', caption: '2) Responsive Design for bank \nhttps://quiet-biscochitos-1db0e1.netlify.app/' },
    { url: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vnhorbifareii6uedrt4.jpg', caption: '3) The web app where individual can find developer that has github account by typing his nickname \nhttps://dev-finder.onrender.com/' },
    { url: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/erg4fyzl3bu0r4kwcvvq.jpg', caption: '4) The web app where individual can shorten his link (works very slow in Asia as hosting company located in USA) \nhttps://link-shortener-11nn.onrender.com/' },
    { url: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/cybxdhr4wewlscvco9dd.jpg', caption: '5) The web app where individual can create QR code based on information he/she indicated \nhttps://qrgenerator-w1hi.onrender.com/' },
    {url: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/tgyl98u9ueaeviahakmb.jpg', caption: '6) The web-page where you can loocate location in map from outter IP Adress\nhttps://admirable-starburst-8404b5.netlify.app/'},
    {url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1607616391/Challenges/cqs8urpg9sr4ufvyiw7n.jpg', caption: '7) Beautiful Coming Soon Page!\nhttps://fabulous-daifuku-1030ba.netlify.app/'},
    {url: 'https://res.cloudinary.com/dz209s6jk/image/upload/v1625753687/Challenges/wfczmy0nrltpwqyaovg6.jpg', caption: '8) Bill Splitter\nhttps://resplendent-peony-7511ca.netlify.app/'}
];
async function sendPhotos(chatId) {
    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i];
      const caption = photo.caption;
      const url = photo.url;
      await bot.telegram.sendPhoto(chatId, url, { caption: caption });
    }
}
const messages = [
    {text: "Some of my bots are:\n 🔶 The telegram bot that deletes curse words @badWordDetector_bot\n 🔶 The telegram bot that uses OpenAI API and helps telegram users to answer any questions @chatGPTux_bot "},
  ];
async function sendCaption(chatId){
    for (let i = 0; i < messages.length; i++) {
        const text = messages[i]
        const cap = text.text
        await bot.telegram.sendMessage(chatId, {text: cap});
    }
}
bot.command('start', (ctx) => {
    const keyboard = Markup.keyboard([
        ['🔍 WEB Portfolio', '😎 BOT Portfolio'],
        ['☸️ Contacts', '🤓 Info']
    ]).resize() 
    ctx.reply('Welcome!🫶🏻\nMy Name is Farxodbek known as Proffesional Developer👀', keyboard);
})
bot.hears('🔍 WEB Portfolio', async (ctx) => {
    await ctx.reply('There are a lot of works to show off, but I`ll keep most of them confidential as some of them unrealised ideas and show some of them 🫣\nHope You understand✨')
    await sendPhotos(ctx.chat.id)
})
bot.hears('😎 BOT Portfolio', (ctx) => {
    sendCaption(ctx.chat.id)
})
bot.hears('🤓 Info', async (ctx) => {
    await ctx.replyWithHTML(' My name is Farkhodbek Ravshanbekov👨🏼‍💻 \nI`m 16 ⚡️\nStrong Junior full stack developer and Junior iOS Developer 😮‍💨\n 👉🏻 <a href="https://drive.google.com/file/d/1-o1U-04tEaFeFiECA4Dkvlx8wP9X7GRl/view">CV</a> \n 👉🏻 <a href="https://drive.google.com/file/d/1jbnv3XB9bYC37ctomBhXdH3pdiuka5CQ/view">SAT</a> \n 👉🏻 <a href="https://drive.google.com/file/d/1gao6k6Bmh7ptrl9XCET_udsNjJEOV14D/view">IELTS</a>')
    await ctx.reply('Stack:\n🔷HTML & CSS\n🔷Vanilla JS or : NodeJS, Express, EJS, ReactJS\n🔷APIs, Rest API, GIT, Github\n🔷DB: MongoDB, Mongoose, Studio 3T\n🔷Python (Learning)\n🔷SwiftUI, XCode (Learning)\n🔷Ethical Hacker -> Linux Kali: Airodump; Aireplay; ARP Spoofing; Net.Sniffing; MITM; Post-Connection Atacks and their security')
    await ctx.replyWithHTML('Links:\n🔷My own Web Developer Company <a href="https://web-far.onrender.com/">Web.Far</a>\n🔷<a href="https://www.codewars.com/users/f1rxodd">Codewars Account</a> 4KYU in JavaScript, 7KYU Python\n🔷<a href="https://github.com/f1rxod">Github</a>')
})
bot.hears('☸️ Contacts', (ctx) => {
    ctx.reply('Ready to make your business ultra popular by creating proffesional web-page or web-app, then let`s connect:\n 📧rav.farxod@gmail.com\n ☎️+998991055644')
})

bot.launch();