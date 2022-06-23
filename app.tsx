const App = (): JSX.Element => {
    const hello: string = 'Hello World'
    return <h1>{hello}</h1>
}

const dom = document.querySelector('#app')
const root = ReactDOM.createRoot(dom)
root.render(App)
