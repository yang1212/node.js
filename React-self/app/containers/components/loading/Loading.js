import React from 'react'
import { Spin } from 'antd';
import './style.css'
export const Loading=()=>(
  <div className="container">
    <Spin size="large"/>
  </div>
);