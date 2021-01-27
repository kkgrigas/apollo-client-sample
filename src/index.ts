import express from 'express'
import app from './server'

const port = process.env.PORT || 3000

express()
  .use((req, res) => {
    console.log(`Handling request`)
    // @ts-ignore
    app.handle(req, res)
  })
  .listen(port, (...args: any[]) => {
    console.log(`> Started worker on port ${port}`)
    if (args) {
      console.error(args)
      return
    }
  })
