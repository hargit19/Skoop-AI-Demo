import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  flex: 1;
  background-color: #0E1034;
  color: white;
  padding: 2rem 3.5rem 2rem 4.5rem;
  overflow-x: hidden;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Greeting = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.span`
  color: #ffffff;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeatureCard = styled.div`
  background-color: #141742;
  padding: 1.5rem;
  border-radius: 12px;
  position: relative;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  p {
    color: #8890a0;
    margin-bottom: 2rem;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.85rem;
      margin-bottom: 1.5rem;
    }
  }
  
  .tools {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.8rem;

    @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 0.25rem 0.6rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const MetricCard = styled.div`
  background-color: #141742;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const MetricLabel = styled.div`
  color: #8890a0;
  font-size: 0.9rem;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const MetricValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const MetricTrend = styled.div`
  color: ${props => props.isPositive ? '#4caf50' : '#ff3d3d'};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const MetricInfo = styled.div`
  @media (max-width: 480px) {
    text-align: right;
  }
`;

const Dashboard = () => {

  return (
    <DashboardContainer>
      <Header>
        {/* <Title>Dashboard</Title> */}
        <Greeting>Hi User123 !</Greeting>
        <CompanyInfo>
          <InfoGroup>
            <Label>Company</Label>
            <Input value="Google" readOnly />
          </InfoGroup>
          <InfoGroup>
            <Label>H.Q.</Label>
            <Input value="Bengaluru" readOnly />
          </InfoGroup>
          <InfoGroup>
            <Label>Region : India</Label>
          </InfoGroup>
        </CompanyInfo>
      </Header>

      <MetricsGrid>
        <MetricCard>
          <MetricLabel>Total Revenue</MetricLabel>
          <MetricInfo>
            <MetricValue>₹43.5k</MetricValue>
            <MetricTrend isPositive={true}>+12.5%</MetricTrend>
          </MetricInfo>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Total Users</MetricLabel>
          <MetricInfo>
            <MetricValue>1,250</MetricValue>
            <MetricTrend isPositive={true}>+8.2%</MetricTrend>
          </MetricInfo>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Active Users</MetricLabel>
          <MetricInfo>
            <MetricValue>830</MetricValue>
            <MetricTrend isPositive={false}>-2.4%</MetricTrend>
          </MetricInfo>
        </MetricCard>

        <MetricCard>
          <MetricLabel>Conversion Rate</MetricLabel>
          <MetricInfo>
            <MetricValue>66.4%</MetricValue>
            <MetricTrend isPositive={true}>+4.3%</MetricTrend>
          </MetricInfo>
        </MetricCard>
      </MetricsGrid>

      <FeaturesGrid>
        <FeatureCard>
          <h3>Rank Tracking</h3>
          <p>Track daily changes of your target keywords in your target location</p>
          <div className="tools">4 tools</div>
        </FeatureCard>
        <FeatureCard>
          <h3>Competitor Analysis</h3>
          <p>Get new ideas to improve your companies strategies and performance</p>
          <div className="tools">3 tools</div>
        </FeatureCard>
        <FeatureCard>
          <h3>Market Analysis</h3>
          <p>Boost your performance by unpacking competitor strategies with daily and weekly traffic data.</p>
          <div className="tools">5 tools</div>
        </FeatureCard>
        <FeatureCard>
          <h3>Market Analysis</h3>
          <p>Analyze your position and get ahead of the competition in a current or new market</p>
          <div className="tools">2 tools</div>
        </FeatureCard>
        <FeatureCard>
          <h3>Mentor Strategy</h3>
          <p>Boost your performance by unpacking strategies of top performing companies in your domain.</p>
          <div className="tools">5 tools</div>
        </FeatureCard>
        <FeatureCard>
          <h3>Local SEO</h3>
          <p>Optimize your site for local searches to get more customers in your area</p>
          <div className="tools">6 tools</div>
        </FeatureCard>
      </FeaturesGrid>
    </DashboardContainer>
  );
};

export default Dashboard;
