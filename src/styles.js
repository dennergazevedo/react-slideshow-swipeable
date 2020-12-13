import styled from 'styled-components';

export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 100px;
    overflow: hidden;

    *{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    height: auto;
    cursor: grab;
    transition: transform 1s ease;
    transform: ${props => (props.sliding ? `translateX(calc(-100vw * ${props.sliding}))` : `translateX(0%)`)};

    @media only screen and (max-width: 1000px){
        flex-direction: column;
    }
`;

export const ButtonNext = styled.span`
    display: flex;
    position: absolute;
    right: 20px;
    font-size: 50px;
    color: ${props => props.theme.color}5;
    padding: 0;

    @media only screen and (max-width: 600px){
        font-size: 30px;
        right: 10px;
    }

    .icon{
        cursor: pointer;

        &:hover{
            color: ${props => props.theme.color}8;
        }
    }
`;

export const ButtonBack = styled.span`
    display: flex;
    position: absolute;
    left: 20px;
    font-size: 50px;
    color: ${props => props.theme.color}5;
    padding: 0;

    @media only screen and (max-width: 600px){
        font-size: 30px;
        left: 10px;
    }

    .icon{
        cursor: pointer;
    }

    &:hover{
        color: ${props => props.theme.color}8;
    }
`;