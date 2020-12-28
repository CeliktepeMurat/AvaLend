import MyGroups from './MyGroups'
import { PlusOutlined } from '@ant-design/icons'
import { Layout, PageHeader, Button, Divider } from 'antd'

const { Content, Footer } = Layout

const Index = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Content className='container' style={{ padding: '0px 0px' }}>
        <PageHeader
          title='Your Groups'
          extra={[
            <Button
              type='primary'
              style={{
                backgroundColor: 'rgb(34, 40, 44)',
                borderColor: 'rgb(34, 40, 44)',
              }}
              className='createGroupButton'
            >
              Create Group <PlusOutlined />
            </Button>,
          ]}
        >
          <Divider />
          <div>
            <MyGroups />
          </div>
        </PageHeader>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default Index
