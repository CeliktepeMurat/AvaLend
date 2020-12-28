import { Layout, PageHeader } from 'antd';
import MyGroups from './MyGroups';
import { PlusOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;

const Index = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Content className='container' style={{ padding: '0px 0px' }}>
        <PageHeader
          title='Your Groups'
          extra={[
            <button className='createGroupButton'>
              Create Group <PlusOutlined />
            </button>,
          ]}
        >
          <div>
            <MyGroups />
          </div>
        </PageHeader>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Index;
