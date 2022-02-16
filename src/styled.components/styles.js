import styled from "styled-components";

export const Box = styled.div`
  background-image: ${(props) => props.style.backgroundImage};
  background-repeat: ${(props) => props.style.backgroundRepeat};
  background-color: ${(props) => props.style.backgroundColor};
  background-size: ${(props) => props.style.backgroundSize};

  height: ${(props) => props.style.height};
  width: ${(props) => (props.coverWidth ? "100%" : props.style.width)};

  border: ${(props) => props.style.border};
  border-radius: ${(props) => props.style.borderRadius};

  color: ${(props) => props.style.color};
  font-size: ${(props) => props.style.fontSize};
  font-weight: ${(props) => props.style.fontWeigth};

  padding: ${(props) => (props.container ? "6%" : props.style.padding)};
  margin: ${(props) => props.style.margin};
  display: ${(props) => props.style.display};
  flex-direction: ${(props) => props.style.flexType};
  align-items: ${(props) => props.style.alignItems};
  justify-content: ${(props) => props.style.justifyContent};

  position: ${(props) => props.style.position};
  transform: ${(props) => props.style.transform};
  top: ${(props) => props.style.top};
  left: ${(props) => props.style.left};
  right: ${(props) => props.style.right};
  bottom: ${(props) => props.style.bottom};

  overflow: ${(props) => props.style.overflow};

  box-sizing: ${(props) => props.style.boxSizing};

  animation: ${(props) =>
    props.animation
      ? `${props.animation.duration}`` ${props.animation.animationContent}`` ${props.animation.type}`
      : ""};

  @media (min-width: ${(props) =>
      props.mediaQuery ? props.mediaQuery.quandoEm : ""}) {
    display: ${(props) => (props.mediaQuery ? props.mediaQuery.display : "")};
    flex-direction: ${(props) =>
      props.mediaQuery ? props.mediaQuery.flexDirection : ""};
    align-items: ${(props) =>
      props.mediaQuery ? props.mediaQuery.alignItems : ""};
    justify-content: ${(props) =>
      props.mediaQuery ? props.mediaQuery.justifyContent : ""};
    width: ${(props) => (props.mediaQuery ? props.mediaQuery.width : "")};
    height: ${(props) => (props.mediaQuery ? props.mediaQuery.height : "")};
    background-color: ${(props) =>
      props.mediaQuery ? props.mediaQuery.backgroundColorA : ""};
  }
`;

export const Button = styled.button`
  height: ${(props) => props.style.height};
  width: ${(props) => (props.coverWidth ? "100%" : props.style.width)};

  background-color: ${(props) => props.style.backgroundColor};

  border: ${(props) => props.style.border};
  border-radius: ${(props) => props.style.borderRadius};

  font-size: ${(props) => props.style.fontSize};
  font-weight: ${(props) => props.style.fontWeigth};
  color: ${(props) => props.style.color};
  text-align: ${(props) => props.style.textAlign};

  position: ${(props) => props.style.position};
  transform: ${(props) => props.style.transform};
  top: ${(props) => props.style.top};
  left: ${(props) => props.style.left};
  right: ${(props) => props.style.right};
  bottom: ${(props) => props.style.bottom};

  animation: ${(props) =>
    props.animation
      ? `${props.animation.duration}`` ${props.animation.animationContent}`` ${props.animation.type}`
      : ""};

  cursor: pointer;

  @media (min-width: ${(props) =>
      props.mediaQuery ? props.mediaQuery.quandoEm : ""}) {
    display: ${(props) => (props.mediaQuery ? props.mediaQuery.display : "")};
    flex-direction: ${(props) =>
      props.mediaQuery ? props.mediaQuery.flexDirection : ""};
    align-items: ${(props) =>
      props.mediaQuery ? props.mediaQuery.alignItems : ""};
    justify-content: ${(props) =>
      props.mediaQuery ? props.mediaQuery.justifyContent : ""};
    width: ${(props) => (props.mediaQuery ? props.mediaQuery.width : "")};
    height: ${(props) => (props.mediaQuery ? props.mediaQuery.height : "")};
    background-color: ${(props) =>
      props.mediaQuery ? props.mediaQuery.backgroundColorA : ""};
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.style.fontSize};
  font-weight: ${(props) => props.style.fontWeigth};
  color: ${(props) => props.style.color};
  text-align: ${(props) => props.style.textAlign};

  animation: ${(props) => props.style.animation};
`;
