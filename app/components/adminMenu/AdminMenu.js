import React, {Component} from 'react'
import {Menu, Icon} from 'antd'

const menus = [
    {url: '/newArticle', name: '发文', iconType: 'file-text'},
    {url: '/managerArticle', name: '文章管理', iconType: 'edit'},
    {url: '/calculate', name: '数据计算', iconType: 'edit'},
    {url: '/calculateShow', name: '数据展示', iconType: 'home'},
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
                        this.props.changeUrl(key);
                        this.props.history.push(`/admin${key}`)
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
