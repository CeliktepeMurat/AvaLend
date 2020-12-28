import React from 'react'
import { Table, Image } from 'antd'

import data from '../../config/db.json'

const columns = [
  {
    title: 'Asset',
    dataIndex: 'image',
    key: 'image',
    render: (text) => <Image style={{ width: '3em' }} src={text} />,
    width: 150,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Apy',
    dataIndex: 'apy',
    key: 'apy',
  },
  {
    title: 'Wallet',
    dataIndex: 'wallet',
    key: 'walet',
    ellipsis: true,
  },
]

const openPopUp = () => {}

const MarketTable = () => {
  return (
    <Table
      onRow={(r) => ({
        onClick: () => openPopUp(),
      })}
      className='marketTableInside'
      columns={columns}
      dataSource={data}
    />
  )
}

export default MarketTable
