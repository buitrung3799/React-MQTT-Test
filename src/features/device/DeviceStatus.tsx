import React, { memo } from "react"
import { Card, Col, Row } from "antd"

const DeviceStatus: React.FC<{
  deviceName: string
  status: number
}> = ({ deviceName, status }) => {
  return (
    <Row>
      <Col xs={8}>
        <Card title={deviceName}>
          <h1>Status: {status}</h1>
        </Card>
      </Col>
    </Row>
  )
}

DeviceStatus.defaultProps = {
  deviceName: "",
  status: 0,
}

export default memo(DeviceStatus)
