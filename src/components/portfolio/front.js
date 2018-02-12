import React from 'react';
import { Link } from 'react-router-dom';

const Front = () => (
    <div className="presentation">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Olá pessoal da B2W.</h1>
                    <p>Fico muito feliz pela oportunidade. Meu nome é Vinícius Arruda e esse é meu teste!</p>
                    <p>Eu usei Redux para salvar o data do fetch, mas se quiserem posso usar com state mesmo.</p>
                    <p>Fiquem a vontade para seguir para o portfólio :)</p>
                    <Link to="/portfolio" className="btn btn-go">Seguir</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Front;