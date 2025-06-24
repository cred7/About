import { useEffect, useState } from "react";

const Starbackground = () => {
  const [stars, setstars] = useState([]);
  const [meteors, setmeteors] = useState([]);

  useEffect(() => {
    generstars();
    generateMeteor();

    const handlesize = () => {
      generstars();
    };
    window.addEventListener("resize", handlesize);
    return () => window.removeEventListener("resize", handlesize);
  }, []);

  const generstars = () => {
    const numberofstars = Math.floor(
      (window.innerWidth * window.innerHeight) / 2000
    );
    const newstars = [];

    for (let i = 0; i < numberofstars; i++) {
      newstars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationduration: Math.random() * 4 + 2,
      });
    }
    setstars(newstars);
  };

  const generateMeteor = () => {
    const numberofMeteor = 4;
    const newmeteors = [];

    for (let i = 0; i < numberofMeteor; i++) {
      newmeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationduration: Math.random() * 3 + 3,
      });
    }
    setmeteors(newmeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 ">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle "
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        ></div>
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Starbackground;
