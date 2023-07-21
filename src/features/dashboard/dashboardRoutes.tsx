import React from "react"
import LazyLoad from "src/components/common/LazyLoad"
const Dashboard = LazyLoad(() => import("./Dashboard"))

export const dashboardRoutes = [
  {
    path: "/",
    element: <Dashboard />,
    label: "Dashboard",
  },
]
