type ListViewIcon = {
  isActive: boolean;
}

const ListViewIcon: React.FC<ListViewIcon> = ({ isActive }) => {
  return (
    <svg style={{ transform: isActive ? 'rotateX(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', pointerEvents: 'none' }} height="20px" version="1.1" viewBox="0 0 19 14" width="20px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title /><desc /><defs />
      <g fill={isActive ? '#ffffff' : '#bebebe'} fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
        <g id="Core" transform="translate(-87.000000, -509.000000)">
        <g id="view-list" transform="translate(87.500000, 509.000000)"><path d="M0,9 L4,9 L4,5 L0,5 L0,9 L0,9 Z M0,14 L4,14 L4,10 L0,10 L0,14 L0,14 Z M0,4 L4,4 L4,0 L0,0 L0,4 L0,4 Z M5,9 L17,9 L17,5 L5,5 L5,9 L5,9 Z M5,14 L17,14 L17,10 L5,10 L5,14 L5,14 Z M5,0 L5,4 L17,4 L17,0 L5,0 L5,0 Z" id="Shape" /></g></g>
      </g>
    </svg>
  )
}

export default ListViewIcon