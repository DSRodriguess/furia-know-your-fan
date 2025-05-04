import { Card } from 'primereact/card';
import socialBg from '../assets/social-bg.jpg';

const Sobre = () => {
    return (
        <div >
            <Card
                title="Sobre a FURIA"
                subTitle="Conheça a nossa história"
                className="p-shadow-4 social-card"
                style={{
                    backgroundImage: `url(${socialBg})`
                }}
            >
                <p className="p-m-0" style={{ lineHeight: 1.8 }}>
                    A FURIA é uma organização brasileira de esports com presença global em jogos como CS:GO,
                    League of Legends e outros. 
                    <br />
                    Valorizamos nossos fãs e buscamos a excelência dentro e fora dos
                    servidores.
                </p>
            </Card>
        </div>
    );
};

export default Sobre;
