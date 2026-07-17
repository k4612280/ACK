const db = require("./init");

module.exports = {

    get(guildId) {

        return db.prepare(
            "SELECT * FROM settings WHERE guild_id=?"
        ).get(guildId);

    },

    create(guildId) {

        return db.prepare(
            "INSERT OR IGNORE INTO settings(guild_id) VALUES(?)"
        ).run(guildId);

    },

    update(column, value, guildId) {

        const allowed = [
            "prison_role_id",
            "officer_role_id",
            "media_role_id",
            "admin_role_id",
            "logs_channel_id",
            "prison_channel_id",
            "media_channel_id"
        ];

        if (!allowed.includes(column)) return;

        db.prepare(
            `UPDATE settings SET ${column}=? WHERE guild_id=?`
        ).run(value, guildId);

    }

};