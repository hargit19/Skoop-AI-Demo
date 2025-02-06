import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CompetitorContainer = styled.div`
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

const CompanyInfo = styled.div`
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

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
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
  height: ${props => props.height || 'auto'};
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

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const RevenueAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .amount {
    font-size: 1.8rem;
    font-weight: bold;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  .trend {
    background-color: rgba(0, 255, 0, 0.1);
    color: #4caf50;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
`;

const CompanyFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CompanyTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

const DateSelect = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const PlaceholderImage = styled.img`
  width: 100%;
  height: ${props => props.height || '250px'};
  object-fit: contain;
  border-radius: 8px;
`;

const CompetitorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CompetitorItem = styled.div`
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
  
  &:hover {
    background-color: #7433d3;
  }
`;

const Competitor = () => {
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    navigate(`/report`);
  };

  return (
    <CompetitorContainer>
      <Header>
        <Title>Competitor Analysis</Title>
        <CompanyInfo>
          <InfoGroup>
            <span>Company</span>
            <Input value="Google" readOnly />
          </InfoGroup>
          <InfoGroup>
            <span>H.Q.</span>
            <Input value="Bengaluru" readOnly />
          </InfoGroup>
          <InfoGroup>
            <span>Region : India</span>
          </InfoGroup>
        </CompanyInfo>
      </Header>

        <GridLayout>
          <Card>
            <CardHeader>
              <CardTitle>Total Market Revenue</CardTitle>
              <DateSelect>Jan 2023 - Dec 2023 ▼</DateSelect>
            </CardHeader>
            
            <RevenueAmount>
              <span className="amount">$240.8K</span>
              <span className="trend">+11.5%</span>
            </RevenueAmount>
            
            <CompanyFilter>
              <CompanyTag color="#8b3dff">Google</CompanyTag>
              <CompanyTag color="#ff3d3d">Yahoo</CompanyTag>
              <CompanyTag color="#3dff8b">Brave</CompanyTag>
            </CompanyFilter>
            
            <PlaceholderImage 
              src="/first.png" 
              alt="Revenue Chart"
            />
          </Card>

          <Card>
            <CardTitle>Market Share</CardTitle>
            <PlaceholderImage 
              src="/second.png" 
              alt="Market Share"
            />
          </Card>
        </GridLayout>

        <GridLayout>
          <Card>
            <CardTitle>Users by Countries</CardTitle>
            <PlaceholderImage 
              src="/demograph.png" 
              alt="Organic Search Chart"
            />
          </Card>

          <Card>
            <CardTitle>Domain Growth</CardTitle>
            <PlaceholderImage 
              src="/domajn.png" 
              alt="Organic Growth"
            />
          </Card>
        </GridLayout>

      <GridLayout>
        <Card>
          <CardTitle>Top Competitors</CardTitle>
          <CompetitorList>
            {['Bing', 'DuckDuckGo', 'Yahoo', 'Yandex', 'Baidu'].map((competitor) => (
              <CompetitorItem key={competitor}>
                <span>{competitor}</span>
                <GenerateReportButton onClick={() => handleGenerateReport(competitor)}>
                  Generate Report
                </GenerateReportButton>
              </CompetitorItem>
            ))}
          </CompetitorList>
        </Card>

          <Card>
            <CardTitle>Website Visitors</CardTitle>
            <PlaceholderImage 
              src="/third.png" 
              alt="Visitors Chart"
            />
          </Card>
        </GridLayout>

        <GridLayout>
          <Card>
            <CardTitle>Top Performing Startups</CardTitle>
            <CompetitorList>
              {['Company A', 'Company B', 'Company C', 'Company D'].map((company) => (
                <CompetitorItem key={company}>
                  <span>{company}</span>
                  <GenerateReportButton onClick={() => handleGenerateReport(company)}>
                    Generate Report
                  </GenerateReportButton>
                </CompetitorItem>
              ))}
            </CompetitorList>
          </Card>

        <Card>
          <CardTitle>Organic Search</CardTitle>
          <PlaceholderImage 
            height="300px"
            src="/fourth.png" 
            alt="World Map"
          />
        </Card>
      </GridLayout>
    </CompetitorContainer>
  );
};

export default Competitor;