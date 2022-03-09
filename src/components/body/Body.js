import React from 'react'
import classes from './Body.module.css'
import Content from './content/Content'
import Header from './Header'
const Body = () => {
  return (
    <div className={classes.body}>
      <Header />
      <Content />
    </div>
  )
}

export default Body
