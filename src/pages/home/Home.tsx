// import styles from './Home.module.scss';
import LayoutTemplate from "../../components/layout_template/LayoutTemplate";
import ListTypeSwitcher from '../../components/list_type_switcher/ListTypeSwitcher';
import FilterBar from '../../components/filter_bar/FilterBar';
import MoviesContainer from "../../components/movies_container/MoviesContainer";

const Home = () => {

  return (
    <LayoutTemplate section="Home Page with User's movie list">
        <ListTypeSwitcher />
        <FilterBar />
        <MoviesContainer />
    </LayoutTemplate>
  );
};

export default Home;
