import React, { useEffect, useState } from "react"
import { useConnectWithMqttBroker } from "src/hooks/useConnectWithMqttBroker"
import usePublishByTopic from "src/hooks/usePublishByTopic"
import TemperatureBlock from "./Temperature"
import { DeviceModel } from "src/types/mqttData"
import { openNotification } from "src/components/common/AppNotification"
import { NotificationType } from "src/types/notification"

interface DeviceTemperatureModel extends DeviceModel {
  sensor_name: string
  value: number
  unit: string
}

const Dashboard: React.FC = () => {
  // declare
  const [payload, setPayload] = useState<DeviceTemperatureModel>({
    device_id: "",
    device_name: "",
    sensor_name: "Temperature",
    value: 0,
    unit: "*C",
  })

  const record = {
    topic: `/device/6f9ea7c7-6297-4283-b72d-7d673d3473fd/Temperature`,
    payload: JSON.stringify({
      device_id: "6f9ea7c7-6297-4283-b72d-7d673d3473fd",
      device_name: "Tank",
      sensor_name: "Temperature",
      value: Math.round(Math.random() * 100),
      unit: "*C",
    }),
  }
  // hook
  const [client] = useConnectWithMqttBroker()
  const [isPublished] = usePublishByTopic(client, record.topic, record.payload)

  useEffect(() => {
    // After published , subscribe and get message
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
    <TemperatureBlock
      sensorName={payload.sensor_name}
      temperature={payload.value}
      unitName={payload.unit}
    />
  )
}

export default Dashboard
