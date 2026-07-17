const { ChannelType } = require("discord.js");

module.exports = async (guild, categories) => {

    const channels = [

        {
            name: "📢・الإعلانات",
            category: "🏛 الإدارة"
        },

        {
            name: "📜・السجلات",
            category: "🏛 الإدارة"
        },

        {
            name: "⚙️・إعدادات-البوت",
            category: "🏛 الإدارة"
        },

        {
            name: "🚔・لوحة-الضباط",
            category: "🚔 السجن"
        },

        {
            name: "🔒・لوحة-السجين",
            category: "🚔 السجن"
        },

        {
            name: "📋・طلبات-السجناء",
            category: "🚔 السجن"
        },

        {
            name: "📑・المخالفات",
            category: "🚔 السجن"
        },

        {
            name: "📰・وزارة-الإعلام",
            category: "📰 الإعلام"
        },

        {
            name: "📝・نشر-الإعلانات",
            category: "📰 الإعلام"
        },

        {
            name: "📥・استقبال-الطلبات",
            category: "📋 الطلبات"
        },

        {
            name: "📊・الإحصائيات",
            category: "📊 السجلات"
        },

        {
            name: "🗂️・النسخ-الاحتياطية",
            category: "📊 السجلات"
        }

    ];

    const created = {};

    for (const channel of channels) {

        let existing = guild.channels.cache.find(c => c.name === channel.name);

        if (!existing) {

            existing = await guild.channels.create({
                name: channel.name,
                type: ChannelType.GuildText,
                parent: categories[channel.category],
                reason: "Government System Setup"
            });

        }

        created[channel.name] = existing.id;

    }

    return created;

};