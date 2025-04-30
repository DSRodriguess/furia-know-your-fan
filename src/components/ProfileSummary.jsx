import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { Button } from "primereact/button";

export default function ProfileSummary({ fanData, socialData, documentValidated, onReset }) {
  return (
    <div>
      <h2>Resumo do Perfil</h2>
      <Card title="Informações Pessoais" className="mb-3">
        <p><strong>Nome:</strong> {fanData.name}</p>
        <p><strong>CPF:</strong> {fanData.cpf}</p>
        <p><strong>Endereço:</strong> {fanData.address}</p>
        <p><strong>Jogo Favorito:</strong> {fanData.favoriteGame}</p>
      </Card>

      <Card title="Validação de Documento" className="mb-3">
        {documentValidated ? (
          <Message severity="success" text="Documento validado com sucesso!" />
        ) : (
          <Message severity="error" text="Documento não validado." />
        )}
      </Card>

      <Card title="Redes Sociais" className="mb-3">
        {socialData ? (
          <div>
            <p><strong>Organizações seguidas:</strong> {socialData.followedOrgs.join(", ")}</p>
            <p><strong>Atividades recentes:</strong></p>
            <ul>
              {socialData.recentActivity.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
          </div>
        ) : (
          <Message severity="warn" text="Nenhuma análise de redes sociais realizada." />
        )}
      </Card>

      <Button label="Reiniciar" icon="pi pi-refresh" onClick={onReset} className="p-button-danger" />
    </div>
  );
}
