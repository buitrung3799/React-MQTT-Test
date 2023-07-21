import React from "react"
import LazyLoad from "src/components/common/LazyLoad"

const Device = LazyLoad(() => import("./Device"))

export const devicedRoutes = [
  {
    path: "/device",
    element: <Device />,
    label: "Device",
  },
]
