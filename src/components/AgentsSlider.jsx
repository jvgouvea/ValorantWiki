import React, { useContext } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ValorantApiContext } from '../context/ValorantApi';

import Container from '../components/Container';
import Title from '../components/Title';
import AgentCard from './AgentCard';
import ButtonSeeMore from './ButtonSeeMore';

const AgentsSlider = () => {
  const { agents } = useContext(ValorantApiContext);

  return (
    <Container>
      <Title text="AGENTES" margin="0 0 40px" tag='h2' color='primary-black'/>
      {agents.status === 200 ? (
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="swiper-agents"
          >
            {agents.data.map((agent) => (
              <SwiperSlide key={agent.uuid}>
                <AgentCard
                  uuid={agent.uuid}
                  displayName={agent.displayName}
                  fullPortrait={agent.fullPortrait}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="unavailable-service">Serviço indisponível</p>
      )}
      <ButtonSeeMore text='Ver todos os agentes' link='agentes' type='red' margin='50px 0 0'/>
    </Container>
  );
};

export default AgentsSlider;
