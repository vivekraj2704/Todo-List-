const express = require('express');
const { createTodo } = require('./types');
const app = express(); 

app.use(express.json());

app.post('/todo', () => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload) {
        res.status(411).json ({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    //Put it in payload
})

app.get('/todos', () => {
      
})

app.put('/completed', () => {
      const updatePayload = req.body;
      const parsedPayload = updateTodo.safeParse(updatePayload);
      if(!parsedPayload) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
      }
})

app.listen(3000)