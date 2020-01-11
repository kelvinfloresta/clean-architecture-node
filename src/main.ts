import restana from 'restana'
import startServer from './start'
import { routerV1 } from './presentation/router'

const app = restana()
const PORT = 3000
app.use('/v1', routerV1(app))

startServer(app, PORT)
  .catch(e => {
    throw e
  })

export default app
