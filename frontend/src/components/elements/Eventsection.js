import React, { Component,useEffect,useState } from "react";
import Carousel from "react-multi-carousel";
import APIService from "../../ApiService";
import 'react-multi-carousel/lib/styles.css';
import Eventcard from "./Eventcard";
import './styles/scroll.css'
function Eventsection(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1
    }
  };
  const [activeSlideIndex,setActiveSlideIndex] = useState(0);
  const [events,setEvents] = useState([]);
  const SetActiveSlideIndex = (newActiveSlideIndex) => {
  setActiveSlideIndex(newActiveSlideIndex);
};


useEffect(() => {
    APIService.AllEventsView()
    .then((res) => {
      setEvents(res)
      console.log(res);
    })
  },[])


    return (
      <Carousel
      responsive={responsive}
      focusOnSelect={true}
      >
      {  events.map(event => <Eventcard teacher={event.teacher} key={event.id} image={event.event_poster} price={event.price} points={event.Points} title={event.Title} info={event.info} description={event.Description} location={event.event_location} date={event.event_date} link={event.EventLink} />)}
      

      </Carousel>
    )
}

export default Eventsection;