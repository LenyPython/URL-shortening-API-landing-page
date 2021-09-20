import {render, screen} from '@testing-library/react'
import FastShorten from '../FastShorten'

describe('Shornener test', () => {
  describe('Unit testing', () => {
    test('Has a "Shorten It!" button', () => {
      render(<FastShorten />)
      expect(screen.getByRole('button', {name: 'Shorten It!'})).toBeInTheDocument
    })
    test('If element with placeholderText "shorten link here..."" exists', () => {
      render(<FastShorten />)
      expect(screen.getByPlaceholderText(/Shorten a link here.../i)).toBeInTheDocument
    })
  })

  describe('Integration test for getting async response', () => {

  })
})
