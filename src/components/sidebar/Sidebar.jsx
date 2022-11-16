import React, { useState } from 'react'

import {
  DesktopOutlined,
  HomeOutlined,
  TeamOutlined,
  BookOutlined,
  LineChartOutlined,
  ShoppingOutlined
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
            <NavLink to="/" onClick={hamburgerClick}>
              Home
            </NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="media" onClick={hamburgerClick}>
              Media
            </NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="news" onClick={hamburgerClick}>
              Yangiliklar
            </NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="store" onClick={hamburgerClick}>
              Do’kon
            </NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="statistic" onClick={hamburgerClick}>
              Statistika
            </NavLink>
          </li>
          <li className={linksClass}>
            <NavLink to="academy" onClick={hamburgerClick}>
              Akademiya
            </NavLink>
          </li>
        </ul>
      </nav>
      <MyRoute />
    </>
  )
}

const { Content, Sider } = Layout

const items = [
  { label: 'Bosh sahifa', key: '1', icon: <HomeOutlined />, url: '/' },
  { label: 'Media', key: '2', icon: <DesktopOutlined />, url: 'media' },
  { label: 'Yangiliklar', key: '3', icon: <BookOutlined />, url: 'news' },
  { label: 'Do’kon', key: '4', icon: <ShoppingOutlined />, url: 'store' },
  {
    label: 'Statistika',
    key: '5',
    icon: <LineChartOutlined />,
    url: 'statistic',
  },
  { label: 'Akademiya', key: '6', icon: <TeamOutlined />, url: 'academy' },
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
