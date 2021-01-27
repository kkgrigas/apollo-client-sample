import React from 'react'

type Props = {
  content?: string
}

export default ({ content }: Props) => {
  return (
    <html>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      </body>
    </html>
  )
}
