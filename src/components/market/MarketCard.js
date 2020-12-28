import React from 'react'
import { Card, Col, Row } from 'antd'
import Table from './Table'

const MarketCard = () => {
  return (
    <div className='site-card-wrapper marketTable'>
      <Row gutter={16}>
        <Col style={{ padding: '0px 30px 0 30px' }} span={12}>
          <Card title='Supply' bordered={true}>
            <Table />
          </Card>
        </Col>
        <Col style={{ padding: '0 30px 0 30px' }} span={12}>
          <Card title='Borrow' bordered={false}>
            <Table />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MarketCard
