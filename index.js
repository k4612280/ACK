require("dotenv").config();

const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");

const commandHandler = require("./src/handlers/commandHandler");
const eventHandler = require("./src/handlers/eventHandler");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages
    ],
    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User
    ]
});

client.commands = new Collection();

(async () => {

    await commandHandler(client);

    await eventHandler(client);

    await client.login(process.env.TOKEN);

})();