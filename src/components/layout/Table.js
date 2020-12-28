import React from 'react';
import { Row, Col, Card } from 'antd';

import data from '../../config/db.json';

const marketData = data.map((d) => {
  return (
    <Row justify='center'>
      <Col span={10}>
        <Card hoverable>
          <div>
            <img src={d.image} alt='' />
            <p>{d.name}</p>
            <p>{d.apy}</p>
            <p>{d.wallet}</p>
          </div>
        </Card>
      </Col>
      <Col span={10}>
        <Card hoverable>
          <div>
            <img src={d.image} alt='' />
            <p>{d.name}</p>
            <p>{d.apy}</p>
            <p>{d.wallet}</p>
          </div>
        </Card>
      </Col>
    </Row>
  );
});
const Table = () => {
  return <div>{marketData}</div>;
};

export default Table;
