import andijan_club from '../../assets/images/home_andijan_club.webp'
import bunyodkor_club from '../../assets/images/home_bunyodkor_club.png'
import liga from '../../assets/images/home_liga.png'
import bg1 from '../../assets/images/home_bg.png'
import bg2 from '../../assets/akademiya.png'
import bg3 from '../../assets/akademiya1.png'
import club_logo from '../../assets/images/logo.png'
import club2_logo from '../../assets/images/aral_samali.png'

import styles from './Home.module.css'

const data = [
  {
    id: 0,
    club1_img: andijan_club,
    club2_img: bunyodkor_club,
    liga_img: liga,
    time: '10:45 PM',
    date: 'Сегодня',
    club1_name: 'Andijon',
    club2_name: 'Bunyodkor',
  },
  {
    id: 1,
    club1_img: andijan_club,
    club2_img: bunyodkor_club,
    liga_img: liga,
    time: '10:45 PM',
    date: 'Сегодня',
    club1_name: 'Andijon',
    club2_name: 'Bunyodkor',
  },
  {
    id: 2,
    club1_img: andijan_club,
    club2_img: bunyodkor_club,
    liga_img: liga,
    time: '10:45 PM',
    date: 'Сегодня',
    club1_name: 'Andijon',
    club2_name: 'Bunyodkor',
  },
]

const dataContain = [
  {
    id: 0,
    bg: bg1,
    t1: 'Yulduzlar biz haqimizda',
    t2: 'Viktor Ko’mikov',
    // t2: 'Vagiz Galiluin',
    t3: '“ANDIJON”ning qaytishini kutyapman',
  },
  {
    id: 1,
    bg: bg2,
    t1: 'Taqdirlash',
    t2: 'Viktor Ko’mikov',
    t3: 'Eng yahshi futbolchi statuetkasi topshirildi',
  },
  {
    id: 2,
    bg: bg3,
    t1: 'Yulduzlar biz haqimizda',
    t2: 'Galiluin Vagiz',
    t3: '“ANDIJON”ning qaytishini kutyapman',
  },
]

const dataMap = data.map((d) => (
  <div className={styles.main_container__RText_block} key={d.id}>
    <div className={styles.main_container__RText__first_line}>
      <div className={styles.main_container__RText__first_line__img}>
        <img src={d.club1_img} alt="" />
        <img src={d.club2_img} alt="" />
      </div>
      <img src={d.liga_img} alt="" />
    </div>
    <div className={styles.main_container__RText_text}>
      <strong>{d.time}</strong>
      <p>{d.date}</p>
    </div>
    <p className={styles.main_container__RText__endp}>{d.club1_name}</p>
    <p>{d.club2_name}</p>
  </div>
))

export const dataContainMap = dataContain.map((d) => (
  <div key={d.id}>
    <h3
      className={styles.main_container}
      style={{
        backgroundImage: `url(${d.bg})`,
      }}
    >
      <div className={styles.main_container__lText}>
        <h3>{d.t1}</h3>
        <h1>{d.t2}</h1>
        <h2>{d.t3}</h2>
      </div>
      <div className={styles.main_container__RText}>{dataMap}</div>
    </h3>
  </div>
))

const statistic_data = [
  {
    id: 0,
    part: 'Chorak 1',
    club1_img: andijan_club,
    clubsName: 'Andijan VS Bunyodkor',
    club2_img: bunyodkor_club,
  },
  {
    id: 1,
    part: 'Chorak 2',
    club1_img: andijan_club,
    clubsName: 'Andijan VS Bunyodkor',
    club2_img: bunyodkor_club,
  },
  {
    id: 2,
    part: 'Chorak 3',
    club1_img: andijan_club,
    clubsName: 'Andijan VS Bunyodkor',
    club2_img: bunyodkor_club,
  },
  {
    id: 3,
    part: 'Chorak 4',
    club1_img: andijan_club,
    clubsName: 'Andijan VS Bunyodkor',
    club2_img: bunyodkor_club,
  },
  {
    id: 4,
    part: 'Chorak 4',
    club1_img: andijan_club,
    clubsName: 'Andijan VS Bunyodkor',
    club2_img: bunyodkor_club,
  },
  {
    id: 5,
    part: 'Chorak 4',
    club1_img: andijan_club,
    clubsName: 'Andijan VS Bunyodkor',
    club2_img: bunyodkor_club,
  },
]

export const statistic_dataMap = statistic_data.map((d) => (
  <div className={styles.statistic__main_block_box} key={d.id}>
    <h3>{d.part}</h3>
    <div className={styles.statistic__main_block_box_div}>
      <img src={d.club1_img} alt="" />
      <h2>{d.clubsName}</h2>
      <img src={d.club2_img} alt="" />
    </div>
  </div>
))


export const statistic_main_data=[
  {
    id: 1,
    matchDate: '19 iyul',
    matchTime: '22:30',
    ligaImg: liga,
    club1_logo: club_logo,
    club1_name: 'Andijon',
    club1_num: '6',
    club2_num: '1',
    club2_name: 'Aral Samali',
    club2_logo,
  },
  {
    id: 2,
    matchDate: '19 iyul',
    matchTime: '22:30',
    ligaImg: liga,
    club1_logo: club_logo,
    club1_name: 'Andijon',
    club1_num: '6',
    club2_num: '1',
    club2_name: 'Aral Samali',
    club2_logo,
  },
  {
    id: 3,
    matchDate: '19 iyul',
    matchTime: '22:30',
    ligaImg: liga,
    club1_logo: club_logo,
    club1_name: 'Andijon',
    club1_num: '6',
    club2_num: '1',
    club2_name: 'Aral Samali',
    club2_logo,
  },
]