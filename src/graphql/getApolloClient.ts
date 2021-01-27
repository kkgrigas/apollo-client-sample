import { ApolloClient } from '@apollo/client'
import getCache from './getInMemoryCache'

type GetClient = {
  target: 'web' | 'node'
}

export default ({ target }: GetClient) =>
  new ApolloClient({
    cache: getCache(),
    ssrMode: target === 'node',
  })
