import React from 'react'
import { useSampleQuery } from 'graphql/queries/Sample'

export default () => {
  const { data } = useSampleQuery()
  return <div>{data.anonId}</div>
}
