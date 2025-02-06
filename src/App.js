import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Dashboard from './components/Dashboard';
import Competitor from './components/Competitor';
import Mentor from './components/Mentor';
import Report from './components/Report';
import UserResearch from './components/UserResearch';
import MyReports from './components/MyReports';

const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #0E1034;
  position: relative;
`;

const Sidebar = styled.div`
  width: 240px;
  min-width: 240px;
  background-color: #0E1034;
  padding: 2rem 1.2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    width: 280px;
  }
`;

const LogoSection = styled.div`
  margin-bottom: 3rem;
  padding: 0 0.8rem;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    background: linear-gradient(45deg, #8b3dff, #b17aff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem 0.8rem;
  color: #8890a0;
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 0.2rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  font-size: 0.95rem;

  svg {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const BottomSection = styled.div`
  margin-top: auto;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`;

const ReportsButton = styled.button`
  background-color: #8b3dff;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: #7433d3;
  }
`;

const MainContent = styled.div`
  margin-left: 240px;
  width: calc(100% - 240px);

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: #8b3dff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1001;
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  return (
    <Router>
      <PageLayout>
        <HamburgerButton onClick={toggleSidebar}>
          {isSidebarOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </HamburgerButton>

        <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />
        
        <Sidebar isOpen={isSidebarOpen}>
          <LogoSection>
            <Logo>
              <span>Skoop AI</span>
            </Logo>
          </LogoSection>

          <NavSection>
            <StyledNavLink to="/" onClick={closeSidebar}>
              Dashboard
            </StyledNavLink>
            <StyledNavLink to="/competitor" onClick={closeSidebar}>
              Competitor Analysis
            </StyledNavLink>
            <StyledNavLink to="/mentor-strategy" onClick={closeSidebar}>
              Mentor Strategy
            </StyledNavLink>
            <StyledNavLink to="/user-research" onClick={closeSidebar}>
              User Research
            </StyledNavLink>
          </NavSection>

          <BottomSection>
            <Link to="/my-reports" onClick={closeSidebar}>
              <ReportsButton>
                My Reports →
              </ReportsButton>
            </Link>
            <StyledNavLink to="/" onClick={closeSidebar}>
              Logout
            </StyledNavLink>
          </BottomSection>
        </Sidebar>

        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/competitor" element={<Competitor />} />
            <Route path="/mentor-strategy" element={<Mentor />} />
            <Route path="/report" element={<Report />} />
            <Route path="/user-research" element={<UserResearch />} />
            <Route path="/my-reports" element={<MyReports />} />
            {/* Add other routes as needed */}
          </Routes>
        </MainContent>
      </PageLayout>
    </Router>
  );
}

export default App;
