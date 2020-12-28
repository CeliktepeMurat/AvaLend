import React, { Component } from 'react';
import { Table, Layout, PageHeader, Button, Divider, Input, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;

export default class AllGroups extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      searchedColumn: '',
    };
  }

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  columns = [
    {
      title: 'Group Name',
      dataIndex: 'name',
      key: 'name',
      ...this.getColumnSearchProps('name'),
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator',
      ...this.getColumnSearchProps('creator'),
    },
    {
      title: 'Number of Member',
      dataIndex: 'memberNumber',
      key: 'memberNumber',
      ...this.getColumnSearchProps('memberNumber'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ...this.getColumnSearchProps('status'),
    },
  ];

  data = [
    {
      key: 1,
      name: 'Group 1',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Group 2',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Group 3',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park',
    },
    {
      key: 4,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 5,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 6,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 7,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 8,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 9,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 10,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 4,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 4,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 4,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
      key: 4,
      name: 'Group 4',
      creator: '0xfe8886bec537252040dff36448c0f104be635650',
      memberNumber: 100,
      status: 'Active',
      description:
        'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];

  render() {
    return (
      <Layout>
        <Content className='container' style={{ padding: '0px 0px' }}>
          <PageHeader title='All Groups'>
            <Divider />
            <div>
              <Table
                pagination={false}
                columns={this.columns}
                dataSource={this.data}
              />
              ;
            </div>
          </PageHeader>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
