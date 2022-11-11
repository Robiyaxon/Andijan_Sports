import React, { useState } from 'react'

import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined     ,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu } from 'antd'

import NewsHeader from './../news/NewsHeader'
import img from '../../assets/images/sidebar_bg.png'
import logo from '../../assets/images/logo.png'

import styles from './Sidebar.module.css'

const Sidebar2 = () => {
  return (
    <nav>
      <div class={styles.logo}>
        <img src="logo.svg" alt="" />
      </div>
      <div class={styles.hamburger}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <ul class="nav-links">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Solutions</a>
        </li>
        <li>
          <a href="/#">Products</a>
        </li>
        <li>
          <a href="/#">Services</a>
        </li>
        <li>
          <a href="/#">Contact Us</a>
        </li>
        <li>
          <button class="login-button" href="#">
            Login
          </button>
        </li>
        <li>
          <button class="join-button" href="#">
            Join
          </button>
        </li>
      </ul>
    </nav>
  )
}

// export default Sidebar

const { Content, Footer, Sider } = Layout
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  }
}
const items = [
  getItem('Option 1', '1', <HomeOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />),
  getItem('Team', 'sub2', <TeamOutlined />),
  getItem('Files', '9', <FileOutlined />),
]
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'fixed',
          height: '100vh',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0, 7, 34, 0.79)'
        }}
      >
        <div className={styles.logo}>
          <img src={logo} alt='' />
          </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            width: 'calc(100% - 200px)',
            marginLeft: 'auto'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <NewsHeader />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default Sidebar
