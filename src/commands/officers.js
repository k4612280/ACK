const {
    SlashCommandBuilder
} = require("discord.js");

const officerPanel = require("../embeds/officerPanel");
const officerMenu = require("../menus/officerMenu");

module.exports = {

    data: new SlashCommandBuilder()

        .setName("officers")

        .setDescription("إرسال لوحة الضباط"),

    async execute(interaction) {

        await interaction.reply({

            embeds: [

                officerPanel()

            ],

            components: [

                officerMenu()

            ]

        });

    }

};