import * as HelloWorldController from './HelloWorld.controller'
import * as HelloWorldCase from '../usecases/HelloWorld.case'

jest.mock('../usecases/HelloWorld.case', () => ({
  hello: jest.fn(() => 'HELLO')
}))

describe('HelloWorld Controller', () => {
  describe('hello Method', () => {
    it('Should return what HelloWorldCase returns', () => {
      const result = HelloWorldController.hello('SOMETHING')
      expect(result).toBe('HELLO')
    })
    it('Should call HelloWorldCase with correct params', () => {
      HelloWorldController.hello('SOMETHING')
      expect(HelloWorldCase.hello).toHaveBeenCalledWith({ name: 'SOMETHING' })
    })
  })
})
