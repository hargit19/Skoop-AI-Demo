import React from 'react';
import styled from 'styled-components';

const ReportContainer = styled.div`
  flex: 1;
  background-color: #0E1034;
  color: white;
  padding: 2rem 3.5rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const MetricCard = styled.div`
  background-color: #0B1739;
  border-radius: 12px;
  padding: 1.2rem;

  .label {
    color: #8890a0;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: bold;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  .trend {
    color: ${props => props.trend > 0 ? '#4caf50' : '#ff3d3d'};
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      margin-bottom: 0;
    }
  }
`;

const Section = styled.div`
  background-color: #0B1739;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProductColumn = styled.div`
  h3 {
    color: #8890a0;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const ProductItem = styled.div`
  background-color: #141742;
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.7rem;
  }
`;

const SwotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const SwotColumn = styled.div`
  h3 {
    color: #8890a0;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  div {
    background-color: #141742;
    padding: 0.8rem;
    border-radius: 8px;
    margin-bottom: 0.8rem;
    font-size: 0.9rem;

    @media (max-width: 480px) {
      font-size: 0.85rem;
      padding: 0.7rem;
      margin-bottom: 0.6rem;
    }
  }
`;

const GapAnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ChartSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PlaceholderImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  border-radius: 8px;

  @media (max-width: 1024px) {
    height: 220px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const RevenueSection = styled(Section)`
  margin-bottom: 0;
`;

const CompetitorReport = () => {
  return (
    <ReportContainer>
      <Header>
        <div>
          <BackButton>← Back</BackButton>
          <Title>Report : Competitor Analysis (Brave)</Title>
        </div>
        <span>Region : India</span>
      </Header>

      <MetricsGrid>
        <MetricCard trend={-9.7}>
          <div className="label">Visits</div>
          <div className="value">65M</div>
          <div className="trend">-9.7%</div>
        </MetricCard>
        <MetricCard trend={7.97}>
          <div className="label">Pages / Visit</div>
          <div className="value">1.75</div>
          <div className="trend">+7.97%</div>
        </MetricCard>
        <MetricCard trend={-22.94}>
          <div className="label">Avg. Visit Duration</div>
          <div className="value">04:35</div>
          <div className="trend">-22.94%</div>
        </MetricCard>
        <MetricCard trend={6.47}>
          <div className="label">Bounce Rate</div>
          <div className="value">87.65%</div>
          <div className="trend">+6.47%</div>
        </MetricCard>
      </MetricsGrid>

      <Section>
        <SectionTitle>Brave's Revenue Model :</SectionTitle>
        <ol style={{ paddingLeft: '1.2rem', color: '#8890a0' }}>
          <li>Privacy-respecting Ads (advertisers pay in BAT, users earn BAT for viewing ads)</li>
          <li>BAT Creator Tips (Content tips in BAT)</li>
          <li>Search Engine Revenue (via Microsoft + Yandex, DuckDuckGo)</li>
          <li>BAT Ecosystem Transaction fees and functionality within content creators</li>
          <li>Premium features - upcoming web extensions and earnings</li>
        </ol>
      </Section>

      <Section>
        <SectionTitle>Product Offerings & Success Ratings :</SectionTitle>
        <ProductGrid>
          <ProductColumn>
            <h3>Product</h3>
            {['Brave Browser', 'Brave Rewards', 'Brave Search', 'Brave VPN', 'Brave Talk', 'BAT Ecosystem'].map(item => (
              <ProductItem key={item}>{item}</ProductItem>
            ))}
          </ProductColumn>
          <ProductColumn>
            <h3>Description</h3>
            {[
              'Privacy-focused browser with ad blocking',
              'Earn BAT for viewing ads or tipping creators',
              'Privacy-first search engine',
              'Private VPN service',
              'Privacy-first video conferencing tool',
              'Tokenized rewards for ads and payments'
            ].map(item => (
              <ProductItem key={item}>{item}</ProductItem>
            ))}
          </ProductColumn>
          <ProductColumn>
            <h3>Ratings</h3>
            {[
              '9/10 Core product, high adoption',
              '8/10 Popular in India, good revenue stream',
              '7/10 Growing but behind Google',
              '6/10 Limited reach, could grow',
              '5/10 In test phase, low awareness',
              '8/10 Strong in crypto but in INR lifecycle'
            ].map(item => (
              <ProductItem key={item}>{item}</ProductItem>
            ))}
          </ProductColumn>
        </ProductGrid>
      </Section>

      <Section>
        <SectionTitle>SWOT Analysis of Brave (India) :</SectionTitle>
        <SwotGrid>
          <SwotColumn>
            <h3>Strengths</h3>
            <div>Privacy-first approach</div>
            <div>BAT rewards/token engagement</div>
            <div>Strong regional conferences</div>
            <div>UX integration for BAT</div>
          </SwotColumn>
          <SwotColumn>
            <h3>Weaknesses</h3>
            <div>Limited brand awareness</div>
            <div>Smaller market share vs. Google</div>
            <div>Limited rewards program</div>
            <div>Limited product portfolio</div>
          </SwotColumn>
          <SwotColumn>
            <h3>Opportunities</h3>
            <div>Growing privacy concerns</div>
            <div>Rising internet users in India</div>
            <div>Partnership with local startups</div>
            <div>Blockchain/Web3 adoption</div>
          </SwotColumn>
          <SwotColumn>
            <h3>Threats</h3>
            <div>Google's dominance in search/browsing</div>
            <div>Regulatory challenges for crypto/BAT</div>
            <div>Competition from other privacy browsers</div>
            <div>Market volatility</div>
          </SwotColumn>
        </SwotGrid>
      </Section>

      <Section>
        <SectionTitle>Brave's Market Strategies :</SectionTitle>
        <ul style={{ color: '#8890a0', listStyle: 'disc', paddingLeft: '1.2rem' }}>
          <li>Local-first Privacy Campaign: Targeted Indian regions with key privacy awareness.</li>
          <li>Enhanced Search Optimization: BAT Mining integrated with data metrics on Mobile, navigates "Search-first"</li>
          <li>Regional Content Partnerships: Tie-ups with news, media, and entertainment.</li>
          <li>Modified BAT Rewards: Earn BAT via surveys, quizzes, and tasks.</li>
          <li>Brave Search Push: First BAT for switching to Brave Search.</li>
          <li>UX Upgrades: Focus on mobile-first design for easy adoption.</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Key Changes :</SectionTitle>
        <ul style={{ color: '#8890a0', listStyle: 'disc', paddingLeft: '1.2rem' }}>
          <li>Privacy-centric Customization: privacy settings for Indian users</li>
          <li>BAT Rewards: Localized for regional use, QR integration</li>
          <li>Brave Search: Multilingual support, local results, and business listing</li>
          <li>Mobile Optimization: UX upgrades for better mobile browsing, gaming acceleration</li>
        </ul>
      </Section>

      <Section>
        <SectionTitle>Gap Analysis: How Google India Can Win Over Brave :</SectionTitle>
        <GapAnalysisGrid>
          <ProductColumn>
            <h3>Brave's Strength</h3>
            <ProductItem>Privacy first browsing</ProductItem>
            <ProductItem>BAT rewards for users</ProductItem>
            <ProductItem>Product language support</ProductItem>
            <ProductItem>UX integration for BAT</ProductItem>
            <ProductItem>Decentralized data management</ProductItem>
          </ProductColumn>
          <ProductColumn>
            <h3>Description</h3>
            <ProductItem>Perceived as user-centric privacy</ProductItem>
            <ProductItem>Real-time rewards for ad engagement</ProductItem>
            <ProductItem>Limited localization in Tier 2/3 cities</ProductItem>
            <ProductItem>No UPI integration for Google Pay rewards</ProductItem>
            <ProductItem>Lack of optimal sharing</ProductItem>
          </ProductColumn>
          <ProductColumn>
            <h3>Impact</h3>
            <ProductItem>User's privacy choice made simple</ProductItem>
            <ProductItem>Rewards incentivized user for ad views</ProductItem>
            <ProductItem>Need of regional language support for all products</ProductItem>
            <ProductItem>Improved UPI/Google Pay rewards for searches</ProductItem>
            <ProductItem>Add local help topics within</ProductItem>
          </ProductColumn>
        </GapAnalysisGrid>
      </Section>

      <ChartSection>
        <Section>
          <SectionTitle>Organic Search</SectionTitle>
          <PlaceholderImage 
            src="/mr-second.png" 
            alt="Organic Search"
          />
        </Section>
        <Section>
          <SectionTitle>Market Share</SectionTitle>
          <PlaceholderImage 
            src="/mr-third.png" 
            alt="Market Share"
          />
        </Section>
      </ChartSection>

      <RevenueSection>
        <SectionTitle>Revenue (INR Cr)</SectionTitle>
        <PlaceholderImage 
          src="/mr-first.png" 
          alt="Revenue Chart"
        />
      </RevenueSection>
    </ReportContainer>
  );
};

export default CompetitorReport;
