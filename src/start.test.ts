import startServer from './start'
import { createServer, Server } from 'http'

async function makeSut (): Promise<Server> {
  const server = {
    start: async (port: number) => Promise.resolve(createServer().listen(port))
  }

  return startServer(server, 3000)
}

describe('startServer method', () => {
  it('should return HTTP server instance', async () => {
    const sut = await makeSut()
    expect(sut).toBeInstanceOf(Server)
    sut.close()
  })
})
