const routerProfessores = require('./ProfRoute');

module.exports = (app) => {
    // Utiliza as rotas importadas para configurar as rotas na aplicação Express
    app.use(routerProfessores);
}
