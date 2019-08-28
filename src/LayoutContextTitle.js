import React from 'react'

export default ({ children }) => {
  const [title, ...content] = children

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '50px'
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {content}
      </div>
    </>
  )
}
