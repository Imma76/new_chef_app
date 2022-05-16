/* eslint-disable class-methods-use-this */
class UserController {
  create(req, res) {
    res.status(201).send('user created');
  }

  update(req, res) {
    res.send(req.params.id);
  }
}

export default new UserController();
