import { gql, useQuery, QueryHookOptions } from '@apollo/client'

const QUERY = gql`
  query Sample {
    sample @client
  }
`

export const useSampleQuery = (options?: QueryHookOptions) => useQuery(QUERY, options)
