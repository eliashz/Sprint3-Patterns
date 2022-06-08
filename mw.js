const App = () => {
    const middlewares = []
    
    const use = fn => middlewares.push(fn)

    const runMiddlewares = index => {
        if (index < middlewares.length) {
            middlewares[index].call(null, () => runMiddlewares(index+1))
        }    
    }

    const get = () => {
        //Middlewares
        runMiddlewares(0)
        console.log('get');
    }
    return {
        get,
        use
    }
}

const app = App()

app.use((next)=> {
    console.log('1 - use')
    next()
})

app.use((next)=> {
   setTimeout(() => { 
       console.log('2')
        next()
    }, 1000)
})

app.use((next)=> {
    setTimeout(() => { 
        console.log('3')
         next()
     }, 1000)
 })

app.use((next)=> {
    console.log('4')
    next()
})

app.get()


