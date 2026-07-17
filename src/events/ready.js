const db = require("../database/init");

module.exports = {

    name: "ready",

    once: true,

    async execute(client) {

        console.clear();

        console.log("======================================");
        console.log("🏛 Government System");
        console.log(`🤖 ${client.user.tag}`);
        console.log(`🆔 ${client.user.id}`);
        console.log("======================================");

        db.prepare("SELECT 1").get();

        console.log("✅ Database Connected");

        client.user.setActivity("Government System");

    }

};