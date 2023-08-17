import React from 'react';

import Banner from '../components/Banner';
import AgentsSlider from '../components/AgentsSlider';
import GameModesPreview from '../components/GameModesPreview';
import MapsPreview from '../components/MapsPreview';
import RanksPreview from '../components/RanksPreview';

const Home = () => {
  return (
    <>
      <Banner
        title="Valorant: o jogo competitivo 5x5"
        paragraphText="Um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e habilidades únicas!"
        buttonText="SAIBA MAIS"
        buttonLink="#"
        imageSrc="src/assets/images/agents-banner.png"
      />
      <AgentsSlider />
      <GameModesPreview />
      <MapsPreview />
      <RanksPreview />
    </>
  );
};

export default Home;
