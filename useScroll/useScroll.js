import { useState, useEffect } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  const handleScroll = () => {
    setState({
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return state;
};
