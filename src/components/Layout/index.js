import React, { Fragment } from "react"
import "./Layout.scss"

import Toolbar from "./Toolbar/Toolbar"

const Layout = ({ children }) => (
  <Fragment>
    <Toolbar />
    <section className='layout'>{children}</section>
  </Fragment>
)

export default Layout
