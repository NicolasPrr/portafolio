import React from 'react';
import './App.less';

import { ListProject ,AvatarContent, Time, Description } from './components'

import { Layout, Row, Col } from 'antd'

import { data,} from './variables'



const { Content, Header } = Layout



const App = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', boxShadow: '3px 3px 5px 6px #ccc', height: 35 }} />
      <Content style={{padding: '10px'}}>
        <Row>
          <Col span={6} >
            <AvatarContent />
            <Time />
          </Col>
          <Col span={18} >
            <Description title='Acerca de mi'>
                {data.about}
            </Description>
            <Description title='Proyectos'>
              <ListProject/>
            </Description>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default App;
