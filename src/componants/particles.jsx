const particles = [
  { left: "5%", top: "12%", size: 5 },
  { left: "12%", top: "38%", size: 7 },
  { left: "18%", top: "72%", size: 4 },
  { left: "25%", top: "20%", size: 6 },
  { left: "31%", top: "55%", size: 4 },
  { left: "38%", top: "85%", size: 7 },
  { left: "44%", top: "10%", size: 4 },
  { left: "50%", top: "35%", size: 6 },
  { left: "56%", top: "70%", size: 5 },
  { left: "62%", top: "18%", size: 7 },
  { left: "68%", top: "48%", size: 4 },
  { left: "74%", top: "82%", size: 6 },
  { left: "80%", top: "25%", size: 5 },
  { left: "86%", top: "60%", size: 7 },
  { left: "93%", top: "15%", size: 4 },

  { left: "8%", top: "88%", size: 6 },
  { left: "20%", top: "8%", size: 4 },
  { left: "28%", top: "75%", size: 7 },
  { left: "35%", top: "30%", size: 5 },
  { left: "47%", top: "60%", size: 7 },
  { left: "53%", top: "92%", size: 4 },
  { left: "65%", top: "90%", size: 6 },
  { left: "72%", top: "8%", size: 5 },
  { left: "78%", top: "70%", size: 4 },
  { left: "88%", top: "40%", size: 6 },
  { left: "96%", top: "78%", size: 5 },
];

function Particles() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${index * -0.5}s`,
            animationDuration: `${7 + (index % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
