import React from 'react';

import {
    Container,
    AreaQr,
    Imagem,
    AreaTexto,
    Titulo,
    Descricao,
    Nome,
} from './styles';
import ImagemQrCode from '../../assets/qrcode.png';
import Botao from '../Botao';

export default function Card() {
    return (
        <Container>
            <AreaQr>
                <Imagem src={ImagemQrCode} />
            </AreaQr>

            <AreaTexto>
                <Titulo>Cartão de Visita</Titulo>
                <Nome>Raphael de Melo</Nome>

                <Descricao>
                    Aqui você encontra diversas <br />
                    redes sociais deste usuário
                </Descricao>
            </AreaTexto>

            <Botao />
        </Container>
    );
}