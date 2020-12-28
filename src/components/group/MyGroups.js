import { Table, PageHeader, Button, Statistic, Descriptions } from "antd";
import { ArrowRightOutlined, CloseOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const columns = [
  { title: "Group Name", dataIndex: "name", key: "name" },
  { title: "Creator", dataIndex: "creator", key: "creator" },
  { title: "Number of Member", dataIndex: "memberNumber", key: "memberNumber" },
  { title: "Status", dataIndex: "status", key: "status" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: () => (
      <Button key="1" type="link">
        View Market <ArrowRightOutlined />
      </Button>
    ),
  },
];

const data = [
  {
    key: 1,
    name: "Group 1",
    creator: "0xfe8886bec537252040dff36448c0f104be635650",
    memberNumber: 100,
    status: "active",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Group 2",
    creator: "0xfe8886bec537252040dff36448c0f104be635650",
    memberNumber: 100,
    status: "active",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Group 3",
    creator: "0xfe8886bec537252040dff36448c0f104be635650",
    memberNumber: 100,
    status: "active",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park",
  },
  {
    key: 4,
    name: "Group 4",
    creator: "0xfe8886bec537252040dff36448c0f104be635650",
    memberNumber: 100,
    status: "active",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];

const renderContent = (column = 1) => (
  <Descriptions size="medium" column={column}>
    <Descriptions.Item label="Creator">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Number of Member">
      <span>100</span>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Date">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Description">Group Description</Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: "flex",
      width: "max-content",
      justifyContent: "flex-end",
      float: "right",
      marginTop: "-100px",
    }}
  >
    <Statistic
      title="Status"
      value="Active"
      style={{
        marginRight: 32,
      }}
    />
    <Statistic title="TVL" prefix="$" value={568.08} />
  </div>
);

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

const MyGroups = () => {
  const history = useHistory();
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <PageHeader
            className="site-page-header-responsive"
            title="Group Name"
            extra={[
              <Button
                style={{ backgroundColor: "red", color: "white" }}
                key="2"
              >
                Exit Group <CloseOutlined />
              </Button>,
              <Button
                style={{ backgroundColor: "green" }}
                key="1"
                type="primary"
                onClick={() => {
                  history.push("/market");
                }}
              >
                View Market <ArrowRightOutlined />
              </Button>,
            ]}
          >
            <Content extra={extraContent}>{renderContent()}</Content>
          </PageHeader>
        ),
      }}
      dataSource={data}
    />
  );
};

export default MyGroups;
