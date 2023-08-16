import React, { useContext } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ValorantApiContext } from '../context/ValorantApi';

import Title from '../components/Title';
import AgentCard from './AgentCard';
import ButtonLink from './ButtonSeeMore';

const AgentsSlider = () => {
  const { agents } = useContext(ValorantApiContext);

  return (
    <>
      <Title text="Agentes" margin="0 0 40px" />
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
      <ButtonLink text='Ver todos os agentes' link='agentes' type='red' />
    </>
  );
};

export default AgentsSlider;
