const discord = require('discord.js')
require("dotenv").config()

// KEEP ALIVE BOT
const keepAlive = require("./server")
const PREFIX = "h!"
const helpBot = require("./help")

const client = new discord.Client({
    intents: [
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILDS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_INVITES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "GUILD_PRESENCES",
        "GUILD_SCHEDULED_EVENTS",
        "GUILD_VOICE_STATES",
        "GUILD_WEBHOOKS"
    ]
})

// LOG DISCORD BOT LOGIN
client.on("ready", () => {
    console.log(`Loggin with ${client.user.tag}`)
})

// RESPONSE BOT FROM CHAT
client.on("messageCreate", (msg) => {
    if (msg.author.bot) return
    if (!msg.content.startsWith(PREFIX)) return
        // msg.reply("Please use \"h!\" first when using bot master! (≧▽≦)")
    let arg = msg.content.substring(PREFIX.length).split(" ")
        // let pingBot = msg.mentions.has(client.user.id)

    switch (arg[0]) {

        case "Ping":
            if (arg[1] === "all") {
                msg.reply(`Ping @everyone`)

            } else if (arg[1] = msg.mentions.has(client.user.id)) {
                msg.reply(`Apa sih, maaf tapi aku milik Kinderjoy seorang :heart:`)

            } else if (arg[0] === "Ping") {
                msg.reply(`H-hi master! >///< ${msg.author}`)
            } else {
                msg.reply("Command not found!, please check h!Help first master")
            }
            break;

        case " ":
            break;
        default:
            break;
    }
})

// BOT DISCORD STATUS 
client.on(`ready`, async() => {
    let server = await client.guilds.cache.size
    let serverCount = await client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)

    const activities = [
        `Loading....`,
        `Hi master! Haniel at your service (≧▽≦)`,
        `Maid at ${server}24 servers`,
        `Now looking at ${serverCount} people...`,
        `Follow My Master : https://github.com/KinderjoyStrawberry`,
        `Online 24/7, i'm ready to serve!`
    ]
    setInterval(() => {
        const status = activities[Math.floor(Math.random() * activities.length)]
        client.user.setPresence({
            activities: [{
                name: `${status}`,
                type: "PLAYING"
            }]
        })
    }, 5000);
})

// RUN BOT KEEP ALIVE
keepAlive()

// CLIENT LOGIN FOR BOT
client.login(process.env.TOKEN)