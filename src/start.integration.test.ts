import startServer from './start'
import { createServer, Server } from 'http'

const PORT = 3000
async function makeSut (): Promise<Server> {
  const server: any = {
    start: async (port: number) => Promise.resolve(createServer().listen(port))
  }

  return startServer(server, PORT)
}

describe('startServer method', () => {
  it('should return HTTP server instance', async () => {
    const sut = await makeSut()
    expect(sut).toBeInstanceOf(Server)
    sut.close()
  })

  it(`should start server on PORT: ${PORT}`, async () => {
    const sut = await makeSut()
    const config = { ...sut.address() as any }
    expect(config.port === PORT).toBeTruthy()
    sut.close()
  })
})
