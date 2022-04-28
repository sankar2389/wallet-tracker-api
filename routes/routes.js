// import other routes
const walletRoutes = require('./wallet');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    walletRoutes(app, fs);

};

module.exports = appRouter;