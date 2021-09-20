import {render, screen} from '@testing-library/react'
import CallToAction from '../calltoaction/CallToAction'

test('Does call to action has get started button', () => {
  render(<CallToAction />)
  expect(screen.getByRole('button', {name: 'Get Started'})).toBeInTheDocument

})
