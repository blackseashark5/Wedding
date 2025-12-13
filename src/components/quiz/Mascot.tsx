import { useState, useEffect } from "react";

interface MascotProps {
  show: boolean;
}

const Mascot = ({ show }: MascotProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!show) return;
    
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;

  return (
    <div className="absolute left-4 bottom-4 z-20" style={{ animation: 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' }}>
      <div className="relative flex flex-col items-center">
        {/* Speech Bubble */}
        <div className="bg-white px-3 py-1.5 rounded-xl shadow-sm text-xs font-medium italic text-gray-700 mb-1 relative">
          Best of Luck!
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
        </div>
        
        {/* Animated Cat Paw SVG with smooth transitions */}
        <svg
          width="65"
          height="75"
          viewBox="0 0 65 75"
          className="drop-shadow-md"
        >
          {/* Arm/Wrist - white fur */}
          <ellipse
            cx="32"
            cy="62"
            rx="14"
            ry="16"
            fill="#FFFFFF"
            stroke="#FED7D7"
            strokeWidth="1"
          />
          
          {/* Palm base - white fur */}
          <ellipse
            cx="32"
            cy="38"
            rx="20"
            ry="18"
            fill="#FFFFFF"
            stroke="#FED7D7"
            strokeWidth="1"
          />
          
          {/* Main Pad (big toe bean) - pink */}
          <ellipse
            cx="32"
            cy="42"
            rx="11"
            ry="9"
            fill="#FEB2B2"
          />
          
          {/* Toe Pads with smooth CSS transitions */}
          {/* Left toe pad */}
          <ellipse
            cx={isOpen ? 16 : 22}
            cy={isOpen ? 28 : 36}
            rx={isOpen ? 6 : 5}
            ry={isOpen ? 7 : 5}
            fill="#FEB2B2"
            style={{ 
              transition: 'cx 0.6s ease-in-out, cy 0.6s ease-in-out, rx 0.6s ease-in-out, ry 0.6s ease-in-out'
            }}
          />
          
          {/* Middle-left toe pad */}
          <ellipse
            cx={isOpen ? 26 : 28}
            cy={isOpen ? 18 : 28}
            rx={isOpen ? 5 : 4}
            ry={isOpen ? 6 : 5}
            fill="#FEB2B2"
            style={{ 
              transition: 'cx 0.6s ease-in-out, cy 0.6s ease-in-out, rx 0.6s ease-in-out, ry 0.6s ease-in-out'
            }}
          />
          
          {/* Middle-right toe pad */}
          <ellipse
            cx={isOpen ? 38 : 36}
            cy={isOpen ? 18 : 28}
            rx={isOpen ? 5 : 4}
            ry={isOpen ? 6 : 5}
            fill="#FEB2B2"
            style={{ 
              transition: 'cx 0.6s ease-in-out, cy 0.6s ease-in-out, rx 0.6s ease-in-out, ry 0.6s ease-in-out'
            }}
          />
          
          {/* Right toe pad */}
          <ellipse
            cx={isOpen ? 48 : 42}
            cy={isOpen ? 28 : 36}
            rx={isOpen ? 6 : 5}
            ry={isOpen ? 7 : 5}
            fill="#FEB2B2"
            style={{ 
              transition: 'cx 0.6s ease-in-out, cy 0.6s ease-in-out, rx 0.6s ease-in-out, ry 0.6s ease-in-out'
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Mascot;
