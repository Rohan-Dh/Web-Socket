import { Server } from "socket.io";


class SocketServer {
    constructor() {
        this.io = null;
    }
    init(server) {
        this.io = new Server(server);
        this.connectedUser = new Set();
        this.connectionHandler();
    }
    connectionHandler() {
        const userChat = this.io.of("/user/chat");
        userChat.on("connection", (socket) => {
            this.connectedUser.add(socket.id);
            console.log("user:id: ", socket.id);
            // console.log(socket);
            socket.on("chat message", (message) => {
                console.log("message: ", message);
                this.connectedUser.forEach(socketId => {
                    userChat.to(socketId).emit("chat message", message);
                })
            });

            socket.on("disconnect", () => {
                this.connectedUser.delete(socket.id);
                console.log("User is disconnected:", socket.id);
            });
        });
    }
}

export default new SocketServer();