import styled from 'styled-components';
import defaultImg from "../images/room-1.jpeg";
const StyleComponents = styled.header `
    min-height: 60vh;
    background: url(${props => (props.img ? props.img : defaultImg)});
    display: flex;
    align-items: center;
    justify-content: center;
`
export default StyleComponents;