import restana from 'restana'
import startServer from './start'

const app = restana()
const PORT = 3000

app
  .get('/', (_, res) => {
    res.send('Hello world!')
  })

startServer(app, PORT)
  .catch(e => {
    throw e
  })

export default app
