import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import brewgle from "../components/images/BrewgleSS.png"
import neighboard from "../components/images/neighboard.png"
import dayplanner from "../components/images/Work Day SS.png"
import readme from "../components/images/ReadMe.png"
import notetaker from "../components/images/ssnoteTaker.png"
import budget from "../components/images/ssProgressiveBud.png"
import styled from "styled-components";


const CarouselWrapper = styled.div`

img {
  height: 600px;
  width: 1000px;
}
h3, p {
  color: black;
  font-weight: 700;
}

`
const items = [
  {
    src: brewgle,
    altText: "Brewgle",
    caption: "A simple website my group and I made as our first project, it allows you to search for breweries in any city in the world and gives you the rating.",
    link: "https://samuel7morris.github.io/Brewgle/"
  },
  {
    src: neighboard,
    altText: "Neighboard",
    caption: "An app that lets you create neighbors, rank them and have them post on a community board.",
    link: "https://infinite-springs-66297.herokuapp.com/"
  },
  {
    src: dayplanner,
    altText: "Day Planner",
    caption: "An app that allows you to add items to a planner that goes through the day. Gray is past, red is present and green is the future hours in the day!",
    link: "https://tmartinez0202.github.io/day-planner/"
  },
  {
    src: readme,
    altText: "Read Me Generator",
    caption: "a backend app that lets you generate a template and input information for a MD file",
    link: "https://github.com/Tmartinez0202/Read-me-generator"
  },
  {
    src: notetaker,
    altText: "Note Taker",
    caption: "An app that lets you write and save notes.",
    link: "https://tmartinez0202.github.io/note-taker/"
  }, {
    src: budget,
    altText: "Progressive Budget",
    caption: "An app that helps you manage your budget.",
    link: "https://tmartinez0202.github.io/Progressive-budget/"
  },
];

const Caro = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <CarouselWrapper>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.altText}/>

          </CarouselWrapper>
          <a href={item.link}>Project Link</a>
        </CarouselItem>

);

  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Caro;