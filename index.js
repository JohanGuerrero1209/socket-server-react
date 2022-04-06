const Server = require("./models/server");
require('dotenv').config();

//Instanciamos la clase del servidor
const server = new Server();
//Ejecutamos el servidor
server.execute();

/*
Creación de un servidor de básico 

Servidor de Express

const app = express();

Servidor de Sockets
const server = require('http').createServer(app);

Configuración del socket server
const io = require('socket.io')(server);

Desplegar el directorio público
app.use(express.static( __dirname + '/public'));

Conexión
io.on('connection', (socket) => {
    console.log(socket.id)

    Emitir un evento desde Servidor (instrucción que se dispara)
    socket.emit('mensaje-bienvenida', {
        msg: 'Bienvenido, esto es un objeto',
        fecha: new Date()
    });

    Vamos a escuchar un mensaje del cliente

    /socket.on('mensaje-to-server', (data) => {
        console.log(data);

        socket.emit('mensaje-from-server', data);
    })

    Si el mensaje se quiere pasar a todos los clientes, se usa el contexto de io, no de socket

    socket.on('mensaje-to-server', (data) => {
        console.log(data);

        io.emit('mensaje-from-server', data);
    })
});*/


