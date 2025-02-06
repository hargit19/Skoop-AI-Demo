import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0 1rem;
  }
`;

const Heading = styled.h1`
  color: white;
  margin-bottom: 2rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ReportCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #141742;
  border: 1px solid #141742;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 95%;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
`;

const ReportName = styled.span`
  font-size: 1.1rem;
  color: white;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ViewButton = styled.button`
  background-color: #8b3dff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7433d3;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const MyReports = () => {
  const navigate = useNavigate();

  // Sample reports data - replace with your actual reports
  const reports = [
    { id: 1, name: 'Competitor Analysis (Brave)' },
  ];

  const handleViewReport = (reportId) => {
    // Navigate to the specific report page
    navigate(`/report`);
  };

  return (
    <Container>
      <Heading>Your Generated Reports</Heading>
      {reports.map((report) => (
        <ReportCard key={report.id}>
          <ReportName>{report.name}</ReportName>
          <ViewButton onClick={() => handleViewReport(report.id)}>
            View Report
          </ViewButton>
        </ReportCard>
      ))}
    </Container>
  );
};

export default MyReports;
