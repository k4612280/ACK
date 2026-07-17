const {
    SlashCommandBuilder,
    PermissionFlagsBits
} = require("discord.js");

const officerPanel = require("../embeds/officerPanel");
const officersMenu = require("../menus/officersMenu");

module.exports = {

    data: new SlashCommandBuilder()

        .setName("prison")

        .setDescription("لوحة نظام السجن")

        .setDefaultMemberPermissions(
            PermissionFlagsBits.Administrator
        ),

    async execute(interaction) {

        await interaction.reply({

            embeds: [
                officerPanel()
            ],

            components: [
                officersMenu()
            ],

            ephemeral: true

        });

    }

};