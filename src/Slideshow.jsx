import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";

// STYLED COMPONENTS
import {
    Carousel,
    Container,
    ButtonNext,
    ButtonBack,
} from './styles';

// ICONS
import {
    IoIosArrowForward,
    IoIosArrowBack
} from 'react-icons/io';

const Destaque = (props) => {
    const [sliding, setSliding] = useState(0);
    const numItems = React.Children.count(props.children);

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handleBack(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });

    function handleNext(){
        if(sliding !== numItems){
            setSliding(sliding + 1);
        }else{
            setSliding(0);
        }
    }

    function handleBack(){
        if(sliding !== 0){
            setSliding(sliding - 1);
        }else{
            setSliding(numItems);
        }
    }
    
    return (
        <Carousel {...handlers} style={{cursor:'grab'}}>
            {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              
            </CarouselSlot>
          ))}
            {
                React.Children.map(props.children, (child) => (
                    <Container sliding={sliding}>
                        {child}
                    </Container>
                ))
            }
            {
                numItems >= 1 && 
                <>
                    <ButtonNext>
                        <IoIosArrowForward onClick={handleNext} className="icon"/>
                    </ButtonNext>
                    <ButtonBack>
                        <IoIosArrowBack onClick={handleBack} className="icon"/>
                    </ButtonBack>
                </>
            }
        </Carousel>
    )
}

export default Destaque;