import { FC } from "react"
import { Menu, Layout } from "antd"

const { Header } = Layout

const AppHeader: FC = () => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
          { key: 1, label: "Dashboard" },
          { key: 2, label: "Device" },
        ]}
      />
    </Header>
  )
}
export default AppHeader
