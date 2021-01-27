import { InMemoryCache } from '@apollo/client/cache'
import { makeVar } from '@apollo/client'

export const sampleVar = makeVar<string | undefined>(undefined)

export default () =>
  new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          sample: () => sampleVar(),
          //sampleVar: sampleVar, // seems to work
        },
      },
    },
  })
