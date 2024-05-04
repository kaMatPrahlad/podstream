import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PodcastCard from "../components/PodcastCard";

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
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Span = styled.div`
  display: flex;
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Podcasts = styled.div``;

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link
            to={`/showpodcasts/mostpopular`}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Comedy
          <Link to={`/showpodcasts/comedy`} style={{ textDecoration: "none" }}>
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  );
};

export default Dashboard;
