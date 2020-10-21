import React from 'react';
import './App.less';

import { AvatarContent, Time } from './components'

import { Layout, Row, Col } from 'antd'

const { Content, Header } = Layout


const App = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', boxShadow: '3px 3px 5px 6px #ccc', height: 35 }} />
      <Content>
        <Row >
          <Col span={6} >
            <AvatarContent />
            <Time />
          </Col>
          <Col span={18} >
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default App;
