import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    cursor: pointer;
    background-color: #747dfe;
  }
`;

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const respuesta = await fetch(url);
      const data = await respuesta.json();

      const arrayCriptos = data.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });

      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([moneda, criptomoneda].includes('')) {
      setError(true)
      return;
    }
    setError(false);

    //Enviar los datos al componente principal
    setMonedas({moneda,criptomoneda})
  }

  return (

    <>
    {error && <Error>Todos los campos son obligatorios</Error> }
    <form action=""
      onSubmit={handleSubmit}
    >
      <SelectMonedas />
      
      <SelectCriptomoneda />

      <InputSubmit type="submit" value="Cotizar" />
    </form>
    </>
  );
};

export default Formulario;
