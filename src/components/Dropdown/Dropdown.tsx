import styles from './Dropdown.module.scss'

const filters: string[] = ["Movies", "Series", "Watch List"]

const Dropdown = () => {
  return (
    <ul className={styles.dropdown}>
      {filters.map(item => (
        <li key={item}>{item}</li> 
      ))}
    </ul>
  )
}


export default Dropdown

//! TODO: Add icons before items
//! TODO: Add transition