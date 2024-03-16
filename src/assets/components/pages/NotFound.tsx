import { Link } from "react-router-dom"
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <p>Такой страницы не существует! </p><Link to="/">Вернуться домой</Link>
    </div>
  )
}

export default NotFound