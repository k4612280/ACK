module.exports = {

    name: "error",

    async execute(error) {

        console.error("❌ Discord Error");

        console.error(error);

    }

};