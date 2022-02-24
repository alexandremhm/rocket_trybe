/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Label from '../../components/subcomponents/label/index';
import GlobalButton from '../../components/subcomponents/button/index';
import getLocalStorage from '../../components/utils/getLocalStorage';
import getAllCurriencies from '../../services/getAllCurrencies';
import LoadSpinner from '../../LoadSpinner/LoadSpinner';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const token = getLocalStorage();
    if (!token) {
      navigate('/login');
    }
  }, []);

  const handleGetCurrencies = async () => {
    const token = getLocalStorage();
    const response = await getAllCurriencies(token);
    setLoading(false);
    return response;
  };
  useEffect(() => {
    handleGetCurrencies().then((response) => setData(response));
  }, []);

  return (
    <S.Container>
      {loading ? (
        <LoadSpinner />
      ) : (
        <section className="crypto-container">
          <GlobalButton
            login
            children="Atualizar valor monetário"
            onClick={() => navigate('/update')}
          />
          <Label>
            BTC
            <p>1</p>
          </Label>
          <section className="change-container">
            <Label>
              <p>{data && data.bpi.BRL.code}</p>
              <p>{data && data.bpi.BRL.rate}</p>
            </Label>
            <Label>
              <p>{data && data.bpi.CAD.code}</p>
              <p>{data && data.bpi.CAD.rate}</p>
            </Label>
            <Label>
              <p>{data && data.bpi.EUR.code}</p>
              <p>{data && data.bpi.EUR.rate}</p>
            </Label>
            <Label>
              <p>{data && data.bpi.USD.code}</p>
              <p>{data && data.bpi.USD.rate}</p>
            </Label>
          </section>
        </section>
      )}
    </S.Container>
  );
}

export default Home;
