import * as HelloWorldCase from './HelloWorld.case'

describe('HelloWorld Case', () => {
  describe('hello Method', () => {
    it('Should return Hello + `name`', () => {
      const params = { name: 'John' }
      const result = HelloWorldCase.hello(params)
      expect(result).toMatchObject({ message: 'Hello John' })
    })
    it('Should return `Hello Florest` if name is Kelvin', () => {
      const params = { name: 'Kelvin' }
      const result = HelloWorldCase.hello(params)
      expect(result).toMatchObject({ message: 'Hello Florest' })
    })
  })
})
