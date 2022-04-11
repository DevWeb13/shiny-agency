import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import { Loader } from '../../utils/style/Atoms';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

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
  //grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

function Freelances() {
  const [freelancersList, setFreelancesList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchFreelances() {
    setDataLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/freelances`);
      const { freelancersList } = await response.json();
      setFreelancesList(freelancersList);
    } catch (error) {
      console.log('===== error =====', error);
      setError(true);
    } finally {
      setDataLoading(false);
    }
  }

  useEffect(() => {
    fetchFreelances();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <FreelancesContainer>
      <FreelancesH2>Trouvez votre prestataire</FreelancesH2>
      <FreelanceP>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </FreelanceP>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile) => (
            <Card
              key={`${profile.id}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </FreelancesContainer>
  );
}

export default Freelances;
