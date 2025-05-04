import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import socialBg from '../assets/social-bg.jpg';

// Função para validar o CPF
const isValidCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false;
  let sum = 0;
  let rest;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.charAt(9))) return false;

  sum = 0;


  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(cpf.charAt(10))) return false;

  return true;
};

const FanForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');
  const [cpfError, setCpfError] = useState(false);

  // Opções de jogos
  const gameOptions = [
    { label: 'League of Legends', value: 'lol' },
    { label: 'Counter-Strike: Global Offensive', value: 'csgo' },
    { label: 'Valorant', value: 'valorant' },
    { label: 'Dota 2', value: 'dota2' },
    { label: 'Fortnite', value: 'fortnite' },
  ];

  const handleSubmit = () => {
    if (!isValidCPF(cpf)) {
      setCpfError(true);
      return;
    }

    setCpfError(false);
    const data = { name, cpf, address, favoriteGame };
    onSubmit(data);
  };

  return (
    <Card
      title="Informações Pessoais"
      className="p-shadow-4 social-card"
      style={{
        backgroundImage: `url(${socialBg})`,
      }}
    >
      <div className="p-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="name" className="p-mr-2">Nome</label>
        <InputText
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome"
          className="p-fluid"
        />
      </div>

      <div className="p-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="cpf" className="p-mr-2">CPF</label>
        <InputText
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Seu CPF"
          className="p-fluid"
        />
        {cpf && cpfError && (
          <span className="p-error">CPF inválido!</span>
        )}
      </div>

      <div className="p-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="address" className="p-mr-2">Endereço</label>
        <InputText
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Seu endereço"
          className="p-fluid"
        />
      </div>

      <div className="p-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="favoriteGame" className="p-mr-2">Jogo Favorito</label>
        <Dropdown
          id="favoriteGame"
          value={favoriteGame}
          options={gameOptions}
          onChange={(e) => setFavoriteGame(e.value)}
          placeholder="Selecione seu jogo favorito"
          className="p-fluid"
        />
      </div>

      <Button label="Enviar" icon="pi pi-check" onClick={handleSubmit} />
    </Card>
  );
};

export default FanForm;
