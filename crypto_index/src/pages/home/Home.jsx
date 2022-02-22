/* eslint-disable react/no-children-prop */
import React from 'react';
import * as S from './style';
import Label from '../../components/subcomponents/label/index';
import GlobalButton from '../../components/subcomponents/button/index';

function Home() {
  return (
    <S.Container>
      <section className="crypto-container">
        <GlobalButton login children="Atualizar valor monetário" />
        <Label>
          BTC
          <p>1</p>
        </Label>
        <section className="change-container">
          <Label>
            USD
            <p>6000,00</p>
          </Label>
          <Label>
            EUR
            <p>4200,00</p>
          </Label>
          <Label>
            BRL
            <p>4200,00</p>
          </Label>
          <Label>
            CAD
            <p>4200,00</p>
          </Label>
        </section>
      </section>
    </S.Container>
  );
}

export default Home;
