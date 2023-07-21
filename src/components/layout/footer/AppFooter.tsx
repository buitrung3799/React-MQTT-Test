import React from "react"
import { Layout } from "antd"
import styles from "./AppFooter.module.css"
import classNames from "classnames"

const { Footer } = Layout
const cx = classNames.bind(styles)

const AppFooter: React.FC = () => {
  return (
    <Footer className={cx("app-footer")}>
      React MQTT Test App @2023 Created by Trung
    </Footer>
  )
}

export default AppFooter
