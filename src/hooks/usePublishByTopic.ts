import { useEffect, useRef, useState } from "react"
import { openNotification } from "src/components/common/AppNotification"
import { NotificationType } from "src/types/notification"

export default function usePublishByTopic(
  client: any,
  topic: string,
  payload: string
) {
  const [isPublished, setIsPublished] = useState<boolean>(false)
  const unmounted = useRef(false)
  // Publish func
  const mqttPublish = () => {
    if (client) {
      client.publish(topic, payload, (error: string) => {
        if (error) {
          openNotification(
            NotificationType.error,
            `Could not publish because ${error}`
          )
          if (isPublished) {
            setIsPublished(false)
          }
        }
        setIsPublished(true)
      })
    }
  }

  useEffect(() => {
    // Auto Publish with topic and payload parameter every 2 seconds
    let interval = window.setInterval(mqttPublish, 2000)

    return () => window.clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, topic, payload])

  useEffect(() => {
    return () => {
      unmounted.current = true
    }
  }, [])

  return [isPublished]
}
