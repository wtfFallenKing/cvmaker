import styles from '../styles/CVList.module.css'

const CVList = ({resume}: any) => {
  return (
    <div className={styles.cvlist}>
      {
        resume.map((person: any) => {
          return (
          <div className={styles.person}>
            <img src={person.imageUrl} alt='avatar' className={styles.image} />
            <h2>Имя: {person.name}</h2>
            <p>Профессия: {person.profession} <br />
            Описание: {person.description} <br />
            Место жительства: {person.address} <br />
            Номер телефона: {person.phoneNumber}, Почта: {person.email} <br />
            Профессиональные навыки: {person.skills} <br />
            Образование: {person.university} в {person.city}. {person.degree}: {person.subject} с {person.from} до {person.to} гг.
            </p>
          </div>
          )
        }
        )
      }
    </div>
  )
}

export default CVList