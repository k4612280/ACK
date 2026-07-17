const {
    ActionRowBuilder,
    StringSelectMenuBuilder
} = require("discord.js");

module.exports = () => {

    return new ActionRowBuilder().addComponents(

        new StringSelectMenuBuilder()

            .setCustomId("officer_menu")

            .setPlaceholder("اختر العملية")

            .addOptions(

                {
                    label: "سجن",
                    value: "prison",
                    emoji: "🔒"
                },

                {
                    label: "إطلاق سراح",
                    value: "release",
                    emoji: "🔓"
                },

                {
                    label: "بصمة",
                    value: "fingerprint",
                    emoji: "🪪"
                },

                {
                    label: "المخالفات",
                    value: "violations",
                    emoji: "📑"
                }

            )

    );

};