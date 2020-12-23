import { Table } from 'antd';

const columns = [
  { title: 'Group Name', dataIndex: 'name', key: 'name' },
  { title: 'Creator', dataIndex: 'age', key: 'creator' },
  { title: 'Number of Member', dataIndex: 'address', key: 'memberNumber' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'Group 1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Group 2',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Group 3',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park',
  },
  {
    key: 4,
    name: 'Group 4',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

const MyGroups = () => {
  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
      dataSource={data}
    />
  );
};

export default MyGroups;
