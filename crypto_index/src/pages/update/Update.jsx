/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import GlobalButton from '../../components/subcomponents/button/index';
import Label from '../../components/subcomponents/label/index';
import { selectOptions, customStyles } from '../../components/utils/select';
import * as S from './style';

function Update() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  return (
    <S.Container>
      <header>
        <GlobalButton
          back
          children="voltar"
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
              onChange={handleChange}
              value={selectedOption}
              placeholder="Select Currency"
            />
          </div>
        </Label>
        <span>Valor atual</span>
        <Label>
          <p>Novo valor</p>
          <input
            type="text"
          />
        </Label>
      </section>
    </S.Container>
  );
}

export default Update;
