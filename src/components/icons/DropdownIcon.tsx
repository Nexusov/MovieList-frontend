type Dropdown = {
  isOpen: boolean
}

const DropdownIcon: React.FC<Dropdown> = ({ isOpen }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
    <rect x="0" fill="none" width="24" height="24" />
    <g>
      <path d="M7 10l5 5 5-5" fill="currentColor" />
    </g>
  </svg>
);

export default DropdownIcon;
