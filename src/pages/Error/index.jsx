import React from 'react';
import { HomeAndErrorContainer } from './../../utils/style/Atoms';
import errorImg from '../../assets/errorImg.svg';
import styled from 'styled-components';

const ErrorP = styled.p`
  font-size: 31px;
  line-height: 31px;
  font-weight: bold;
`;

function Error() {
  return (
    <HomeAndErrorContainer
      // @ts-ignore
      column
    >
      <ErrorP>Oups...</ErrorP>
      <img src={errorImg} alt="Error" />
      <ErrorP>Il semblerait qu'il y ait un problème</ErrorP>
    </HomeAndErrorContainer>
  );
}

export default Error;
