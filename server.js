const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Rota personalizada para obter a tarefa com a respectiva coluna e categoria
server.get('/tarefa/:id', (req, res) => {
  const tarefaId = parseInt(req.params.id);
  const tarefa = router.db.get('tarefa').find({ id: tarefaId }).value();
  
  if (tarefa) {
    const colunaId = tarefa.colunaId;
    const categoriaId = tarefa.categoriaId;
    
    const coluna = router.db.get('coluna').find({ id: colunaId }).value();
    const categoria = router.db.get('categoria').find({ id: categoriaId }).value();
    
    if (coluna && categoria) {
      const tarefaWithRelatives = { ...tarefa, coluna, categoria };
      res.jsonp(tarefaWithRelatives);
    } else {
      res.status(404).jsonp({ error: 'Relações não encontradas' });
    }
  } else {
    res.status(404).jsonp({ error: 'Tarefa não encontrada' });
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server está em execução');
});