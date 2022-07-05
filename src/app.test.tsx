import React from 'react'
import { render } from '@testing-library/react'
import App from './app'
import '@testing-library/jest-dom/extend-expect'


test("renders component", async () => {
    const { getByText } = render(<App/>)
    expect(getByText('Hello world')).toBeInTheDocument()//   checking if the rendered component has text
})
