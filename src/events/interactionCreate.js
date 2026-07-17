module.exports = {

    name: "interactionCreate",

    async execute(interaction, client) {

        if (interaction.isChatInputCommand()) {

            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {

                await command.execute(interaction, client);

            } catch (error) {

                console.error(error);

                if (interaction.replied || interaction.deferred) {

                    await interaction.followUp({
                        content: "حدث خطأ أثناء تنفيذ الأمر.",
                        ephemeral: true
                    });

                } else {

                    await interaction.reply({
                        content: "حدث خطأ أثناء تنفيذ الأمر.",
                        ephemeral: true
                    });

                }

            }

        }

    }

};