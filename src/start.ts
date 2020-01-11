import { Server as HttpServer } from 'http'
import restana = require('restana')

export enum AvailableServers {
  RESTANA = 'RESTANA'
}

export type Server<T extends AvailableServers = any> = T extends AvailableServers.RESTANA
  ? restana.Service<restana.Protocol.HTTP>
  : {
    start(port: number): Promise<HttpServer>
  }

export default async function startServer<T extends AvailableServers> (
  app: Server<T>,
  port: number
): Promise<HttpServer> {
  return app
    .start(port)
    .then(server => {
      console.log('Running on port:', port)
      return server
    })
}
