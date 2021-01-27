import express from 'express'

import React from 'react'
import ReactDOM, { renderToString } from 'react-dom/server'
import App from 'App'
import Html from 'Html'
import getApolloClient from 'graphql/getApolloClient'
import { ApolloProvider } from '@apollo/client'

export default () => async (request: express.Request, response: express.Response) => {
  const sessionApolloClient = getApolloClient({
    target: 'node',
  })

  let html: JSX.Element = <></>
  try {
    const content = await renderToString(
      <ApolloProvider client={sessionApolloClient}>
        <App />
      </ApolloProvider>
    )

    html = <Html content={content} />
  } catch {
    // nothing
  }

  const htmlResponse = ReactDOM.renderToString(html)

  const formatMemoryUsage = (data: any) => `${Math.round((data / 1024 / 1024) * 100) / 100} MB`

  const memoryData = process.memoryUsage()

  const memoryUsage = {
    rss: `${formatMemoryUsage(memoryData.rss)}`,
    heapTotal: `${formatMemoryUsage(memoryData.heapTotal)}`,
    heapUsed: `${formatMemoryUsage(memoryData.heapUsed)}`,
    external: `${formatMemoryUsage(memoryData.external)}`,
  }

  console.log(memoryUsage)
  sessionApolloClient.stop()
  response.send(`<!doctype html>${htmlResponse}`).end()
}
