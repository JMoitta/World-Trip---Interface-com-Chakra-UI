import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Center, Heading, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import styles from './sliderContinent.module.scss'
import { useRouter } from 'next/dist/client/router';

export interface IContinent {
  name: string;
  url: string;
  description: string;
}

interface SliderContinentProps {
  continents: IContinent[];
}
export function SliderContinent({ continents }: SliderContinentProps) {

  return (
    <Swiper className={styles.swiper}
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.name} >
          <LinkBox
            maxW="100vw"
            h={["15.625rem", "28.125rem"]}
            bgImage={`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${continent.url}')`}
            color="light.text"
            bgPos="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Center h="100%" flexDirection="column">
              <Heading fontWeight="bold" fontSize={["2xl", "5xl"]}>
                <LinkOverlay href={`/continents/${continent.name}`}>
                  {continent.name}
                </LinkOverlay>
              </Heading>
              <Text fontWeight="bold" fontSize={["sm", "2xl"]}>
                {continent.description}
              </Text>
            </Center>
          </LinkBox>
        </SwiperSlide>
      ))
      }
    </Swiper >
  );
};