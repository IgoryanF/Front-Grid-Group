import React from 'react';
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

const FlexContainer = styled.div`
  width: ${props => props.styles ? props.styles.width || undefined : undefined};
  display: flex;
  flex-direction: ${props => props.styles ? props.styles.direction || "row" : "row"};
  flex-wrap: ${props => props.styles ? props.styles.wrap || "nowrap" : "nowrap"};
  justify-content: ${props => props.styles ? props.styles.justifyContent || "flex-start" : "flex-start"};
  align-items: ${props => props.styles ? props.styles.alignItems || "stretch" : "stretch"};
  
  ${({withLoadingButton}) => withLoadingButton && css`
    > .MuiButton-root {
      transition: all .3s ease;
       &:hover {
         background: #535353 !important;
         border: 1px solid #535353 !important;
       }
      &[disabled] {
        background: #535353 !important;;
      }
     }
  `};
`;

//
export const Flex = (props) => {

    return (
        <FlexContainer {...props}>
            {props.children}
        </FlexContainer>
    );
};

//
export const Section = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: ${props => props.marginTop || 0};
  margin-bottom: ${props => props.marginBottom || 0};
  ${props => props.shadow && css`
    box-shadow: 0 0 0 1px #bdbdbd;
  `};
`;

//
export const ImgWrapperStyles = styled.div`
  position: relative;

  > div {
    width: ${props => props.width || "100%"};
    padding-bottom: ${props => props.paddingBottom || "100%"};;
  }
`;

export const ImageWrapper = (props) => {
    return (
        <ImgWrapperStyles {...props}>
            <div>
                {props.children}
            </div>
        </ImgWrapperStyles>
    )
}

//
const ImgStyles = styled.img.attrs((props) => ({
    src: props.src || ''
}))`
  position: absolute;
  left: ${props => props.left || "0"};
  top: ${props => props.top || "0"};
  z-index: 1;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  object-fit: ${props => props.objectFit || "cover"};
  object-position: center center;
  cursor: ${props => props.cursor || "none"};
`;

export const Image = (props) => {
    return (
        <picture>
            <ImgStyles {...props}/>
        </picture>
    )
}

//
const NavLinkStyled = styled(NavLink).attrs((props) => ({
        arrowimage: {
            src: props.arrowimage.src || ''
        }
}))`
  text-decoration: none;
  display: block;
  width: 30%;
  border: 1px solid #000000;
  margin-bottom: 30px;
  margin-left: 88px;
  position: relative;
  transition: all .3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  > .linkWrapper {
    width: 100%;
    padding-bottom: 22%;
  }
  
  .linkContent {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    > span {
      font-weight: 300;
      font-size: 36px;
      line-height: 42px;
      color: #000000;
    }
    
    img {
      display: block;
      margin-left: 55px;
    }
  }
`;

export const NavLinkWithArrow = (props) => {

    const {to, ...other} = props
    return (
        <NavLinkStyled to={props.to} {...other}>
            <div className="linkWrapper">
                <div className="linkContent">
                    <span>{props.children}</span>
                    <img src={other.arrowimage.src} alt={''}/>
                </div>
            </div>
        </NavLinkStyled>
    )
}

//
export const TitleH3 = styled.h3`
  font-weight: 300;
  line-height: 56px;
  font-size: 48px;
  margin: ${({ style}) => style ? style.margin || 0 : 0};
  color: ${({ style }) => style ? style.color || "black" : "black"};
`;

export const TitleH4 = styled(TitleH3)`
  font-weight: 500;
  font-size: 36px;
  line-height: 146.69%;
  position: relative;
`;

export const TitleH5 = styled(TitleH3)`
  font-size: 24px;
  line-height: 146.19%;
  position: relative;
  color: ${({ styles }) => styles ? styles.color || "black" : "black"};
  margin: ${({ styles }) => styles ? styles.margin || 0 : 0};
`;

//
export const SectionTitle = styled(TitleH3)`
  position: relative;
  color: black;
  padding-left: 60px;
  margin: ${({ style }) => style ? style.margin || 0 : 0};

  &::before {
    position: absolute;
    content: "";
    height: 10px;
    left: 0;
    background-color: black;
    width: 200px;
    top: ${props => props.top || "64px"};
  }
`;

//
export const Container = styled.div`
  position: relative;
  overflow: hidden;
  max-width: ${({ styles }) => styles ? styles.maxWidth || "100%" : "100%"};
  margin: 0 auto;
  z-index: ${({ styles }) => styles ? styles.zIndex || 0 : 0};
`;