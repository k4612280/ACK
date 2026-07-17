const prisonModal = require("../modals/prisonModal");

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

                                await interaction.showModal(
                                    prisonModal()
                                );

                                break;

                            case "release":

                                await interaction.reply({
                                    content: "🔓 سيتم قريبًا نظام إطلاق السراح.",
                                    ephemeral: true
                                });

                                break;

                            case "fingerprint":

                                await interaction.reply({
                                    content: "🪪 سيتم قريبًا نظام بصمة الضباط.",
                                    ephemeral: true
                                });

                                break;

                            case "violations":

                                await interaction.reply({
                                    content: "📑 سيتم قريبًا نظام المخالفات.",
                                    ephemeral: true
                                });

                                break;

                            case "requests":

                                await interaction.reply({
                                    content: "📨 سيتم قريبًا نظام طلبات السجناء.",
                                    ephemeral: true
                                });

                                break;

                        }

                        break;

                }

                return;

            }

            // المودال
            if (interaction.isModalSubmit()) {

                switch (interaction.customId) {

                    case "prison_modal": {

                        const user = interaction.fields.getTextInputValue("user");
                        const reason = interaction.fields.getTextInputValue("reason");
                        const time = interaction.fields.getTextInputValue("time");
                        const caseNumber = interaction.fields.getTextInputValue("case");

                        await interaction.reply({

                            ephemeral: true,

                            content:
`✅ تم تسجيل بيانات السجن

👤 السجين: ${user}
📄 السبب: ${reason}
⏳ المدة: ${time} دقيقة
📁 رقم القضية: ${caseNumber}`

                        });

                        break;

                    }

                }

                return;

            }

        } catch (error) {

            console.error(error);

            if (!interaction.replied && !interaction.deferred) {

                await interaction.reply({

                    content: "❌ حدث خطأ أثناء تنفيذ العملية.",

                    ephemeral: true

                });

            }

        }

    }

};