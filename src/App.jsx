import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FanForm from './components/FanForm';
import DocumentUpload from './components/DocumentUpload';
import SocialLinks from './components/SocialLinks';
import ProfileSummary from './components/ProfileSummary';
import './theme.scss';

function App() {
  const [fanData, setFanData] = useState(null);
  const [documentValidated, setDocumentValidated] = useState(false);
  const [socialData, setSocialData] = useState(null);
  const [reset, setReset] = useState(false);

  const handleFanDataSubmit = (data) => {
    setFanData(data);
    setReset(false);
  };

  const handleDocumentValidation = () => {
    setDocumentValidated(true);
  };

  const handleSocialDataFetch = (data) => {
    setSocialData(data);
  };

  const handleReset = () => {
    setFanData(null);
    setDocumentValidated(false);
    setSocialData(null);
    setReset(true);
  };

  return (
    <div className="p-d-flex p-flex-column" style={{ minHeight: '100vh' }}>
      <Header />

      <main
        className="p-grid p-justify-center p-p-4"
        style={{ maxWidth: '1200px', margin: '0 auto', gap: '2rem' }}
      >
        <div className="p-col-12 p-md-6">
          <FanForm onSubmit={handleFanDataSubmit} />
        </div>

        {fanData && (
          <>
            <div className="p-col-12 p-md-6">
              <DocumentUpload onValidate={handleDocumentValidation} />
            </div>

            <div className="p-col-12 p-md-6">
              <SocialLinks onFetchData={handleSocialDataFetch} />
            </div>

            <div className="p-col-12">
              <ProfileSummary
                fanData={fanData}
                socialData={socialData}
                documentValidated={documentValidated}
                onReset={handleReset}
              />
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
