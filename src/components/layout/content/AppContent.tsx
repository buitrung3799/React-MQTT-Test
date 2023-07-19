import { FC, ReactNode } from "react"
import { Layout } from "antd"

const { Content } = Layout

interface AppProps {
  children: ReactNode
}
const AppContent: FC<AppProps> = (props) => {
  return <Content>{props.children}</Content>
}

export default AppContent
