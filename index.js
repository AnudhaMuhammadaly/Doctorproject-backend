// importing installed jsonserver from nodemodules

const jsonServer = require('json-server');

//2 . create a server application using jsonserver

  const docServer = jsonServer.create()

//3.setup path for db.json

const router = jsonServer.router('db.json')

//4  return a middleware instance used by json-server

const middleware = jsonServer.defaults()

//5 setup port for db.json

const port = 3005

//6  use in server

docServer.use(middleware)
docServer.use(router)

// 7 to run the server(docserver)

docServer.listen(port,()=>{
    console.log("doc server listening on port" +port);
})
