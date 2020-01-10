import { Server as HttpServer } from 'http'

export interface AvailableServer {
  start(port: number): Promise<HttpServer>
}

export default async function startServer (app: AvailableServer, port: number): Promise<HttpServer> {
  return app
    .start(port)
    .then(server => {
      console.log('Running on port:', port)
      return server
    })
}
