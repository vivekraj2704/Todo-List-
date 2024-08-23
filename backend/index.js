const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const app = express(); 

app.use(express.json());

app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload) {
        res.status(411).json ({
            msg: "you sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
    
})

app.get('/todos', async function(req, res) {
      const todos = await todo.find({});
      res.json({
        todos
      })
})

app.put('/completed', async function(req, res) {
      const updatePayload = req.body;
      const parsedPayload = updateTodo.safeParse(updatePayload);
      if(!parsedPayload) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
      }

      await todo.update({
        _id: req.body.id
      }, {
        completed: true
      })

      res.json({
        msg: "your todo is marked as done"
      })
})

app.listen(3000)