import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

export default function FanForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    address: "",
    favoriteGame: "",
    interests: [],
  });

  const games = [
    { label: "CS2", value: "cs2" },
    { label: "Valorant", value: "valorant" },
    { label: "League of Legends", value: "lol" },
  ];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-fluid p-4">
      <div className="field">
        <label htmlFor="name">Nome</label>
        <InputText id="name" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="cpf">CPF</label>
        <InputText id="cpf" value={formData.cpf} onChange={(e) => handleChange("cpf", e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="address">Endereço</label>
        <InputText id="address" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="favoriteGame">Jogo Favorito</label>
        <Dropdown
          id="favoriteGame"
          options={games}
          value={formData.favoriteGame}
          onChange={(e) => handleChange("favoriteGame", e.value)}
          placeholder="Selecione um jogo"
        />
      </div>

      <Button label="Avançar" type="submit" className="mt-3" />
    </form>
  );
}
