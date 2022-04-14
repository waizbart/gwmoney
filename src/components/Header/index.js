import { useState } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header({ onOpenNewTransactionModal }) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="Logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}

