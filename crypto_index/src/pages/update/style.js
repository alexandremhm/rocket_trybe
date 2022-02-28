import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #396C52;

    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: fixed;
      top: 0;
      width: 100%;
      margin-left: 500px
    }

    .crypto-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height: 60vh;
        width: 40vw;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    Label {
      font-size: 20px
    }
    
    input {
      width: 250px;
      height: 20px;
      padding: 10px;
      border: 1px solid #cccccc;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      border-radius: 5px; 
    }
`;
