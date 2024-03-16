import { useEffect, useState } from 'react';
import styles from '../styles/Maker.module.css'

const defaultData = {
  name: '',
  profession: '',
  imageUrl: '',
  address: '',
  phoneNumber: '',
  email: '',
  description: '',
  skills: '',
  university: '',
  city: '',
  degree: '',
  subject: '',
  from: '',
  to: ''
}

const CVmaker = ({setResume}: any) => {
  const [data, setData] = useState(defaultData)
  let isUploading = false;

  useEffect(() => {
    const PostData = async () => {
      if (data !== defaultData) {
        await fetch("http://localhost:4200/resume", { method: "POST", body: JSON.stringify(data) })
      }
    }
    PostData()
  }, [isUploading])

  const createResume = (e: any) => {
    e.preventDefault()
    console.log(data);
    setResume((prev: any) => [ ...prev, { ...data }])
  }

  return (
    <>
      <div className={styles.firstlayout}>
      <div className={styles.data}>
        <h2>Персональная информация</h2>
        <form className={styles.maker}>
          <input 
            className={styles.inputmaker}
            onChange={(e) => setData((prev) => ({...prev, name: e.target.value}))}
            value={data.name}
            type="text"
            placeholder="Имя Фамилия"
            required
          />
          <input 
            className={styles.inputmaker}
            onChange={(e) => setData((prev) => ({...prev, profession: e.target.value}))}
            value={data.profession}
            type="text"
            placeholder="Профессия"
            required
          />
          <input 
            className={styles.inputmaker}
            onChange={(e) => setData((prev) => ({...prev, imageUrl: e.target.value}))}
            value={data.imageUrl}
            type="text"
            placeholder="Ваше фото (url)"
          />
          <input 
            className={styles.inputmaker}
            onChange={(e) => setData((prev) => ({...prev, address: e.target.value}))}
            value={data.address}
            type="text"
            placeholder="Адрес"
          />
          <input 
            className={styles.inputmaker}
            onChange={(e) => setData((prev) => ({...prev, phoneNumber: e.target.value}))}
            value={data.phoneNumber}
            type="text"
            placeholder="Телефонный номер"
          />
          <input 
            className={styles.inputmaker}
            onChange={(e) => setData((prev) => ({...prev, email: e.target.value}))}
            value={data.email}
            type="email"
            placeholder="Email"
          />
          <input 
            className={styles.inputmaker}
            onChange={(e) => setData((prev) => ({...prev, description: e.target.value}))}
            value={data.description}
            type="text"
            placeholder="Описание"
          />
        </form>
      </div>
      <div className={styles.data}>
        <h2>Навыки</h2>
        <input 
          className={styles.inputmaker}
          type="text" 
          placeholder="Скиллы + их уровень"
          value={data.skills}
          onChange={(e) => setData((prev) => ({...prev, skills: e.target.value}))}
        />
      </div>
      <div className={styles.data}>
        <h2>Образование</h2>
          <form className={styles.maker}>
            <input 
              className={styles.inputmaker}
              type="text"
              placeholder="Название учебного заведения"
              value={data.university}
              onChange={(e) => setData((prev) => ({...prev, university: e.target.value}))}
            />
            <input 
              className={styles.inputmaker} 
              type="text"
              placeholder="Город и страна"
              value={data.city}
              onChange={(e) => setData((prev) => ({...prev, city: e.target.value}))}
            />
            <input 
              className={styles.inputmaker} 
              type="text"
              placeholder="Ученая степень"
              value={data.degree}
              onChange={(e) => setData((prev) => ({...prev, degree: e.target.value}))}
            />
            <input 
              className={styles.inputmaker} 
              type="text"
              placeholder="Направление"
              value={data.subject}
              onChange={(e) => setData((prev) => ({...prev, subject: e.target.value}))}
            />
            <input 
              className={styles.inputmaker}
              type="text"
              placeholder="С какого (года)"
              value={data.from}
              onChange={(e) => setData((prev) => ({...prev, from: e.target.value}))}
            />
            <input 
              className={styles.inputmaker} 
              type="text"
              placeholder="До какого (года)"
              value={data.to}
              onChange={(e) => setData((prev) => ({...prev, to: e.target.value}))}
            />
          </form>
      </div>
      <button className={styles.button} onClick={(e) => {createResume(e); isUploading = true} }>Опубликовать резюме</button>
    </div>
    <div className={styles.secondlayout}>
      <div className={styles.cvhead}>
        {
          data.imageUrl === "" ? 
          <img className={styles.cvimage} src='https://grizly.club/uploads/posts/2023-08/1692743286_grizly-club-p-kartinki-kruzhok-dlya-avatarki-bez-fona-61.png' alt='avatar'></img> :
          <img className={styles.cvimage} src={data.imageUrl} alt='avatar'></img>
        }
        {
          data.name === "" ? 
          <h2>Имя Фамилия</h2> :
          <h2>{data.name}</h2>
        }
        {
          data.profession === "" ?
          <h2>Профессия</h2> :
          <h2>{data.profession}</h2>
        }
      </div>
      <div className={styles.line}></div>
      <div className={styles.cvinfo}>
        <div className={styles.cvdatadesc}>
          <h2>Описание: </h2>
          {data.description}
        </div>
        <div className={styles.cvdata}>
          <h2>Профессиональные навыки: </h2>
          {data.skills === "" ? <p>Умею чистить картошку</p> : data.skills}
        </div>
        <div className={styles.cvdata}>
          <h2>Образование: </h2>
          {data.university && data.city ? <p>{data.university}. {data.city}</p> : <p>Учебное заведение. Город, Страна</p>}
          <br />
          {data.degree && data.subject ? <p>{data.degree}: {data.subject}</p> : <p>Ученая степень: Направление</p>}
          <br />
          {data.from && data.to ? <p>С {data.from} до {data.to} гг.</p> : <p>С такого-то по такой-то год</p>}
        </div>
      </div>
      <div className={styles.cvpersonalinfo}>
        <h2>Персональные данные</h2>
        <p>Адрес: {data.address}</p>
        <p>Телефонный номер: {data.phoneNumber}</p>
        <p>Email: {data.email}</p>
      </div>
    </div>
    </>
  )
}

export default CVmaker