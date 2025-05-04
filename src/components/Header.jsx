import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/furia-logo.png';

const Header = () => {
  const navigate = useNavigate();

  const items = [
    { label: 'Início', icon: 'pi pi-home', command: () => navigate('/') },
    { label: 'Sobre', icon: 'pi pi-info-circle', command: () => navigate('/sobre') },
    { label: 'Contato', icon: 'pi pi-envelope', command: () => navigate('/contato') },
  ];

  const start = (
    <img
      alt="Logo FURIA"
      src={logo}
      height="40"
      className="p-mr-2"
      style={{ marginRight: '1rem', cursor: 'pointer' }}
      onClick={() => navigate('/')}
    />
  );

  return (
    <div className="p-shadow-2">
      <Menubar model={items} start={start} />
    </div>
  );
};

export default Header;
