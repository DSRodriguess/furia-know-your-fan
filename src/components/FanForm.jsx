import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import socialBg from '../assets/social-bg.jpg';

const FanForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');
  const [cpfValid, setCpfValid] = useState(true);

  const gameOptions = [
    { label: 'League of Legends', value: 'lol' },
    { label: 'Counter-Strike: Global Offensive', value: 'csgo' },
    { label: 'Valorant', value: 'valorant' },
    { label: 'Dota 2', value: 'dota2' },
    { label: 'Fortnite', value: 'fortnite' },
  ];

  const formatCpf = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    return digits
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const unmaskCpf = (value) => value.replace(/\D/g, '');

  const validateCPF = (cpf) => {
    cpf = unmaskCpf(cpf);
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
    let d1 = (sum * 10) % 11;
    if (d1 === 10 || d1 === 11) d1 = 0;
    if (d1 !== parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
    let d2 = (sum * 10) % 11;
    if (d2 === 10 || d2 === 11) d2 = 0;
    return d2 === parseInt(cpf[10]);
  };

  const handleCpfChange = (e) => {
    const value = e.target.value;
    setCpf(formatCpf(value));
    setCpfValid(validateCPF(value));
  };

  const handleSubmit = () => {
    if (!validateCPF(cpf)) {
      setCpfValid(false);
      return;
    }

    const data = {
      name,
      cpf: unmaskCpf(cpf),
      address,
      favoriteGame,
    };
    onSubmit(data);
  };

  return (
    <Card
      title="Informações Pessoais"
      className="p-shadow-4 social-card"
      style={{ backgroundImage: `url(${socialBg})` }}
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

      <div className="p-field p-d-flex p-flex-column">
        <label htmlFor="cpf" className="p-mb-1">CPF</label>
        <InputText
          id="cpf"
          value={cpf}
          onChange={handleCpfChange}
          placeholder="000.000.000-00"
          maxLength={14}
          className={`p-inputtext ${!cpfValid ? 'p-invalid' : ''}`}
        />
        {!cpfValid && <Message severity="error" text="CPF inválido" className="p-mt-1" />}
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

      <Button
        label="Enviar"
        icon="pi pi-check"
        onClick={handleSubmit}
        disabled={!cpfValid}
      />
    </Card>
  );
};

export default FanForm;
