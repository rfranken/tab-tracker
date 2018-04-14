const {Song} = require('../models')


module.exports = {
  async index (req, res) {
    try {      
      const song = await Song.findAll({
        limit: 10
      })
      res.send(song)
    } catch (err) {
        return res.status(500).send({
        error: 'An error has occurred trying to retrieve songs: ' + err
      })
    }    
  },
  async post (req, res) {
    try {      
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
        return res.status(500).send({
        error: 'An error has occurred trying to create the song: ' + err
      })
    }    
  }
}