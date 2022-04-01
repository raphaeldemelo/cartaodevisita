import styled from 'styled-components';

export const Container = styled.div`
background-color: var(--white);
width: 600px;
height: 700px;
border-radius: 10px;
display:flex;
align-items: center;
flex-direction: column;
-webkit-box-shadow: 0px 0px 15px 0px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    0px 0px 15px 0px rgba(50, 50, 50, 0.75);
box-shadow:         0px 0px 15px 0px rgba(50, 50, 50, 0.75);
margin-top: -20px;
flex-direction: column;
justify-content: space-between;
`;

export const AreaTitulo = styled.div`
border-bottom: 1px solid #ddd;
width: 100%;
`;

export const Titulo = styled.h1`
text-align: center;
`;

export const AreaFormulario = styled.div`
width: 100%;
margin-top: -50px;
padding: 10px;
`;

export const Label = styled.h4`
margin-top: 30px;
`;

export const Input = styled.input`
margin-top: 5px;
width: 100%;
border-radius: 5px;
border: 1px solid #ddd;

`;

export const AreaBotao = styled.div`
width: 100%;
border-top: 1px solid #ddd;
display:flex;
justify-content: center;
margin-bottom: 10px;
`;

export const Botao = styled.button`
margin-top: 10px;
border: none;
padding: 10px;
border-radius: 10px;
background-color: #4F95DA;
color: var(--white);
font-weight: bold;
cursor: pointer;
width: 200px;
`;

