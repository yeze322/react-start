import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css'

export default class Hello extends React.Component {
  render() {
    return (
      <div>
      <Button type="primary" size="large">Primary</Button>
      <h1>Hello world</h1>
      </div>
    );
  }
}