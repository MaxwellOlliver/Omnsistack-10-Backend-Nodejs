const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { setWebSocket } = require('./websocket');

const routes = require('./routes');
const app = express();
const server = http.Server(app);
setWebSocket(server);

mongoose.connect('mongodb+srv://<username>:<password>@omnistack-pqlxe.mongodb.net/omnistack10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
