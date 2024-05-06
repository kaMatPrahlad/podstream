import React from "react";
import PodcastCard from "../components/PodcastCard";

const Container = styled.div``;
const Topic = styled.div``;
const FavouriteContainer = styled.div``;

function Favourites() {
  return (
    <Container>
      <Topic>Favourites</Topic>
      <FavouriteContainer>
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </FavouriteContainer>
    </Container>
  );
}

export default Favourites;
