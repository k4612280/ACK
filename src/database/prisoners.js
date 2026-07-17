const db = require("./init");

module.exports = {

    create(data) {

        return db.prepare(`
            INSERT INTO prisoners (

                guild_id,
                user_id,
                username,
                prison_id,
                previous_roles,
                nickname,
                reason,
                case_number,
                officer_id,
                officer_name,
                entry_time,
                release_time,
                prison_duration

            )

            VALUES (

                @guild_id,
                @user_id,
                @username,
                @prison_id,
                @previous_roles,
                @nickname,
                @reason,
                @case_number,
                @officer_id,
                @officer_name,
                @entry_time,
                @release_time,
                @prison_duration

            )
        `).run(data);

    },

    get(userId) {

        return db.prepare(`
            SELECT *
            FROM prisoners
            WHERE user_id = ?
            AND status = 'imprisoned'
        `).get(userId);

    },

    getCase(caseNumber) {

        return db.prepare(`
            SELECT *
            FROM prisoners
            WHERE case_number = ?
        `).get(caseNumber);

    },

    release(userId) {

        return db.prepare(`
            UPDATE prisoners
            SET status = 'released'
            WHERE user_id = ?
        `).run(userId);

    },

    remove(userId) {

        return db.prepare(`
            DELETE FROM prisoners
            WHERE user_id = ?
        `).run(userId);

    },

    all() {

        return db.prepare(`
            SELECT *
            FROM prisoners
            ORDER BY entry_time DESC
        `).all();

    }

};