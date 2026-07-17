const { PermissionsBitField } = require("discord.js");

module.exports = async (guild) => {

    const roles = [
        {
            name: "👑 الإدارة العليا",
            permissions: [PermissionsBitField.Flags.Administrator]
        },
        {
            name: "🏛 مدير السجن",
            permissions: [
                PermissionsBitField.Flags.ManageChannels,
                PermissionsBitField.Flags.ManageRoles
            ]
        },
        {
            name: "⭐ نائب مدير السجن",
            permissions: [
                PermissionsBitField.Flags.ManageChannels
            ]
        },
        {
            name: "👮 قائد الضباط",
            permissions: []
        },
        {
            name: "👮 ضابط",
            permissions: []
        },
        {
            name: "🪪 موظف البصمة",
            permissions: []
        },
        {
            name: "📰 وزارة الإعلام",
            permissions: []
        },
        {
            name: "📋 استقبال الطلبات",
            permissions: []
        },
        {
            name: "🔒 السجين",
            permissions: []
        }
    ];

    const created = {};

    for (const role of roles) {

        let existing = guild.roles.cache.find(r => r.name === role.name);

        if (!existing) {

            existing = await guild.roles.create({
                name: role.name,
                permissions: role.permissions,
                reason: "Government System Setup"
            });

        }

        created[role.name] = existing.id;

    }

    return created;

};