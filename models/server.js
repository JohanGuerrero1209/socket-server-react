//Servidor de Express
const express = require('express');
//Servidor http
const http = require('http');
//Servidor de Sockets
const socketio = require('socket.io');
// Para moverse entre directorios
const path = require('path');
//Sockets
const Sockets = require('./sockets');
//CORS
const cors = require('cors');

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        //Crear el http server

        this.server = http.createServer(this.app);
        const server = require('http').createServer(this.app);
       
        //Configurar sockets
        this.io = socketio(this.server, {/* Configuraciones como latencia, timeout, etc... */} );
    }

        //Middlewares

        middlewares() {

            //Desplegar el directorio público
            this.app.use(express.static( path.resolve( __dirname, '../public' ) ) );
        
            //Verificar el CORS
            this.app.use(cors() );
        } 
        
        //Método para configurar sockets

        configurarSockets(){

            new Sockets(this.io);
        }
        //Método para inicializar la aplicación
    
        execute() {

            //Inicializar Middlewares
            this.middlewares();
            
            //Inicializar la configuracion de los sockets
            this.configurarSockets();

            //Inicializar Servidor
            this.server.listen(this.port, () => {
                console.log('Conexión abierta en puerto:', this.port);
            });
        }

        
    
    
}
module.exports = Server;

///Token github: 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