import React from 'react';
import { Link } from 'react-router-dom';
import { AccountButton, ChangesButton } from './style.account';
import { Settings, FormatListBulleted } from '@material-ui/icons';
import './account.css';

function Account() {
  return (
    <div className="contas">
      <h1>Lista de contas</h1>
      <Settings className="contas__setting" />
      <div className="contas__buttons">
        <AccountButton color="blue">Dinheiro<br />R$ 9.720,00</AccountButton>
      </div>
      <ChangesButton>AJUSTAR SALDO</ChangesButton>
      <ChangesButton><FormatListBulleted />REGISTROS</ChangesButton>
    </div>
  );
}

export default Account;
