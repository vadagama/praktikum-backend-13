const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const cardsRouter = require('./routes/cards')

const { PORT = 3000 } = process.env
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});

app.use((req, res, next) => {
  req.user = {
      // вставьте сюда _id созданного в предыдущем пункте пользователя
    _id: '5dbb44cdc69b8703707e1fb5'
  };

  next();
});

app.use('/users', usersRouter)
app.use('/cards', cardsRouter)

app.use((req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" })
})
