const fs = require('fs');
const path = require('path');

//criar uma pasta

fs.mkdir(path.join(__dirname, '/teste'), error => {
  if (error) {
    return console.log('error: ', error);
  }
  return console.log('Pasta criada com sucesso!');
});

//criar um arquvido
fs.writeFile(
  path.join(__dirname, '/teste', 'teste.txt'),
  'hello node! ',
  error => {
    if (error) {
      return console.log('error: ', error);
    }
    console.log('Arquivo criado com sucesso!');

    //modificar um arquvido
    fs.appendFile(
      path.join(__dirname, '/teste', 'teste.txt'),
      'hello world! ',
      error => {
        if (error) {
          return console.log('error: ', error);
        }
        console.log('Arquivo modificado com sucesso!');
      }
    );

    //ler arquivo
    fs.readFile(
      path.join(__dirname, '/teste', 'teste.txt'),
      'utf8',
      (error, data) => {
        if (error) {
          return console.log('error: ', error);
        }
        return console.log(data);
      }
    );
  }
);
