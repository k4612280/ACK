module.exports = {

    name: "interactionCreate",

    async execute(interaction, client) {

        try {

            // أوامر السلاش
            if (interaction.isChatInputCommand()) {

                const command = client.commands.get(interaction.commandName);

                if (!command) return;

                return await command.execute(interaction, client);

            }

            // الأزرار
            if (interaction.isButton()) {

                return;

            }

            // المنيو
            if (interaction.isStringSelectMenu()) {

                switch (interaction.customId) {

                    case "officers_menu":

                        switch (interaction.values[0]) {

                            case "prison":

const prisonModal = require("../modals/prisonModal");

await interaction.showModal(
prisonModal()
);

                                break;

                            case "release":

                                await interaction.reply({
                                    content: "🔓 سيتم قريبًا فتح نموذج إطلاق السراح.",
                                    ephemeral: true
                                });

                                break;

                            case "fingerprint":

                                await interaction.reply({
                                    content: "🪪 سيتم قريبًا فتح نظام بصمة الضباط.",
                                    ephemeral: true
                                });

                                break;

                            case "violations":

                                await interaction.reply({
                                    content: "📑 سيتم قريبًا فتح نظام المخالفات.",
                                    ephemeral: true
                                });

                                break;

                            case "requests":

                                await interaction.reply({
                                    content: "📨 سيتم قريبًا فتح طلبات السجناء.",
                                    ephemeral: true
                                });

                                break;

                        }

                        break;

                }

            }

            // المودال
            if (interaction.isModalSubmit()) {

                return;

            }

        } catch (error) {

            console.error(error);

            if (!interaction.replied && !interaction.deferred) {

                await interaction.reply({
                    content: "❌ حدث خطأ.",
                    ephemeral: true
                });

            }

        }

    }

};