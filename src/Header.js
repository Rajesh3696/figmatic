import React from 'react'
 import './Header.css'
import { Link } from 'react-router-dom'
import { Menu, Dropdown, Space,Breadcrumb,Avatar,Typography} from 'antd';
import { DownOutlined,BellOutlined,FontSizeOutlined,UserOutlined} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
// import AppContent from './AppContent'
import Leftpanel from './Leftpanel'

const {Title}=Typography
function AppHeader() {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
            </a>
            </Menu.Item>
            <Menu.Item icon={<DownOutlined />} disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
            </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
            </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    );
    return (
        <div >
            <div className="container-fluid row" style={{backgroundcolor:"dark",height:40}}>
                <Title level={2} style={{fontSize:25,marginLeft:20,color:"cornsilk"}}>Figmatic</Title>
            
            {/* <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: 'black', marginLeft: 20, fontSize: 20,marginTop:5 }} >
                    All<DownOutlined />
                </a>
            </Dropdown> */}
            <Space direction="horizontal">
                    <Search placeholder="search" style={{  marginLeft: 80, borderRadius: 10 }} />
                </Space>    
                <Breadcrumb style={{marginLeft:300,marginTop:10}}>
                    <Breadcrumb.Item>
                        <a href="">Home</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">About</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Services</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">contact us</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <BellOutlined style={{marginLeft:250,fontSize:20,marginTop:10}}/>
                <FontSizeOutlined  style={{marginTop:10,fontSize:20,marginLeft:10}}/>
                <Avatar size="medium" icon={<UserOutlined />} style={{marginLeft:40,marginTop:5,backgroundColor: '#87d068'}}/>
                {/* <AppContent/> */}
                <Leftpanel/>
            </div>
        </div>

    )
}

export default AppHeader
