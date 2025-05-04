import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';
import socialBg from '../assets/social-bg.jpg';

const SocialLinks = ({ onFetchData }) => {
  const [links, setLinks] = useState({ twitter: '', instagram: '', twitch: '' });
  const [loading, setLoading] = useState(false);
  const [socialData, setSocialData] = useState(null);

  const handleChange = (key, value) => {
    setLinks((prev) => ({ ...prev, [key]: value }));
  };

  const simulateSocialFetch = () => {
    setLoading(true);
    setTimeout(() => {
      setSocialData({
        followedOrgs: ['FURIA', 'LOUD', 'CBLOL'],
        recentActivity: ['Comentou na FURIA', 'Seguiu LOUD no Instagram'],
      });
      setLoading(false);
      onFetchData(socialData);
    }, 2000);
  };

  return (
    <Card
      title="Redes Sociais"
      className="p-shadow-4 social-card"
      style={{
        backgroundImage: `url(${socialBg})`
      }}
    >
      <InputText id="twitter" value={links.twitter} onChange={(e) => handleChange('twitter', e.target.value)} placeholder="Twitter" />
      <InputText id="instagram" value={links.instagram} onChange={(e) => handleChange('instagram', e.target.value)} placeholder="Instagram" />
      <InputText id="twitch" value={links.twitch} onChange={(e) => handleChange('twitch', e.target.value)} placeholder="Twitch" />

      <Button label="Analisar redes sociais" icon="pi pi-search" onClick={simulateSocialFetch} />

      {loading && <ProgressSpinner style={{ width: '30px', height: '30px' }} />}
      {socialData && (
        <div>
          <p>Organizações seguidas: {socialData.followedOrgs.join(', ')}</p>
          <ul>
            {socialData.recentActivity.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default SocialLinks;
