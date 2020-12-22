import { Card, Row, Col } from "antd";
import { SwapOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="site-statistic-demo-card">
      <Row style={{ backgroundColor: "rgba(0, 0, 0, 0.882)" }}>
        <Col style={{ margin: "auto" }} span={12}>
          <Card className="headerCard">
            <div
              style={{ float: "left", backgroundColor: "green" }}
              className="headerInfo"
            >
              <span>Supply Balance</span>
              <br />
              <span>$ 0</span>
            </div>

            <SwapOutlined />

            <div
              style={{ float: "right", backgroundColor: "red" }}
              className="headerInfo"
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
