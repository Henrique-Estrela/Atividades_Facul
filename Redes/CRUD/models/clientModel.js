const conection = require("../database/conection");
class ClientModel {
  executaQuery(sql, parametros = "" ) {
    return new Promise((resolve, reject) => {
      conection.query(sql, parametros, (error, resposta) => {
        if (error) {
          console.log(parametros)
          return reject(error);
        }
        return resolve(resposta);
      });
    });
  }
  list() {
    const sql = "SELECT * FROM cliente";
    return this.executaQuery(sql);
  }

  create(novoAtendimento) {
    const sql = "INSERT INTO cliente SET ?";
    return this.executaQuery(sql, novoAtendimento);
  }

  updated(atendimentoAtualizado, id) {
    const sql = "UPDATE cliente SET ? WHERE id = ?";
    return this.executaQuery(sql, [atendimentoAtualizado, id]);
  }

  delete(id) {
    const sql = "DELETE FROM cliente WHERE id = ?";
    return this.executaQuery(sql, id);
  }
}

module.exports = new ClientModel();
