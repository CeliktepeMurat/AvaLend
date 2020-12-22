import { Card, Row, Col } from 'antd';
import { SwapOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className='site-statistic-demo-card'>
      <Row style={{ backgroundColor: 'rgb(34, 40, 44)' }}>
        <Col style={{ margin: '50px auto', height: '100vh' }} span={12}>
          <Card className='headerCard'>
            <div
              style={{
                float: 'left',
                backgroundColor: 'green',
                marginLeft: '20px',
              }}
              className='headerInfo'
              id={'supply'}
            >
              <span>Supply Balance</span>
              <br />
              <span>$ 0</span>
            </div>

            <SwapOutlined />

            <div
              style={{
                float: 'right',
                backgroundColor: 'red',
                marginRight: '20px',
              }}
              className='headerInfo'
              id={'borrow'}
            >
              <span>Borrow Balance</span>
              <br />
              <span>$ 0</span>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
