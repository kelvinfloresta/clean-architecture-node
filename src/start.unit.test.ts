import startServer from './start'

describe('startServer method', () => {
  const ANY_PORT = 0
  it('should call start', async () => {
    const server: any = { start: async () => Promise.resolve() }
    const spy = jest.spyOn(server, 'start')
    await startServer(server, ANY_PORT)
    expect(spy).toBeCalledWith(ANY_PORT)
  })
})
