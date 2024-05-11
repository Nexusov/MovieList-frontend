import { useState } from 'react';
import Button from '../button/Button'
import GridViewIcon from '../icons/GridViewIcon'
import styles from './ViewTypeControlGroup.module.scss'
import ListViewIcon from '../icons/ListViewIcon';

type ViewType = 'gridView' | 'listView'

const ViewTypeControlGroup = () => {
  const [activeView, setActiveView] = useState<ViewType>('gridView');

  return (
    <div className={styles.viewTypeControlGroup}>
      <div className={styles.viewTypeButtons}>
        <Button
          type='controlIcon'
          title='Grid View'
          isActive={activeView === 'gridView'}
          onClick={() => setActiveView('gridView')}
        >
          <GridViewIcon isActive={activeView === 'gridView'} />
        </Button>
        <Button
          type='controlIcon'
          title='List View'
          isActive={activeView === 'listView'}
          onClick={() => setActiveView('listView')}
        >
          <ListViewIcon isActive={activeView === 'listView'} />
        </Button>
      </div>
    </div>
  )
}

export default ViewTypeControlGroup