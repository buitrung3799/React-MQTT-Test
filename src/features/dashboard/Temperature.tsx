import React, { memo } from "react"
import { Card, Col, Row } from "antd"

const TemperatureBlock: React.FC<{
  sensorName: string
  temperature: number
  unitName: string
}> = ({ sensorName, temperature, unitName }) => {
  return (
    <Row>
      <Col xs={8}>
        <Card title={sensorName}>
          <h1>
            {temperature}
            {unitName}
          </h1>
        </Card>
      </Col>
    </Row>
  )
}

TemperatureBlock.defaultProps = {
  sensorName: "",
  temperature: 0,
  unitName: "",
}

export default memo(TemperatureBlock)
