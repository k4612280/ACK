const db = require("./init");

module.exports = {

    create(guildId) {

        return db.prepare(`
            INSERT OR IGNORE INTO settings(guild_id)
            VALUES(?)
        `).run(guildId);

    },

    get(guildId) {

        return db.prepare(`
            SELECT *
            FROM settings
            WHERE guild_id = ?
        `).get(guildId);

    },

    set(guildId, key, value) {

        const allowed = [

            "prison_admin_role_id",
            "police_team_role_id",
            "prisoner_role_id",
            "top_admin_role_id",
            "call_prisoner_role_id",

            "prison_room_id",
            "prison_news_room_id",
            "police_manage_room_id",
            "prison_logs_room_id",
            "prisoner_requests_room_id",
            "police_call_room_id",

            "prison_category_id",
            "media_category_id",

            "violations_before_solitary",
            "default_solitary_duration",

            "prison_embed_color",
            "media_embed_color",

            "send_dm_on_prison",
            "auto_delete_solitary_room",
            "auto_restore_roles",
            "auto_create_solitary",

            "backup_interval",
            "log_level"

        ];

        if (!allowed.includes(key))
            throw new Error("Invalid settings key");

        return db.prepare(`
            UPDATE settings
            SET ${key} = ?
            WHERE guild_id = ?
        `).run(value, guildId);

    }

};