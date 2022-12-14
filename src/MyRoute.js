import React from 'react'
import { Route, Routes } from 'react-router-dom'
import dokon1 from './assets/dokon1.webp'
import dokon2 from './assets/dokon4.webp'
import dokon3 from './assets/img1dokon.webp'
import dokon4 from './assets/product1.webp'
import dokon5 from './assets/product2.webp'
import dokon6 from './assets/product3.webp'
import dokon7 from './assets/product5.webp'
import dokon8 from './assets/dokon1.webp'
import dokon9 from './assets/dokon4.webp'
import dokon10 from './assets/img1dokon.webp'
import dokon11 from './assets/product6.webp'
import dokon12 from './assets/product8.webp'
import Home from './components/home/Home'
import Dokon from './components/dokon/Dokon'
import { DokonSingle } from './components/sidebar/DokonSingle'
import Media from './components/media/Media'
import NewsHeader from './components/news/NewsHeader'
import Akademiya from './components/akademiya/Akademiya'
import Homiy from './components/invester/Homiy'
import Footer from './components/footer/Footer'
import MyStatistic from './components/statistic/Statistic'
import ScrollToTop from './ScrollerOn'
import OpenIconSpeedDial from './speedDeal.jsx/SpeedDeal'
const map = [
  {
    id: 1,
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'FC ANDIJON TRIKOT HOME 22/23',
    img:  dokon1 ,
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

const MyRoute = () => {

  return (
    <>
      <OpenIconSpeedDial />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="store" element={<Dokon map={map}  />} />
        <Route path="store/:currentId" element={<DokonSingle map={map}  />} />
        <Route path="media" element={<Media />} />
        <Route path="news" element={<NewsHeader />} />
        <Route path="academy" element={<Akademiya />} />
        <Route path="statistic" element={<MyStatistic />} />
      </Routes>
      <Homiy />
      <Footer />
    </>
  )
}

export default MyRoute
