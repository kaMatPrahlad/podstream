import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import Favorite from "@mui/icons-material/Favorite";

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
const Favorite = styled(IconButton)`
  color: white;
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.text_secondary + 95} !important;
  color: white !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
`;
const CardImage = styled.img`
object-fit: cover;
width: 220px;
height: 140px;
border-radius: 6px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
&:hover{
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
`;
const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
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
        <CardImage src="https://png.pngtree.com/png-clipart/20210219/ourmid/pngtree-red-headphones-mike-music-radio-logo-png-image_2913097.jpg" />
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
