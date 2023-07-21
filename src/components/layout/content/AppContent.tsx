import React, { ReactNode } from "react"
import { Layout } from "antd"
import styles from "./AppContent.module.css"
import classNames from "classnames"

const { Content } = Layout
const cx = classNames.bind(styles)
interface AppProps {
  children: ReactNode
}
const AppContent: React.FC<AppProps> = (props) => {
  return <Content className={cx("content-container")}>{props.children}</Content>
}

export default AppContent
