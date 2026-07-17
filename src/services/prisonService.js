const prisoners = require("../database/prisoners");

class PrisonService {

    async prison({

        guild,
        member,
        officer,
        reason,
        duration,
        caseNumber

    }) {

        const previousRoles = member.roles.cache
            .filter(role => role.name !== "@everyone")
            .map(role => role.id);

        const prisonerRole = guild.roles.cache.find(
            role => role.name === "سجين"
        );

        if (!prisonerRole) {

            throw new Error(
                "رتبة السجين غير موجودة."
            );

        }

        await member.roles.set([
            prisonerRole.id
        ]);

        const now = Date.now();

        prisoners.create({

            guild_id: guild.id,

            user_id: member.id,

            username: member.user.tag,

            prison_id:
                `PR-${Date.now()}`,

            previous_roles:
                JSON.stringify(previousRoles),

            nickname:
                member.nickname || "",

            reason,

            case_number:
                caseNumber,

            officer_id:
                officer.id,

            officer_name:
                officer.user.tag,

            entry_time:
                now,

            release_time:
                now + duration * 60000,

            prison_duration:
                duration

        });

    }

}
    async release({

        guild,
        member

    }) {

        const prisoner =
            prisoners.get(member.id);

        if (!prisoner)
            throw new Error(
                "هذا الشخص ليس سجينًا."
            );

        const roles =
            JSON.parse(
                prisoner.previous_roles || "[]"
            );

        await member.roles.set(roles);

        prisoners.release(member.id);

    }

}

module.exports =
    new PrisonService();