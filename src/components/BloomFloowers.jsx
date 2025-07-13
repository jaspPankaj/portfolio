import { useEffect, useState } from "react";

export const BloomFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    generateFlowers();

    const handleResize=()=>{
        generateFlowers();
    };

    window.addEventListener('resize',handleResize);

    return ()=> window.removeEventListener('resize',handleResize);
  }, []);

  //generate Flowers
  const generateFlowers = () => {
      const flowerCount = 10;
      const newFlowers = [];

      for (let i = 0; i < flowerCount; i++) {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 30 + 20; // 20px to 50px
        const delay = Math.random() * 5;

        newFlowers.push({ id: i, left, top, size, delay });
      }

      setFlowers(newFlowers);
    };
  

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute text-pink-400 animate-bloom"
          style={{
            left: flower.left + "%",
            top: flower.top +"%",
            fontSize: flower.size + "px",
            animationDelay: flower.delay +"s",
          }}
        >
          🌻
        </div>
      ))}
    </div>
  );
};