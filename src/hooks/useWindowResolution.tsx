import { useState, useEffect } from "react";

type Resolution = "chico" | "mediano" | "grande";

const getResolution = (width: number): Resolution => {
  if (width <= 400) return "chico";
  
  return "mediano";
};

const useWindowResolution = (): Resolution => {
  const [resolution, setResolution] = useState<Resolution>(getResolution(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setResolution(getResolution(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return resolution;
};

export default useWindowResolution;
