import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import wildcardHandler from './server/handlers/wildcard'

const server = express()
server.use(cors())
server.use(morgan('tiny'))

server.get('/*', wildcardHandler())
export default server
