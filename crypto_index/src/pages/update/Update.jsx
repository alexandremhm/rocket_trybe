/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import GlobalButton from '../../components/subcomponents/button/index';
import Label from '../../components/subcomponents/label/index';
import { selectOptions, customStyles } from '../../components/utils/select';
import getLocalStorage from '../../components/utils/getLocalStorage';
import updateCurrency from '../../services/updateCurrency';
import * as S from './style';
import getCurrency from '../../services/getCurrency';

function Update() {
  const [selectedOption, setSelectedOption] = useState({ value: 'BRL', label: 'BRL - Real' });
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState();
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = async () => {
    try {
      const token = getLocalStorage();
      if (value.length === 0) {
        toast.error('Ops! Que pena, você não digitou nada!');
        return;
      }
      await updateCurrency(
        token,
        { code: selectedOption.value, value: parseFloat(value).toFixed(3) },
      );
      toast.success('Moeda atualizada com sucesso!');
      setCurrency(value);
    } catch (error) {
      toast.error('Ops! Algo deu errado, tente novamente!');
    }
  };

  useEffect(() => {
    const token = getLocalStorage();
    if (!token) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    const handleGetCurrency = async () => {
      const token = getLocalStorage();
      const response = await getCurrency(token, { code: selectedOption.value });
      return response;
    };

    handleGetCurrency().then((response) => setCurrency(response));
  }, [selectedOption]);

  return (
    <S.Container>
      <ToastContainer />
      <header>
        <GlobalButton
          back
          children="Voltar"
          onClick={handleBack}
        />
      </header>
      <section className="crypto-container">
        <Label>
          Moeda
          <div style={{ width: '280px', marginTop: '15px' }}>
            <Select
              styles={customStyles}
              options={selectOptions}
              onChange={(e) => setSelectedOption(e)}
              value={selectedOption}
              placeholder="Select Currency"
            />
          </div>
        </Label>
        <span>Valor atual</span>
        <p>{currency || ''}</p>
        <Label>
          <p>Novo valor</p>
          <input
            type="number"
            onChange={(e) => setValue(e.target.value)}
          />
        </Label>
        <GlobalButton
          login
          children="Atualizar"
          onClick={handleSubmit}
        />
      </section>
    </S.Container>
  );
}

export default Update;
