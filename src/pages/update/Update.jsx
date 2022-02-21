import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GlobalButton from '../../components/subcomponents/button/index.js';
import Label from '../../components/subcomponents/label/index.js';
import Select from 'react-select';
import { selectOptions, customStyles } from '../../components/utils/select.js';
import * as S from './style.js';

function Update() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = e => {
    setSelectedOption(e);
  }; 

  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  }

  return (
    <S.Container>
      <header>
        <GlobalButton 
          back 
          children={"voltar"}
          onClick={handleBack}
          />
      </header>
      <section className="crypto-container">
        <Label>
          Moeda
          <div style={{width: '280px', marginTop: '15px'}}>
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
