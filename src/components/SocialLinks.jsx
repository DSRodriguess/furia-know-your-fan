import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { Panel } from "primereact/panel";

export default function SocialLinks() {
  const [links, setLinks] = useState({
    twitter: "",
    instagram: "",
    twitch: "",
  });

  const [loading, setLoading] = useState(false);
  const [socialData, setSocialData] = useState(null);

  const handleChange = (key, value) => {
    setLinks((prev) => ({ ...prev, [key]: value }));
  };

  const simulateSocialFetch = () => {
    setLoading(true);
    setTimeout(() => {
      // Mock de retorno "social"
      setSocialData({
        followedOrgs: ["FURIA", "LOUD", "CBLOL"],
        recentActivity: [
          "Comentou em um post da FURIA",
          "Curtiu um clipe de highlight de CS2",
          "Seguiu a LOUD no Instagram"
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Card title="Redes Sociais">
      <div className="field">
        <label htmlFor="twitter">Twitter</label>
        <InputText
          id="twitter"
          value={links.twitter}
          onChange={(e) => handleChange("twitter", e.target.value)}
          placeholder="https://twitter.com/seu_usuario"
        />
      </div>

      <div className="field">
        <label htmlFor="instagram">Instagram</label>
        <InputText
          id="instagram"
          value={links.instagram}
          onChange={(e) => handleChange("instagram", e.target.value)}
          placeholder="https://instagram.com/seu_usuario"
        />
      </div>

      <div className="field">
        <label htmlFor="twitch">Twitch</label>
        <InputText
          id="twitch"
          value={links.twitch}
          onChange={(e) => handleChange("twitch", e.target.value)}
          placeholder="https://twitch.tv/seu_usuario"
        />
      </div>

      <Button label="Analisar redes sociais" icon="pi pi-search" className="mt-3" onClick={simulateSocialFetch} />

      {loading && (
        <div className="mt-3 flex align-items-center gap-2">
          <ProgressSpinner style={{ width: "30px", height: "30px" }} strokeWidth="6" />
          <span>Analisando atividade...</span>
        </div>
      )}

      {socialData && (
        <Panel header="Resultado da análise" className="mt-3">
          <p><strong>Organizações seguidas:</strong> {socialData.followedOrgs.join(", ")}</p>
          <p><strong>Atividades recentes:</strong></p>
          <ul>
            {socialData.recentActivity.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </Panel>
      )}
    </Card>
  );
}
