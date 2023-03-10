const controller = require('../controller/logic/person.controller.js');

module.exports = (app) => {
    
    app.get('/api/v1/person', (req, res)=> {
        controller.getAll(req, res);
    })
    
    app.post('/api/v1/person', (req, res)=> {
        controller.create(req, res);
    })
    
    app.patch('/api/v1/person/:id', (req, res)=> {        
        controller.update(req, res);
    })
    
    app.delete('/api/v1/person/:id', (req, res)=> {
        controller.delete(req, res);
    })

    app.get('/api/v1/person/getWithCity/:id', (req, res)=> {
        controller.getWithCity(req, res);
    })
}