const clientModel = require("../models/clientModel");
class ClientController {
  search(req, res) {
    const listClient = clientModel.list();
    return listClient
      .then((client) => res.status(200).json(client))
      .catch((error) => res.status(400).json(error.message));
  }
  create(req, res) {
    const newClient = req.body;
    const client = clientModel.create(newClient);
    return client
      .then((clientcreated) => res.status(201).json(clientcreated))
      .catch((error) => res.status(400).json(error.message));
  }

  update(req, res) {
    const { id } = req.params;
    const clientupdated = req.body;
    const client = clientModel.updated(clientupdated, id);
    return client
      .then((resultclientupdated) =>
        res.status(200).json(resultclientupdated)
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
  delete(req, res) {
    const { id } = req.params;
    const client = clientModel.delete(id);
    return client
      .then((resultClientDeleted) =>
        res.status(200).json(resultClientDeleted)
      )
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new ClientController();
