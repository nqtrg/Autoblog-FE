import React from "react"
import containerStyles from "./container.module.css"
console.log(containerStyles)
export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)