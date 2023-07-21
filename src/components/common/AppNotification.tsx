import { notification } from "antd"
import { NotificationType } from "src/types/notification"

export const openNotification = (
  type: NotificationType,
  description: string
) => {
  let getMessage = () => {
    switch (type) {
      case NotificationType.info:
        return "Info"
      case NotificationType.success:
        return "Success"
      case NotificationType.error:
        return "Error!"
      default:
        return ""
    }
  }
  notification.open({
    message: getMessage(),
    description,
    placement: "bottomLeft",
  })
}
