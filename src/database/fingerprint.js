const db = require("./init");

module.exports = {

    create(data) {

        return db.prepare(`
            INSERT INTO fingerprints (

                guild_id,
                officer_id,
                officer_name,
                type

            )

            VALUES (

                @guild_id,
                @officer_id,
                @officer_name,
                @type

            )
        `).run(data);

    },

    get(officerId) {

        return db.prepare(`
            SELECT *
            FROM fingerprints
            WHERE officer_id = ?
            ORDER BY id DESC
        `).all(officerId);

    },

    latest(officerId) {

        return db.prepare(`
            SELECT *
            FROM fingerprints
            WHERE officer_id = ?
            ORDER BY id DESC
            LIMIT 1
        `).get(officerId);

    },

    all() {

        return db.prepare(`
            SELECT *
            FROM fingerprints
            ORDER BY id DESC
        `).all();

    }

};