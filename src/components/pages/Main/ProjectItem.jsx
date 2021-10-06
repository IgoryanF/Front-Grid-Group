import React from 'react';
import styled from "styled-components";
import {Image, ImageWrapper} from "../../UI/styledComponents/Styled";
import {NavLink} from "react-router-dom";

const ProjectItemContainer = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h5`
  font-size: 28px;
  line-height: 33px;
  color: black;
  margin: 18px 0 13px;
`;

const ProjectText = styled.span`
  font-weight: 300;
  font-size: ${({styles}) => styles ? styles.fontSize || "24px" : "24px"};
  line-height: ${({styles}) => styles ? styles.lineHeight || "100%" : "100%"};
  color: ${({styles}) => styles ? styles.color || "black" : "black"};
  margin-bottom: 13px;
`;

const HoverAction = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  z-index: 10;
  opacity: 0;
  transition: all 0.4s ease;
  
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0 4px 100px rgba(0, 0, 0, 0.25);
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  min-width: 54.5%;
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 24px;
  background: transparent;
  line-height: 28px;
  color: #FFFFFF;
  border: 1px solid #FFFFFF;
  padding: 24px 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: #E2E2E2;
    color: #000000;
  }
`;


const ProjectItem = (props) => {

    return (
        <ProjectItemContainer>
            <ImageWrapper paddingBottom="114%">
                <Image src={props.preview}/>
                <HoverAction>
                    <NavLinkStyled to={`/projects/${props.id}`}>
                        Смотреть проект
                    </NavLinkStyled>
                </HoverAction>
            </ImageWrapper>
            <ProjectTitle>{props.name}</ProjectTitle>
            <ProjectText styles={{lineHeight: "33px"}}>{props.style}</ProjectText>
            <ProjectText
                styles={{lineHeight: "21px", color: "#333333", fontSize: "18px"}}
            >
                {props.aria}
            </ProjectText>
        </ProjectItemContainer>
    );
};

export default ProjectItem;