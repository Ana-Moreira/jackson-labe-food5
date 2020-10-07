import React from 'react';
<<<<<<< HEAD
import { ImageLogo } from './styled-homepage';
const logo = require('../../img/logo.png');

const Homepage = () => {
  return (
    <div>
      <ImageLogo src={logo} />
    </div>
=======
import { 
  HomepageContainer,
  SearchIcon,
  SearchInput,
  SearchContainer,
  FilterContainer,
  FilterSpan,
  RestaurantCard,
  RestaurantContainer, 
  RestaurantImage,
  UserHandleContainer,
  RestaurantName, SubInfos, DeliveryTime, Freight 
} from './styled-homepage'
import healthy from '../../Img/healthy-food.jpg'

const Homepage = () => {
  return (
    <HomepageContainer>
      <UserHandleContainer>
        <SearchContainer>
          <SearchIcon/>
          <SearchInput placeholder={"Restaurante"}/>
        </SearchContainer>
        <FilterContainer>
          <FilterSpan>Burger</FilterSpan>
          <FilterSpan>Asiática</FilterSpan>
          <FilterSpan>Massas</FilterSpan>
          <FilterSpan>Saudáveis</FilterSpan>
          <FilterSpan>Vegano</FilterSpan>
        </FilterContainer>
      </UserHandleContainer>
      <RestaurantContainer>
        <RestaurantCard>
          <RestaurantImage src={healthy}/>
          <RestaurantName>Bullguer Eldorado</RestaurantName>
          <SubInfos>
            <DeliveryTime>50 - 60 min</DeliveryTime>
            <Freight>Frete R$6,00</Freight>
          </SubInfos>
        </RestaurantCard>
        <RestaurantCard>
          <RestaurantImage src={healthy}/>
          <RestaurantName>Vinil Butantã</RestaurantName>
          <SubInfos>
            <DeliveryTime>50 - 60 min</DeliveryTime>
            <Freight>Frete R$6,00</Freight>
          </SubInfos>
        </RestaurantCard>
        <RestaurantCard>
          <RestaurantImage src={healthy}/>
          <RestaurantName>Juicy Burguer</RestaurantName>
          <SubInfos>
            <DeliveryTime>50 - 60 min</DeliveryTime>
            <Freight>Frete R$6,00</Freight>
          </SubInfos>
        </RestaurantCard>
        <RestaurantCard>
          <RestaurantImage src={healthy}/>
        </RestaurantCard>
        <RestaurantCard>
          <RestaurantImage src={healthy}/>
        </RestaurantCard>
        <RestaurantCard>
          <RestaurantImage src={healthy}/>
        </RestaurantCard> 
      </RestaurantContainer>
    </HomepageContainer>
>>>>>>> b2ac965a7abbe1a57d39f4b311f42b62a520a945
  );
};

export default Homepage;
