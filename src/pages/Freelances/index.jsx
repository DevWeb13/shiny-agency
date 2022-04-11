import React from 'react';
import Card from '../../components/Card';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
];

const FreelancesContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FreelancesH2 = styled.h2`
  line-height: 39.75px;
  font-size: 30px;
`;

const FreelanceP = styled.p`
  font-size: 20px;
  line-height: 26.5px;
`;

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;

const Freelances = () => {
  return (
    <FreelancesContainer>
      <FreelancesH2>Trouvez votre prestataire</FreelancesH2>
      <FreelanceP>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelanceP>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
            picture={profile.picture}
          />
        ))}
      </CardsContainer>
    </FreelancesContainer>
  );
};

export default Freelances;
