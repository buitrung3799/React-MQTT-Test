import React, { useEffect, useState } from "react"
import { useConnectWithMqttBroker } from "src/hooks/useConnectWithMqttBroker"
import usePublishByTopic from "src/hooks/usePublishByTopic"
import DeviceStatus from "./DeviceStatus"
import { DeviceModel } from "src/types/mqttData"
import { openNotification } from "src/components/common/AppNotification"
import { NotificationType } from "src/types/notification"
interface DeviceStatusModel extends DeviceModel {
  status: number
}

const Dashboard: React.FC = () => {
  // declare
  const [payload, setPayload] = useState<DeviceStatusModel>({
    device_id: "",
    device_name: "",
    status: 0,
  })

  const record = {
    topic: "/device/6f9ea7c7-6297-4283-b72d-7d673d3473fd",
    payload: JSON.stringify({
      device_id: "6f9ea7c7-6297-4283-b72d-7d673d3473fd",
      device_name: "Tank",
      status: Math.random(),
    }),
  }
  // hook
  const [client] = useConnectWithMqttBroker()
  const [isPublished] = usePublishByTopic(client, record.topic, record.payload)

  useEffect(() => {
    if (isPublished) {
      const { topic, payload } = record
      client.subscribe(topic, payload, (error: string) => {
        if (error) {
          openNotification(
            NotificationType.error,
            `Couldn't subscribe to topics because ${error}`
          )
        } else {
          openNotification(
            NotificationType.success,
            `Subscribed to topic ${topic}`
          )
        }
      })
      client.on("message", (topic: string, message: string) => {
        let newPayload = JSON.parse(message)
        setPayload(newPayload)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPublished])

  return (
    <DeviceStatus deviceName={payload.device_name} status={payload.status} />
  )
}

export default Dashboard
