module.exports = async (guild) => {

    const names = [
        "🏛 الإدارة",
        "🚔 السجن",
        "📰 الإعلام",
        "📋 الطلبات",
        "📊 السجلات"
    ];

    const categories = {};

    for (const name of names) {

        let category = guild.channels.cache.find(
            c => c.type === 4 && c.name === name
        );

        if (!category) {

            category = await guild.channels.create({
                name,
                type: 4,
                reason: "Government System Setup"
            });

        }

        categories[name] = category.id;

    }

    return categories;

};