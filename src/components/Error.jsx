import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error