import { useState } from "react";
import FanForm from './components/FanForm';
import DocumentUpload from './components/DocumentUpload';
import SocialLinks from './components/SocialLinks';
import ProfileSummary from './components/ProfileSummary';

function App() {
  const [fanData, setFanData] = useState(null);
  const [documentValidated, setDocumentValidated] = useState(false);
  const [socialData, setSocialData] = useState(null);
  const [reset, setReset] = useState(false);

  const handleFanDataSubmit = (data) => {
    setFanData(data);
    setReset(false); // Reseta para não mostrar o resumo antes de coletar tudo
  };

  const handleDocumentValidation = (file) => {
    setDocumentValidated(true);
  };

  const handleSocialDataFetch = (data) => {
    setSocialData(data);
  };

  const handleReset = () => {
    setFanData(null);
    setDocumentValidated(false);
    setSocialData(null);
    setReset(true); // Reinicia a aplicação
  };

  return (
    <div className="p-4">
      <h2>Know Your Fan – FURIA</h2>

      {!fanData && !reset && <FanForm onSubmit={handleFanDataSubmit} />}
      {fanData && !documentValidated && <DocumentUpload onValidate={handleDocumentValidation} />}
      {documentValidated && !socialData && <SocialLinks onFetchData={handleSocialDataFetch} />}
      
      {socialData && fanData && (
        <ProfileSummary
          fanData={fanData}
          socialData={socialData}
          documentValidated={documentValidated}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
