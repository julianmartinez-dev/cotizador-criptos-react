import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import ImagenCripto from './img/imagen-criptos.png';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  width: 90%;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 5px;
    background-color: #66a2fe;
    display: block;
    margin: -1px auto auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length) {
      const cotizarCripto = async () => {
        setCargando(true);
        setResultado({});
        const { moneda, criptomoneda } = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await fetch(url);
        const res = await resultado.json();
        setResultado(res.DISPLAY[criptomoneda][moneda]);

        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <Container>
      <Imagen src={ImagenCripto} alt="imagenes criptomonedas" />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario setMonedas={setMonedas} />

        { cargando && <Spinner /> }
        {Object.keys(resultado).length ? (
          <Resultado resultado={resultado} />
        ) : null}

      </div>
    </Container>
  );
}

export default App;
