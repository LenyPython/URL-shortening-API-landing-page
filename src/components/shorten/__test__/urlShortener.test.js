import {render, fireEvent, screen} from '@testing-library/react'
import FastShorten from '../FastShorten'

const setup = () => {
  render(<FastShorten />)
  return {
    btnShorten: screen.getByRole('button', {name: 'Shorten It!'}),
    input: screen.getByPlaceholderText(/Shorten a link here.../i)
  }
}
describe('Shornener test', () => {
  describe('Unit testing', () => {
    test('Has a "Shorten It!" button', () => {
      let {btnShorten} = setup()
      expect(btnShorten).toBeInTheDocument
    })
    test('If element with placeholderText "shorten link here..."" exists', () => {
      let {input} = setup()
      expect(input).toBeInTheDocument
    })
  })
  describe('Integration test for getting async response', () => {
    test('Throw error on empty input', () => {
      let {input} = setup()
      fireEvent.change(input, {target: {value: ''}})
      expect(screen.getByText(/please add a link/i)).toBeInTheDocument
    })
    test('If error occuren on submitim empty string', async () => {
      let {input, btnShorten} = setup()
      fireEvent.change(input, {target: {value: ''}})
      fireEvent.click(btnShorten)
      expect(screen.findByText(/error occured/i)).toBeInTheDocument
    })
    test('Get proper response', async () => {
      let {input, btnShorten} = setup()
      let mockUrl = 'https://elo.de/sakdhfskadhflashdfl'
      let shortLinkREGEX = /shrtco.de/i
      fireEvent.change(input, {target: {value: mockUrl}})
      fireEvent.click(btnShorten)
      let copyBtn = await screen.findByRole('button', {name: 'Copy'})
      let shortLink = await screen.findByText(shortLinkREGEX)
      expect(shortLink).toBeInTheDocument
      expect(copyBtn).toBeInTheDocument
    })
  })
})
