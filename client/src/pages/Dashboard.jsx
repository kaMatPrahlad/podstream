import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  flex-direction: column;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`;
const Topic = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
`;

const Span = styled.div``;
const Podcasts = styled.div``;

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>Hi</Podcasts>
      </FilterContainer>
    </DashboardMain>
  );
};

export default Dashboard;
