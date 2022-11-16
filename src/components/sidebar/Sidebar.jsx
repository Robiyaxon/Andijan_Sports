import React, { useState } from 'react'

import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

import img from '../../assets/images/sidebar_bg.png'
import logo from '../../assets/images/logo.png'

import MyRoute from '../../MyRoute'

import styles from './Sidebar.module.css'

export const Sidebar2 = () => {
  const [navLinksClass, setNavLinksClass] = useState('')
  const [linksClass, setLinksClass] = useState('')
  const [hamburgerClass, setHamburgerClass] = useState('')

  const hamburgerClick = () => {
    if (!navLinksClass && !linksClass && !hamburgerClass) {
      setNavLinksClass(styles.open)
      setLinksClass(styles.fade)
      setHamburgerClass(styles.toggle)
    } else {
      setNavLinksClass('')
      setLinksClass('')
      setHamburgerClass('')
    }
  }
  
  return (
    <>
      <nav id={styles.nav}>
        <div className={styles.logo2}>
          <img src={logo} alt="" />
        </div>
        <div
          className={styles.hamburger + ' ' + hamburgerClass}
          onClick={hamburgerClick}
        >
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
        <ul className={styles.nav_links + ' ' + navLinksClass}>
          <li className={linksClass}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="media">Media</NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="news">Yangiliklar</NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="store">Do’kon</NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="statistic">Statistika</NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="academy">Akademiya</NavLink>
          </li>
        </ul>
      </nav>
      <MyRoute />
    </>
  )
}

const { Content, Sider } = Layout
function getItem(label, key, icon, url) {
  return {
    key,
    icon,
    url,
    label,
  }
}

const items2 = [
  getItem('Bosh sahifa', '1', <HomeOutlined />, '/'),
  getItem('Media', '2', <DesktopOutlined />, 'media'),
  getItem('Yangiliklar', '3', <UserOutlined />, 'news'),
  getItem('Do’kon', '4', <TeamOutlined />, 'store'),
  getItem('Statistika', '5', <FileOutlined />, 'statistic'),
  getItem('Akademiya', '6', <FileOutlined />, 'academy'),
]

const dataMap = items2.map((d) => (
  <Menu.Item key={d.key}>
    <NavLink to={d.url}>
      <span>{d.label}</span>
      {d.icon}
    </NavLink>
  </Menu.Item>
))
const Sidebar = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
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
            position: 'relative',
          }}
        >
          <MyRoute />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Sidebar
