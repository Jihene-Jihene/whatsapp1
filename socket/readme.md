# About Sockets

- Socket is come into picture when there is a need for persistant connection, as socket keep connection alive.
- For ex. Chatting Apps.
- Terminlogies -
  - socket.on => it is used to start the connection and it allots unique id ie. socket.id to each user.
    - socket.emit => it is used to make request from the client to the server. We can pass any data type
    - For ex. socket.emit("custom-event", 10, "Hii", {a:"Thor"}
    - We can accept emit request using socket.on method
    - For ex. socket.on("custom-event", (number, string, obj)={ console.log(number, string, obj)})
    - socket.broadcast.emit("receive-msg",message) will sent message to all client accept itself.
    - we can use socket.id to message privately or publicly.
