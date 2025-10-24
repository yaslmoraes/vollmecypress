import sqlite3 from 'sqlite3';

// Abre o arquivo database.sqlite
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Erro ao abrir o banco:', err.message);
  } else {
    console.log('Banco aberto com sucesso!');
  }
});

// Consulta emails e senhas da tabela paciente
db.all("SELECT email, senha FROM especialista", [], (err, rows) => {
  if (err) {
    console.error('Erro na consulta:', err.message);
  } else {
    console.log('Resultados:');
    console.log(rows);
  }

  // Fecha o banco
  db.close((err) => {
    if (err) console.error('Erro ao fechar o banco:', err.message);
    else console.log('Banco fechado!');
  });
});
