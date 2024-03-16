import { Link } from "react-router-dom"
import styles from "./styles/CHeader.module.css"

const CHeader = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>Главная страница</Link>
      <Link to='CVMaker'>Создать Резюме</Link>
      <Link to='CVList'>Список Резюме</Link>
    </header>
  )
}

export default CHeader