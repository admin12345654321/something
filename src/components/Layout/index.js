import React, { Fragment } from "react"
import classes from "classnames"
import "./Layout.scss"

import Toolbar from "./Toolbar"

const Layout = ({ className, children }) => (
  <Fragment>
    <Toolbar />
    <section className={classes("layout", { [className]: !!className })}>
      {children}
    </section>
  </Fragment>
)

export default Layout
