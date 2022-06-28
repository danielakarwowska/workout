import {createRoot} from 'react-dom/client'
import React from 'react'
import './style.scss'


const App = (): JSX.Element => {
    const hello: string = 'Hello World'
    return <h1>{hello}</h1>
}

const dom = document.getElementById('app')
const root = createRoot(dom)
root.render(<App />)
