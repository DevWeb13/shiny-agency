import React from 'react';
import styled from 'styled-components';
import { StyledLink } from './../../utils/style/Atoms';
import HomeMainImgSrc from '../../assets/homeMainImg.svg';

const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f9f9fc;
  height: 824px;
`;

const HomeTextButtonContainer = styled.div`
  width: 40%;
`;

const HomeTxt = styled.p`
  font-size: 3.125rem;
  line-height: 5rem;
`;

const HomeMainImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <HomeContainer>
      <HomeTextButtonContainer>
        <HomeTxt>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </HomeTxt>
        <StyledLink
          to="/survey/1"
          // @ts-ignore
          $isFullLink
        >
          Faire le test
        </StyledLink>
      </HomeTextButtonContainer>
      <HomeMainImgContainer>
        <img src={HomeMainImgSrc} alt="profil draw" />
      </HomeMainImgContainer>
    </HomeContainer>
  );
}

export default Home;
