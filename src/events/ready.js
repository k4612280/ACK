module.exports = {

    name: "ready",

    once: true,

    async execute(client) {

        console.clear();

        console.log("====================================");
        console.log("Government System");
        console.log(`Logged in as ${client.user.tag}`);
        console.log(`Bot ID: ${client.user.id}`);
        console.log("====================================");

        client.user.setActivity("Government System");

    }

};