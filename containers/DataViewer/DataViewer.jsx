import React from 'react'
import { Table, Pagination } from 'antd'
const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

export default class DataViewer extends React.Component {
  state = {
    page: 1
  }
  onChangePage = (page, pageSize) => {
    this.setState({
      page: page
    })
  }
  render () {
    return (
      <div>
        <h1>Most Common Repositories</h1>
        <Table style={{margin: 20}} dataSource={dataSource} columns={columns} pagination={false} />
        <Pagination showQuickJumper defaultCurrent={this.state.page} pageSize={50} total={500} />
      </div>
    )
  }
}
