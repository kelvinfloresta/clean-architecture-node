import { Router, Protocol, Service } from 'restana'

export function routerV1<T extends Protocol> (app: Service<T>): Router<T> {
  const route = app.newRouter()
  route.get('/', (_, res) => {
    res.send('Hello world!')
  })
  return route
}
