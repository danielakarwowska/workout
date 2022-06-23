import {createRoot} from 'react-dom/client'
import React from 'react'


const App = (): JSX.Element => {
    const hello: string = 'Hello World'
    return <h1>{hello}</h1>
}

const dom = document.querySelector('#app')
const root = createRoot(dom)
root.render(<App />)
