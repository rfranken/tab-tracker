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
  async show (req, res) {
    try {      
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
        return res.status(500).send({
        error: 'An error has occurred trying to retrieve song with id=' 
        + req.params.songId +':' + err
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
  },
  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}