import { dashboardRoutes } from "src/features/dashboard/dashboardRoutes"
import { devicedRoutes } from "src/features/device/deviceRoutes"

const router = [...dashboardRoutes, ...devicedRoutes]

export { router }
