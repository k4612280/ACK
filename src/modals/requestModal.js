const prisonModal = require("../modals/prisonModal");
const releaseModal = require("../modals/releaseModal");
const fingerprintModal = require("../modals/fingerprintModal");
const violationModal = require("../modals/violationModal");
const requestModal = require("../modals/requestModal");

module.exports = {

    name: "interactionCreate",

    async execute(interaction, client) {

        try {

            if (interaction.isChatInputCommand()) {

                const command = client.commands.get(interaction.commandName);

                if (!command) return;

                return await command.execute(interaction, client);

            }

            if (interaction.isButton()) {

                return;

            }

            if (interaction.isStringSelectMenu()) {

                if (interaction.customId === "officers_menu") {

                    switch (interaction.values[0]) {

                        case "prison":

                            await interaction.showModal(
                                prisonModal()
                            );

                            break;

                        case "release":

                            await interaction.showModal(
                                releaseModal()
                            );

                            break;

                        case "fingerprint":

                            await interaction.showModal(
                                fingerprintModal()
                            );

                            break;

                        case "violations":

                            await interaction.showModal(
                                violationModal()
                            );

                            break;

                        case "requests":

                            await interaction.showModal(
                                requestModal()
                            );

                            break;

                    }

                    return;

                }

            }

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
`✅ تم تسجيل السجين

👤 ${user}
📄 ${reason}
⏳ ${time} دقيقة
📁 القضية ${caseNumber}`

                        });

                        break;

                    }
                                        case "release_modal": {

                        const user = interaction.fields.getTextInputValue("user");
                        const reason = interaction.fields.getTextInputValue("reason");

                        await interaction.reply({
                            ephemeral: true,
                            content:
`✅ تم تسجيل طلب إطلاق السراح

👤 ${user}
📄 ${reason}`
                        });

                        break;

                    }

                    case "fingerprint_modal": {

                        const fingerprint = interaction.fields.getTextInputValue("fingerprint");

                        await interaction.reply({
                            ephemeral: true,
                            content:
`✅ تم تسجيل البصمة

🪪 ${fingerprint}`
                        });

                        break;

                    }

                    case "violation_modal": {

                        const user = interaction.fields.getTextInputValue("user");
                        const reason = interaction.fields.getTextInputValue("reason");

                        await interaction.reply({
                            ephemeral: true,
                            content:
`✅ تم تسجيل المخالفة

👤 ${user}
📄 ${reason}`
                        });

                        break;

                    }

                    case "request_modal": {

                        const request = interaction.fields.getTextInputValue("request");

                        await interaction.reply({
                            ephemeral: true,
                            content:
`✅ تم إرسال الطلب

📨 ${request}`
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