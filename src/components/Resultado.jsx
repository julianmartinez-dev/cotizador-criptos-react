import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
`;
const Texto = styled.p`
  font-size: 1.2rem;
  span {
    font-weight: bold;
  }
`;
const Precio = styled.p`
  font-size: 1.5rem;
  span {
    font-weight: bold;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 150px;
  margin-top: 30px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <ResultadoDiv>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen criptomoneda"
      />
      <div>
        <Precio>
          El precio es: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          El precio cambio en las ultimas 24 horas:{' '}
          <span>{CHANGPCT24HOUR}</span>
        </Texto>
        <Texto>
          La ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </ResultadoDiv>
  );
};

export default Resultado;
