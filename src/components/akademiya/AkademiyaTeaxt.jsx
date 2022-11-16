import React from 'react'
import style from './AkademiyaTeaxt.module.css'
import img1 from '../../assets/akademiya1.webp'
import img2 from '../../assets/akademiya2.webp'
import Academy from '../home/Academy'
export const AkademiyaTeaxt = () => {
  return (
    <div className={style.AkademiyaTeaxt}>
      <p>
        Команди Академії ФК «» вікових категорій від U14 до U21 базуються в
        Щасливому Київської області. Загалом у професійній Академії навчаються
        140 футболістів та працює 21 тренер. У розпорядженні «гірників» 6 полів
        (4 натуральні газони і 2 синтетичних), матчі проходять на двох аренах
        комплексу. Команди U19 та U21 у чемпіонатах України під егідою
        Прем’єр-ліги приймають суперників на стадіоні «Княжа Арена». На
        території навчально-тренувальної бази розташовані готель, зал для
        теоретичних занять та тренажерний, функціонує загальноосвітня школа.
        Дитяча Академія для хлопців віком до 13 років працює в Донецьку.
        Вихованці займаються на синтетичних полях і в манежі Центрального
        стадіону «».
      </p>
      <h2>Sertifikat</h2>
      <h3>
        Академію ФК «Andijon» засновано 2000 року. Від моменту початку роботи
        кількість випускників перевищила 500. Протягом останніх п’яти років
        гравцями основного складу стали Ярослав Ракицький, Іван Ордець, Віктор
        Коваленко, Максим Малишев і Богдан Бутко. Також у першій команді
        дебютували Микита Шевченко, Олександр Зубков, Андрій Борячук, Сергій
        Болбат, В’ячеслав Танковський, Микола Матвієнко, Едуард Соболь, Сергій
        Гринь, Андрій Тотовицький, Ігор Кирюханцев, Олександр Пихальонок та
        інші. Найвищим командним досягненням є вихід «гірників» U19 у фінал
        Юнацької ліги УЄФА в сезоні-2014/15.
      </h3>
      <img src={img1} alt="" />
      <br />
      <br />
      <h4>Akademiya murabbiylari</h4>
      <h6>
        «Andijon» U19: Оскар Ратулутра, Олександр Князєв, Олександр Алімов{' '}
        <br />
        «Andijon» U17: Олександр Ситник, Сергій Даценко <br />
        «Andijon» U16: Володимир Самборський, Олександр Овчинников <br />
        «Andijon» U15: Олександр Максимов <br />
        «Andijon» U14: Дмитро Єфимов, Олександр Дорофеєв
      </h6>
      <img src={img2} alt="" />
      <h4>Andijon chempionlari</h4>
      <h6>
        «Andijon» U19: Оскар Ратулутра, Олександр Князєв, Олександр Алімов{' '}
        <br />
        «Andijon» U17: Олександр Ситник, Сергій Даценко <br />
        «Andijon» U16: Володимир Самборський, Олександр Овчинников <br />
        «Andijon» U15: Олександр Максимов <br />
        «Andijon» U14: Дмитро Єфимов, Олександр Дорофеєв
      </h6>
      <div className={style.Academy}>
        <Academy />
      </div>

      <h4>Koʻrishlar</h4>
      <h6>
        Mart va avgust oyining boshida Shchaslivedagi (Kiyev viloyati)
        o'quv-mashg'ulot bazasida yosh futbolchilarni kuzatish va akademiyaga
        o'qishga kirish uchun nomzodlarni aniqlash uchun ochiq eshiklar kuni
        o'tkaziladi. Sana va vaqtlar haqidagi maʼlumotlar “Shaxtyor”ning
        ijtimoiy tarmoqlardagi rasmiy sahifalarida oldindan eʼlon qilinadi.
        Akademiya ishi uchun: 0 800 300 314 (Ukrainada qo'ng'iroqlar bepul), +38
        044 390 90 09 (dunyo bo'ylab aloqa uchun)
      </h6>
    </div>
  )
}
