import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/Favorite";

const Card = styled.div``;
const Top = styled.div``;
const Favorite = styled.div``;
const CardImage = styled.div``;
const CardInformation = styled.div``;
const MainInfo = styled.div``;
const Title = styled.div``;
const Descryption = styled.div``;
const CreatersInfo = styled.div``;
const Creator = styled.div``;
const CreatorName = styled.div``;
const Views = styled.div``;

const PodcastCard = () => {
  return (
    <Card>
      <Top>
        <Favorite></Favorite>
        <FavoriteIcon />
        <CardImage />
      </Top>

      <CardInformation>
        <MainInfo>
          <Title>The Tim Ferris Show</Title>
          <Descryption>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            perspiciatis nisi minus dolor repudiandae aut asperiores odit
            nostrum in! Maiores minima molestiae in rem ut suscipit quo? Vel
            quas animi omnis harum temporibus, magnam aliquam libero eum facilis
            fuga reiciendis nisi est ad. Adipisci odio unde, necessitatibus quos
            ratione hic impedit facere?
          </Descryption>
          <CreatersInfo>
            <Creator>
              <Avatar>P</Avatar>
              <CreatorName>Prahlad</CreatorName>
            </Creator>

            <Views>12 Views</Views>
          </CreatersInfo>
        </MainInfo>
      </CardInformation>
    </Card>
  );
};

export default PodcastCard;
