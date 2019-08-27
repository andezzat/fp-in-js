import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default ({ key = new Date().valueOf(), children }) => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      {...{key}}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)
