const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createOneJoke);
    app.get('/api/jokes/:_id', JokeController.singleJoke);
    app.put('/api/jokes/:_id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteJoke);
}