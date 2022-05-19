import Hub from '../models/hub.model.js'

class HubController {
  async create (req, res) {
    // const hub = new Hub(req.body)

    // await hub.save()

    const hub = await Hub.create(req.body)


    res.send(hub)
  }

  async list (req, res) {
    const hubs = await Hub.find();

    return res.send({
      success: true, 
      message: 'List of hubs',
      data: hubs
    })
  }
}

export default new HubController()