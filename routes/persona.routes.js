const controller = require('../controller/logic/persona.controller.js');

module.exports = (app) => {
    app.get('/api/v1/person', (req, res)=> {
        controller.getAll(req, res);
    })
    app.post('/api/v1/person', (req, res)=> {
        controller.create(req, res);
    })
}