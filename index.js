const express = require('express');

const PORT = 5000;

const server = express();


server.use('/api/v1/rayovallecano', (req, res) => {
 res.send('Hola somos el mejor equipo del mundo')
});

server.use('api/v1/goku', (req, res) => {
    res.send('Hola soy goku')
})

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
  });