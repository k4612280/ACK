module.exports = {

    name: "warn",

    async execute(info) {

        console.warn("⚠️ Warning");

        console.warn(info);

    }

};