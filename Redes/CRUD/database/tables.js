class Table {
  init(conection) {
    this.conection = conection;
    this.criarTabelaAtendimentos();
  }

  criarTabelaAtendimentos() {
    const sql = `
    CREATE TABLE IF NOT EXISTS cliente (
      id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nome varchar(255) NOT NULL,
      email varchar(255) NOT NULL,
      fone varchar(45) NOT NULL,
      data_n date NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
   
      `;
    this.conection.query(sql, (error) => {
      if (error) {
        console.log("Eita deu erro na hora de criar a tabela atendimentos");
        console.log(error.message);
        return;
      }
      console.log("Show criou a tabela com sucesso...");
    });
  }
}

module.exports = new Table();
