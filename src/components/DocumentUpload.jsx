import { useState } from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

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
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button label="Validar Documento" icon="pi pi-upload" onClick={validateDocument} />
      {validationResult === 'success' && <Message severity="success" text="Documento validado!" />}
      {validationResult === 'error' && <Message severity="error" text="Por favor, envie um arquivo válido." />}
    </div>
  );
};

export default DocumentUpload;
