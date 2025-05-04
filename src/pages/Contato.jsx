import { Card } from 'primereact/card';
import socialBg from '../assets/social-bg.jpg';

const Contato = () => {
    return (
        <div>
            <Card
                title="Contato"
                subTitle="Fale conosco"
                className="p-shadow-4 social-card"
                style={{
                    backgroundImage: `url(${socialBg})`
                }}
            >
                <p className="p-m-0" style={{ lineHeight: 1.8 }}>
                    Você pode entrar em contato com a FURIA pelo e-mail: <strong>contato@furia.gg</strong>.
                    <br />
                    Também estamos presentes nas redes sociais para responder dúvidas e receber sugestões!
                </p>
            </Card>
        </div>
    );
};

export default Contato;
