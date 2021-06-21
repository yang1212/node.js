import { Row, Col } from 'antd'
import React, { useState } from 'react';
import { Route, useRouteMatch, Link } from 'react-router-dom';
import './home.less'
import Content from './content'

export default function Home() {
  const [contentDetail, setCount] = useState('list1');
  const leftContent = [
    { name: 'react router', key: 'list1'},
    { name: 'reducer', key: 'list2'}
  ]
  const match = useRouteMatch()
  return (
    <div>
      <Row>
        <Col span={3} className="left-box">
          {
            leftContent.map((item, index) => {
              return(
                <Link to={`${match.url}/${item.key}`} key={index} onClick={() => { setCount(item.key) }}>{item.name}</Link>
              )
            })
          }
        </Col>
        <Col span={13} className="right-box">
          <Route path={`${match.path}/:topicId`}>
            <Content prop={contentDetail}/>
          </Route>
          <Route path={match.path} exact>
            <h3>Default Home</h3>
          </Route>
        </Col>
      </Row>
    </div>
  );
}
