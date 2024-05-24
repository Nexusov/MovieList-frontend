import s from './Divider.module.scss'

type DividerProps = {
  margin: number
}

const Divider: React.FC<DividerProps> = ({ margin }) => {
  return (
    <span style={{margin: `${margin}px 0`}} className={s.divider}></span>
  )
}

export default Divider