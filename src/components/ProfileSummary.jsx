import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

const ProfileSummary = ({ fanData, socialData, documentValidated, onReset }) => (
  <div>
    <Card title="Resumo do Perfil" className="p-shadow-4">
      <p><strong>Nome:</strong> {fanData.name}</p>
      <p><strong>CPF:</strong> {fanData.cpf}</p>
      <p><strong>Endereço:</strong> {fanData.address}</p>
      <p><strong>Jogo Favorito:</strong> {fanData.favoriteGame}</p>

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
