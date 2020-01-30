export interface HelloCaseInput {
  name: string
}

export interface HelloCaseOutput {
  message: string
}

export function hello (params: HelloCaseInput): HelloCaseOutput {
  if (params.name === 'Kelvin') {
    return { message: 'Hello Florest' }
  }
  return { message: 'Hello ' + params.name }
}
