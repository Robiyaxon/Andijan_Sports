import React, { useState } from 'react'

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
import dokon1 from '../../assets/dokon1.png'
import dokon2 from '../../assets/dokon4.png'
import dokon3 from '../../assets/img1dokon.png'
import dokon4 from '../../assets/product1.png'
import dokon5 from '../../assets/product2.png'
import dokon6 from '../../assets/product3.png'
import dokon7 from '../../assets/product5.png'
import dokon8 from '../../assets/dokon1.png'
import dokon9 from '../../assets/dokon4.png'
import dokon10 from '../../assets/img1dokon.png'
import dokon11 from '../../assets/product6.png'
import dokon12 from '../../assets/product8.png'

import Home from './../home/Home'
import Dokon from './../dokon/Dokon'
import Media from './../media/Media'
import Homiy from '../invester/Homiy'
import Footer from '../footer/Footer'
import { DokonSingle } from './DokonSingle'
import NewsHeader from './../news/NewsHeader'
import Akademiya from './../akademiya/Akademiya'

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
          <NavLink to="/media">Media</NavLink>
        </li>
        <li className={linksClass}>
          <NavLink to="/news">Yangiliklar</NavLink>
        </li>
        <li className={linksClass}>
          <NavLink to="/store">Do’kon</NavLink>
        </li>
        <li className={linksClass}>
          <NavLink to="/statistic">Statistika</NavLink>
        </li>
        <li className={linksClass}>
          <NavLink to="/club">Klub</NavLink>
        </li>
        <li className={linksClass}>
          <NavLink to="/academy">Akademiya</NavLink>
        </li>
      </ul>
    </nav>
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

const items = [
  getItem('Bosh sahifa', '1', <HomeOutlined />, '/'),
  getItem('Media', '2', <DesktopOutlined />, '/media'),
  getItem('Yangiliklar', '3', <UserOutlined />, '/news'),
  getItem('Do’kon', '4', <TeamOutlined />, '/store'),
  getItem('Statistika', '5', <FileOutlined />, '/statistic'),
  getItem('Klub', '6', <FileOutlined />, '/club'),
  getItem('Akademiya', '7', <FileOutlined />, '/academy'),
]

const map = [
  {
    id: 1,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'FC ANDIJON TRIKOT HOME 22/23',
    img: { dokon1 },
  },
  {
    id: 3,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon2,
  },
  {
    id: 4,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon3,
  },
  {
    id: 5,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon4,
  },
  {
    id: 6,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon5,
  },
  {
    id: 8,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon6,
  },
  {
    id: 9,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon7,
  },
  {
    id: 10,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon8,
  },
  {
    id: 11,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon9,
  },
  {
    id: 12,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon10,
  },
  {
    id: 13,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon11,
  },
  {
    id: 2,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    img: dokon12,
  },
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Dokon map={map} />} />
            <Route path="/store/:id" element={<DokonSingle map={map} />} />
            <Route path="/media" element={<Media />} />
            <Route path="/news" element={<NewsHeader />} />
            <Route path="/academy" element={<Akademiya />} />
          </Routes>
          <Homiy />
          <Footer />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Sidebar
