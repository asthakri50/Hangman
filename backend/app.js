const Express = require('express');
const Router = require('./routes');
const { sequelize  , Word} = require('./models');

async function initialize() {
    const app = Express();

    app.use(Express.json());
    app.use("/api", Router);

    await sequelize.sync();
    // await Word.bulkCreate([
    //     {
    //         title: "bazzinga"
    //     },
    //     {
    //         title: "amazing"
    //     },
    //     {
    //         title: "scaler"
    //     },
    //     {
    //         title: "nodejs"
    //     },
    //     {
    //         title: "programme"
    //     },
    //     {
    //         title: "hangman"
    //     }
    // ])

    app.listen(8000, () => {
        console.log("Running application on port 8000");
    })
}

initialize();