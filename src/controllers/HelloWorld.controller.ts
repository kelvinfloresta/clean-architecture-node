import * as HelloWorldCase from 'src/usecases/HelloWorld.case'

interface HelloResponse {
  message: string
}

export function hello (name: string): HelloResponse {
  const response = HelloWorldCase.hello({ name })
  return response
}
