import React from 'react';

import {
    Container,
    AreaTitulo,
    Titulo,
    AreaFormulario,
    Label,
    Input,
    AreaBotao,
    Botao,
} from './styles';

export default function MeusDados() {
    return (
        <Container>
            <AreaTitulo>
                <Titulo>Meus Dados</Titulo>
            </AreaTitulo>

            <AreaFormulario>
                <Label>Nome</Label>
                <Input
                    placeholder='Seu nome'
                />
                <Label>Instagram</Label>
                <Input
                    placeholder='https://www.instagram.com/'
                />
                <Label>Facebook</Label>
                <Input
                    placeholder='https://www.facebook.com/'
                />
                <Label>Github</Label>
                <Input
                    placeholder='https://www.instagram.com/'
                />
                <Label>LinkedIn</Label>
                <Input
                    placeholder='https://www.github.com/'
                />
                <Label>Portfólio</Label>
                <Input
                    placeholder='https://www.meuportfolio.com/'
                />
            </AreaFormulario>

            <AreaBotao>
                <Botao>Salvar</Botao>
            </AreaBotao>
        </Container>
    );
}