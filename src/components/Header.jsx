import { Menubar } from 'primereact/menubar';
import logo from '../assets/furia-logo.png';

const Header = () => {
  const items = [
    { label: 'Início', icon: 'pi pi-home' },
    { label: 'Sobre', icon: 'pi pi-info-circle' },
    { label: 'Contato', icon: 'pi pi-envelope' },
  ];

  const start = (
    <img
      alt="Logo FURIA"
      src={logo}
      height="40"
      className="p-mr-2"
      style={{ marginRight: '1rem' }}
    />
  );

  return (
    <div className="p-shadow-2">
      <Menubar model={items} start={start} />
    </div>
  );
};

export default Header;
