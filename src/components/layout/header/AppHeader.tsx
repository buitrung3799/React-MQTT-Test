import React, { useEffect, useState } from "react"
import { Menu, Layout } from "antd"
import { Link } from "react-router-dom"
import { router } from "src/routes"
import styles from "./AppHeader.module.css"
import classNames from "classnames"

const { Header } = Layout
const cx = classNames.bind(styles)

const AppHeader: React.FC = () => {
  const [currentKey, setCurrentKey] = useState<string>("")
  const currentPathName = window.location.pathname

  useEffect(() => {
    onSelect({ key: currentPathName })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSelect = (arg: { key: string }) => {
    const { key = "/" } = arg
    if (currentKey !== key) {
      setCurrentKey(key)
    } else {
      return
    }
  }
  const backToDashboard = () => {
    onSelect({ key: "/" })
  }
  return (
    <Header className={cx("header-container")}>
      <Link to="/" onClick={backToDashboard}>
        <h1 className={cx("app-logo")}>MQTT TEST</h1>
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentKey]}
        onSelect={onSelect}
        items={router.map((route) => ({
          key: route.path,
          label: <Link to={route.path}>{route.label}</Link>,
          screenName: route.label,
        }))}
      />
    </Header>
  )
}
export default AppHeader
