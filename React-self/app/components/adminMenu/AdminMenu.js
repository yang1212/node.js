import React, {Component} from 'react'
import {Menu, Icon} from 'antd'

const menus = [
    {url: '', name: '回到首页', iconType: 'edit'},
    {url: 'admin/calculate', name: '数据录入', iconType: 'edit'},
    {url: 'admin/calculateShow', name: '详细数据', iconType: 'home'},
];
export default class AdminMenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Menu
                    selectedKeys={[this.props.url]}
                    mode="inline"
                    theme="dark"
                    onClick={({key}) => {
                        this.props.history.push(`/${key}`)
                    }}
                >
                    {
                        menus.map((item, index) =>
                            <Menu.Item key={item.url} >
                                <Icon type={item.iconType}/>
                                <span>{item.name}</span>
                            </Menu.Item>)
                    }

                </Menu>
            </div>
        )
    }

}
