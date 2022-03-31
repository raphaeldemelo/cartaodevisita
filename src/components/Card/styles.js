import styled from 'styled-components';

export const Container = styled.div`
background-color: var(--white);
width: 350px;
height: 600px;
border-radius: 10px;
display:flex;
align-items: center;
flex-direction: column;
-webkit-box-shadow: 0px 0px 15px 0px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    0px 0px 15px 0px rgba(50, 50, 50, 0.75);
box-shadow:         0px 0px 15px 0px rgba(50, 50, 50, 0.75);
`;

export const AreaQr = styled.div`

`;

export const Imagem = styled.img`
width: 100%;
height: 100%;
border-radius: 20px;
`;

export const AreaTexto = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;

export const Titulo = styled.h1`
margin-top: 10px;
color: #000;
border-width: 10%;
border-bottom: 1px solid #ddd;
`;

export const Nome = styled.h2`
color: var(--dark-blue);
border-bottom: 1px solid #ddd;
`;

export const Descricao = styled.h4`
margin-top: 10px;
color: var(--grayish-blue);
font-weight: 300;
`;