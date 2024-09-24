import LayoutTemplate from "../../components/layout_template/LayoutTemplate"
import SearchForm from "../../components/search_form/SearchForm"
import s from './AddMovie.module.scss'

const AddMovie = () => {
  return (
    <LayoutTemplate section="Adding movie page">
      <div className={s.container}>
        <SearchForm />  
      </div>
    </LayoutTemplate>
  )
}

export default AddMovie