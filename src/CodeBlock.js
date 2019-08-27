import React from 'react'

import Highlighter from 'react-syntax-highlighter'

export default ({ code, children }) => (
  <Highlighter language='javascript'>
    {code}
  </Highlighter>
)
