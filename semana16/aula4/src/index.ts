import express, { Request, Response } from "express";
import { AddressInfo } from 'net';
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'eloisa',
    password : '9B14WnvOEfRE8kyM8Fuf',
    database : 'bouman-eloisa'
  }
});

//1
app.post('/createUser', (req: Request, res: Response) => {
  
  const nonQuery = connection.insert(req.body).into('users');
  
  nonQuery.then((result)=>{
    res.send(`O usuário ${req.body.primeiro_nome} foi criado`);
  }).catch((err)=>{
    res.send(err);
  })

});

//2
app.put('/editUser/:userId', (req: Request, res: Response) => {
  const query = connection.raw(`
    UPDATE users
    SET nickname = ${req.body.nickname}
    WHERE id = ${req.params.userId}
  `);
  
  query.then((result)=>{
    res.send(`Nickname alterado com sucesso.`);
  }).catch((err)=>{
    res.send(err);
  })
});

//3
app.delete('/deleteUser/:userId', (req: Request, res: Response) => {
  const query = connection.raw(`
    DELETE FROM users
    WHERE id = ${req.params.userId}
  `);
  
  query.then((result)=>{
    res.send(`Usuário deletado com sucesso.`);
  }).catch((err)=>{
    res.send(err);
  })
})

//4
app.get('/getUser', (req: Request, res: Response)=>{
  const hasQueryString = Object.values(req.query).length > 0;
  if(hasQueryString){
    const nameToFind = req.query.name;
    const idToFind = req.query.id;

    if (nameToFind) {
      const query = connection.raw(`SELECT * FROM users WHERE name LIKE ${nameToFind}`);
      query.then((result)=>{
        res.send(result);
      })
    } else if (idToFind) {
      const query = connection.raw(`SELECT * FROM users WHERE id LIKE ${idToFind}`);
      query.then((result)=>{
        res.send(result);
      })
    }
  } else{
    res.end(400);
  }
});

//5

//6
app.post('/createTask', (req: Request, res: Response) => {
  
  const nonQuery = connection.insert(req.body).into('tasks');
  
  nonQuery.then((result)=>{
    res.send(`Tarefa criada com sucesso.`);
  }).catch((err)=>{
    res.send(err);
  })
});

//7
app.put('/editTask/:taskId', (req: Request, res: Response) => {
  const query = connection.raw(`
    UPDATE tasks
    SET description = ${req.body.description}
    SET dateToDo = ${req.body.dateToDo}
    WHERE id = ${req.params.taskId}
  `);
  
  query.then((result)=>{
    res.send(`Tarefa alterada com sucesso.`);
  }).catch((err)=>{
    res.send(err);
  })
});

//8

//9

//10

//11


app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/ping': 'retorna o texto pong',
      '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
    }
  };

  // Exemplo de retorno de um JSON
  res.send(resposta)
});

app.get('/ping', (req: Request, res: Response) => {
  const hasQueryString = Object.values(req.query).length > 0;

  if(hasQueryString){
    // Exemplo de retorno de um JSON
    res.send(req.query);
  } else {
    // Exemplo de retorno de texto "puro"
    res.send('pong (nenhuma query string foi passada)');
  }
});

app.get('/hello/:name', (req: Request, res: Response) => {
  const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;

  // Exemplo de retorno de HTML
  res.send(resposta)
});

app.post('/mirror/:cor', (req: Request, res: Response) => {
  let responseBody;

  if(req.params.cor !== "0"){
    responseBody = { ...req.body, corPredileta: req.params.cor };
  } else {
    responseBody = { ...req.body, corPredileta: "NAO INFORMADA" };
  }

  res.send(responseBody);
});

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
