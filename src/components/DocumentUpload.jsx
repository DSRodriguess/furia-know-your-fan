import { useState } from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Card } from 'primereact/card';
import socialBg from '../assets/social-bg.jpg';


const DocumentUpload = ({ onValidate }) => {
  const [file, setFile] = useState(null);
  const [validationResult, setValidationResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validateDocument = () => {
    if (file) {
      setValidationResult('success');
      onValidate(file);
    } else {
      setValidationResult('error');
    }
  };

  return (
    <Card
      title="Envio de Documento"
      className="p-shadow-4 social-card"
      style={{
        backgroundImage: `url(${socialBg})`
      }}
    >
      <div className="p-field">
        <input type="file" onChange={handleFileChange} />
      </div>
      <Button label="Validar Documento" icon="pi pi-upload" onClick={validateDocument} className="p-mt-2" />

      {validationResult === 'success' && (
        <Message severity="success" text="Documento validado!" className="p-mt-3" />
      )}
      {validationResult === 'error' && (
        <Message severity="error" text="Por favor, envie um arquivo válido." className="p-mt-3" />
      )}
    </Card>
  );
};

export default DocumentUpload;
