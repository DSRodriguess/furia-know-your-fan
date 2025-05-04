import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import socialBg from '../assets/social-bg.jpg';

const ProfileSummary = ({ fanData, socialData, documentValidated, onReset }) => (
  <div>
    <Card
      title="Resumo do Perfil"
      className="p-shadow-4 social-card"
      style={{
        backgroundImage: `url(${socialBg})`,
      }}
    >
      <div className="profile-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="name" className="p-mr-2">Nome</label>
        <InputText id="name" value={fanData.name} readOnly className="p-fluid" />
      </div>

      <div className="profile-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="cpf" className="p-mr-2">CPF</label>
        <InputText id="cpf" value={fanData.cpf} readOnly className="p-fluid" />
      </div>

      <div className="profile-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="address" className="p-mr-2">Endereço</label>
        <InputText id="address" value={fanData.address} readOnly className="p-fluid" />
      </div>

      <div className="profile-field p-d-flex p-jc-between p-ai-center">
        <label htmlFor="favoriteGame" className="p-mr-2">Jogo Favorito</label>
        <Dropdown
          id="favoriteGame"
          value={fanData.favoriteGame}
          options={[
            { label: 'League of Legends', value: 'lol' },
            { label: 'Counter-Strike: Global Offensive', value: 'csgo' },
            { label: 'Valorant', value: 'valorant' },
            { label: 'Dota 2', value: 'dota2' },
            { label: 'Fortnite', value: 'fortnite' },
          ]}
          readOnly
          className="p-fluid"
        />
      </div>

      {documentValidated ? (
        <Message severity="success" text="Documento validado!" />
      ) : (
        <Message severity="error" text="Documento não validado." />
      )}

      {socialData && (
        <div>
          <p><strong>Organizações seguidas:</strong> {socialData.followedOrgs.join(', ')}</p>
          <ul>
            {socialData.recentActivity.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </div>
      )}

      <Button label="Reiniciar" icon="pi pi-refresh" onClick={onReset} />
    </Card>
  </div>
);

export default ProfileSummary;
