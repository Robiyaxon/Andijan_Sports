import React, { useRef, useState } from 'react'

import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { NavLink, Route, Routes } from 'react-router-dom'

import img from '../../assets/images/sidebar_bg.png'
import logo from '../../assets/images/logo.png'

import Dokon from './../dokon/Dokon'
import Media from './../media/Media'
import NewsHeader from './../news/NewsHeader'
import Akademiya from './../akademiya/Akademiya'

import styles from './Sidebar.module.css'

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav_links')
const links = document.querySelectorAll('.nav_links li')

export const Sidebar2 = () => {
  const hamburgerRef = useRef()
  const navLinksRef = useRef()
  const linksRef = useRef()

  const hamburgerClick = () => {
    //Animate Links
    navLinksRef.current.classList.toggle('open')
    // linksRef.current.forEach((link) => {
      linksRef.current.classList.toggle('fade')
    // })

    //Hamburger Animation
    hamburgerRef.current.classList.toggle('toggle')
  }
  return (
    <nav id={styles.nav}>
      <div className={styles.logo}>
        <img src="logo.svg" alt="" />
      </div>
      <div
        ref={hamburgerRef}
        className={styles.hamburger}
        onClick={hamburgerClick}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
      <ul ref={navLinksRef} className={styles.nav_links}>
        <li ref={linksRef}>
          <a href="/#">Home</a>
        </li>
        <li ref={linksRef}>
          <a href="/#">Solutions</a>
        </li>
        <li ref={linksRef}>
          <a href="/#">Products</a>
        </li>
        <li ref={linksRef}>
          <a href="/#">Services</a>
        </li>
        <li ref={linksRef}>
          <a href="/#">Contact Us</a>
        </li>
        <li ref={linksRef}>
          <button className={styles.login_button} href="#">
            Login
          </button>
        </li>
        <li>
          <button className={styles.join_button} href="#">
            Join
          </button>
        </li>
      </ul>
    </nav>
  )
}

const { Content, Sider } = Layout
function getItem(label, key, icon, url, children) {
  return {
    key,
    icon,
    url,
    label,
  }
}
const items = [
  getItem('Bosh sahifa', '1', <HomeOutlined />, '/'),
  getItem('Media', '2', <DesktopOutlined />, '/media'),
  getItem('Yangiliklar', '3', <UserOutlined />, '/news'),
  getItem('Do’kon', '4', <TeamOutlined />, '/store'),
  getItem('Statistika', '5', <FileOutlined />, '/statistic'),
  getItem('Klub', '6', <FileOutlined />, '/club'),
  getItem('Akademiya', '7', <FileOutlined />, '/academy'),
]

const dataMap = items.map((d) => (
  <Menu.Item key={d.key}>
    <NavLink to={d.url}>
      <span>{d.label}</span>
      {d.icon}
    </NavLink>
  </Menu.Item>
))
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
          backgroundColor: 'rgba(0, 7, 34, 0.79)',
          zIndex: 10,
        }}
      >
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {dataMap}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            width: 'calc(100% - 200px)',
            marginLeft: 'auto',
          }}
        >
          <Routes>
            <Route path="/store" element={<Dokon />} />
            <Route path="/media" element={<Media />} />
            <Route path="/news" element={<NewsHeader />} />
            <Route path="/academy" element={<Akademiya />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Sidebar
