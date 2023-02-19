const controller = require('../controller/logic/city.controller');

module.exports = (app) => {
    
    app.get('/api/v1/city', (req, res)=> {
        controller.getAll(req, res);
    })
    
    app.post('/api/v1/city', (req, res)=> {
        controller.create(req, res);
    })
    
    app.patch('/api/v1/city/:id', (req, res)=> {        
        controller.update(req, res);
    })
    
    app.delete('/api/v1/city/:id', (req, res)=> {
        controller.delete(req, res);
    })

}