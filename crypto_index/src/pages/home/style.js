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

    .crypto-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      height: 80vh;
      width: 70vw;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    }

    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      border: 1px solid #6CC28D;
      border-radius: 5px;
      padding: 20px;
      text-align: center;
      background: #6CC28D;
    }

    .change-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
      text-align: center;
    }

    Label {
      text-align: center;
      padding-top: 25px
    }

`;
