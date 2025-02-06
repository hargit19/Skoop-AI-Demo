import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MentorContainer = styled.div`
  flex: 1;
  background-color: #0E1034;
  color: white;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin-left: 0;
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const DomainInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #0B1739;
  border-radius: 12px;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlaceholderImage = styled.img`
  width: 100%;
  height: ${props => props.height || '250px'};
  object-fit: contain;
  border-radius: 8px;
  margin: 0;
  
  @media (max-width: 768px) {
    height: ${props => props.height ? 'auto' : '200px'};
    max-height: ${props => props.height || '250px'};
  }
`;

const ChallengeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProgressBar = styled.div`
  width: 60%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => props.progress}%;
    height: 100%;
    background-color: #8b3dff;
    border-radius: 3px;
  }
`;

const ChallengeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    
    ${ProgressBar} {
      width: 100%;
    }
  }
`;



const PredictionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PredictionItem = styled.div`
  padding: 0.5rem 0;
  color: #8890a0;
`;

const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CompanyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const GenerateReportButton = styled.button`
  background-color: #8b3dff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &:hover {
    background-color: #7433d3;
  }
`;

const MentorStrategy = () => {
  return (
    <MentorContainer>
      <Header>
        <Title>Mentor Strategies</Title>
        <DomainInfo>
          <span>Domain</span>
          <Input defaultValue="example.com" />
          <span>Region : India</span>
        </DomainInfo>
      </Header>

      <GridLayout>
        <Card>
          <CardTitle>Domain Growth</CardTitle>
          <PlaceholderImage 
            src="/ms-first.png" 
            alt="Domain Growth"
          />
        </Card>

        <Card>
          <CardTitle>User Demographics</CardTitle>
          <PlaceholderImage 
            src="/ms-second.png" 
            alt="User Demographics"
          />
        </Card>
      </GridLayout>

      <GridLayout>
        <Card>
          <CardTitle>Major Challenges in this Domain</CardTitle>
          <ChallengeList>
            <ChallengeItem>
              <span>Challenge 1</span>
              <ProgressBar progress={75} />
              <span>75%</span>
            </ChallengeItem>
            <ChallengeItem>
              <span>Challenge 2</span>
              <ProgressBar progress={60} />
              <span>60%</span>
            </ChallengeItem>
            <ChallengeItem>
              <span>Challenge 3</span>
              <ProgressBar progress={33} />
              <span>33%</span>
            </ChallengeItem>
          </ChallengeList>
        </Card>

        <Card>
          <CardTitle>CAGR Report 2025 Domain Predictions</CardTitle>
          <PredictionList>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <PredictionItem key={num}>
                Prediction {num}.
              </PredictionItem>
            ))}
          </PredictionList>
        </Card>
      </GridLayout>

      <GridLayout>
        <Card>
          <CardTitle>Competitive Landscape</CardTitle>
          <PlaceholderImage 
            src="/ms-third.png" 
            alt="Competitive Landscape"
            height="400px"
          />
        </Card>

        <Card>
          <CardTitle>Top Performing Companies</CardTitle>
          <CompanyList>
            {['Brave', 'Duckduck', 'Bing', 'Yahoo', 'DailyGT', 'Oracle', 'Deepmind'].map((company) => (
              <CompanyItem key={company}>
                <span>{company}</span>
                <Link to={`/report`}>
                <GenerateReportButton>Generate Report</GenerateReportButton>
                </Link>
              </CompanyItem>
            ))}
          </CompanyList>
        </Card>
      </GridLayout>
    </MentorContainer>
  );
};

export default MentorStrategy;
