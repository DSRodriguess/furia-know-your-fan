import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FanForm from './components/FanForm';
import DocumentUpload from './components/DocumentUpload';
import SocialLinks from './components/SocialLinks';
import ProfileSummary from './components/ProfileSummary';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './theme.scss';

function HomePage({
  fanData, documentValidated, socialData, reset,
  handleFanDataSubmit, handleDocumentValidation,
  handleSocialDataFetch, handleReset
}) {
  return (
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
  );
}

function App() {
  const [fanData, setFanData] = useState(null);
  const [documentValidated, setDocumentValidated] = useState(false);
  const [socialData, setSocialData] = useState(null);
  const [reset, setReset] = useState(false);

  return (
    <Router>
      <div className="p-d-flex p-flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                fanData={fanData}
                documentValidated={documentValidated}
                socialData={socialData}
                reset={reset}
                handleFanDataSubmit={setFanData}
                handleDocumentValidation={() => setDocumentValidated(true)}
                handleSocialDataFetch={setSocialData}
                handleReset={() => {
                  setFanData(null);
                  setDocumentValidated(false);
                  setSocialData(null);
                  setReset(true);
                }}
              />
            }
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
