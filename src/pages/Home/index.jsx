import React from 'react';
import styled from 'styled-components';
import { StyledLink, HomeAndErrorContainer } from './../../utils/style/Atoms';
import HomeMainImgSrc from '../../assets/homeMainImg.svg';

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
    <HomeAndErrorContainer>
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
    </HomeAndErrorContainer>
  );
}

export default Home;
