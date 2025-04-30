import { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";

export default function DocumentUpload({ onValidate }) {
  const [file, setFile] = useState(null);
  const [validating, setValidating] = useState(false);
  const [result, setResult] = useState(null);

  const simulateAIValidation = () => {
    setValidating(true);
    setResult(null);

    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance de sucesso
      setValidating(false);
      setResult(success ? "success" : "error");
      if (success && onValidate) {
        onValidate(file); // passa o arquivo para o pai
      }
    }, 2000); // 2 segundos de delay para simular IA
  };

  const onSelect = (e) => {
    const uploadedFile = e.files[0];
    setFile(uploadedFile);
    setResult(null);
  };

  return (
    <Card title="Validação de Documento">
      <FileUpload
        name="document"
        accept="image/*"
        maxFileSize={1000000}
        customUpload
        auto
        mode="basic"
        chooseLabel="Selecionar documento"
        uploadHandler={onSelect}
      />

      {file && !validating && (
        <Button label="Validar com IA" icon="pi pi-search" onClick={simulateAIValidation} className="mt-3" />
      )}

      {validating && (
        <div className="mt-3 flex align-items-center gap-2">
          <ProgressSpinner style={{ width: "30px", height: "30px" }} strokeWidth="6" />
          <span>Validando documento...</span>
        </div>
      )}

      {result === "success" && (
        <Message severity="success" text="Documento validado com sucesso!" className="mt-3" />
      )}

      {result === "error" && (
        <Message severity="error" text="Falha na validação. Tente novamente." className="mt-3" />
      )}
    </Card>
  );
}
