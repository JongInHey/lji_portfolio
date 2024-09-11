import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #83ffa4;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;

  position: fixed;
  right: 2%;
  bottom: 3%;

  opacity: ${(props) => (props.$isShow ? 1 : 0)};
  pointer-events: ${[(props) => (props.$isShow ? "auto" : "none")]};
  transition: 0.2s;
`;

export const TopBtn = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleTopbtn = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button $isShow={isShow} onClick={handleTopbtn}>
      ^
    </Button>
  );
};
