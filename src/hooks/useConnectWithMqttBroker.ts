import { useEffect, useRef, useState } from "react"
import mqtt from "mqtt"
import { clientId, username, password, url } from "src/config/mqttProtocol"
import { openNotification } from "src/components/common/AppNotification"
import { NotificationType } from "src/types/notification"
import { ConnectStatus } from "src/types/mqttStatus"

export const useConnectWithMqttBroker = () => {
  const { connect = () => null } = mqtt
  //* state
  const [client, setClient] = useState<any>(null)
  const [connectStatus, setConnectStatus] = useState<ConnectStatus>(
    ConnectStatus.notConnected
  )

  const unmounted = useRef(false)

  const mqttConnect = (
    host: string,
    mqttOption: mqtt.IClientOptions | undefined
  ) => {
    setConnectStatus(ConnectStatus.connecting)
    let newClient = connect(host, mqttOption)
    if (newClient) {
      setClient(newClient)
    } else {
      openNotification(NotificationType.error, `Couldn't' connect with MQTT`)
    }
  }
  // Auto connect with mqtt broker when component mounted
  useEffect(() => {
    const options = {
      clientId,
      username,
      password,
      clean: true,
      reconnectPeriod: 1000, // ms
      connectTimeout: 30 * 1000, // ms
    }
    mqttConnect(url, options)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //* clear side effect
  useEffect(() => {
    return () => {
      unmounted.current = true
    }
  }, [])
  return [client, connectStatus]
}
