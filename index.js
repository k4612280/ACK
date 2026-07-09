require("dotenv").config();

const fs = require("fs");
const path = require("path");

const {
    Client,
    Collection,
    GatewayIntentBits,
    Partials
} = require("discord.js");

const { initializeDatabase } = require("./src/database/init");

const client = new Client({

    intents: [

        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages

    ],

    partials: [

        Partials.Channel,
        Partials.Message,
        Partials.User

    ]

});

client.commands = new Collection();

/* ===============================
   تحميل الأوامر
================================ */

const commandsPath = path.join(__dirname, "src", "commands");

if (fs.existsSync(commandsPath)) {

    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {

        const command = require(path.join(commandsPath, file));

        if (command.data && command.execute) {

            client.commands.set(command.data.name, command);

            console.log(`✅ Command Loaded: ${command.data.name}`);

        }

    }

}

/* ===============================
   تحميل الأحداث
================================ */

const eventsPath = path.join(__dirname, "src", "events");

if (fs.existsSync(eventsPath)) {

    const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

    for (const file of eventFiles) {

        const event = require(path.join(eventsPath, file));

        if (event.once) {

            client.once(event.name, (...args) => event.execute(...args, client));

        } else {

            client.on(event.name, (...args) => event.execute(...args, client));

        }

        console.log(`✅ Event Loaded: ${event.name}`);

    }

}

/* ===============================
   تشغيل البوت
================================ */

client.once("ready", () => {

    console.clear();

    console.log("====================================");
    console.log("Government System");
    console.log(`Logged in as ${client.user.tag}`);
    console.log(`ID : ${client.user.id}`);
    console.log("====================================");

    initializeDatabase();

});

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.login(process.env.TOKEN);