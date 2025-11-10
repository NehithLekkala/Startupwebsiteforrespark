import { motion } from "motion/react";

export function WalleRobot() {
  return (
    <div className="relative flex items-end gap-3">
      {/* WALL-E inspired robot */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg width="140" height="160" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="70" cy="155" rx="40" ry="5" fill="#000" opacity="0.15" />
          
          {/* Tracks/Base */}
          <rect x="25" y="130" width="90" height="25" rx="12" fill="#4a5568" />
          <rect x="30" y="133" width="80" height="19" rx="9" fill="#2d3748" />
          {/* Track details */}
          <rect x="35" y="137" width="8" height="11" rx="2" fill="#1a202c" />
          <rect x="47" y="137" width="8" height="11" rx="2" fill="#1a202c" />
          <rect x="59" y="137" width="8" height="11" rx="2" fill="#1a202c" />
          <rect x="71" y="137" width="8" height="11" rx="2" fill="#1a202c" />
          <rect x="83" y="137" width="8" height="11" rx="2" fill="#1a202c" />
          <rect x="95" y="137" width="8" height="11" rx="2" fill="#1a202c" />
          
          {/* Body - compactor box */}
          <motion.rect 
            x="30" 
            y="75" 
            width="80" 
            height="60" 
            rx="4" 
            fill="#d97706"
            animate={{ 
              y: [75, 73, 75],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <rect x="33" y="78" width="74" height="54" rx="2" fill="#f59e0b" />
          
          {/* Body panels and details */}
          <rect x="40" y="85" width="60" height="2" fill="#d97706" />
          <rect x="40" y="95" width="60" height="2" fill="#d97706" />
          <rect x="40" y="105" width="60" height="2" fill="#d97706" />
          
          {/* Recycling symbol on body */}
          <motion.g
            animate={{ 
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <circle cx="70" cy="110" r="12" fill="#10b981" opacity="0.9" />
            <text x="70" y="117" fontSize="16" fill="#fff" textAnchor="middle">♻</text>
          </motion.g>
          
          {/* Neck */}
          <rect x="55" y="60" width="30" height="15" rx="3" fill="#78716c" />
          <rect x="58" y="63" width="24" height="9" rx="2" fill="#a8a29e" />
          
          {/* Head */}
          <motion.g
            animate={{ 
              rotate: [0, -3, 3, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ originX: "70px", originY: "40px" }}
          >
            <rect x="45" y="25" width="50" height="40" rx="6" fill="#78716c" />
            <rect x="48" y="28" width="44" height="34" rx="4" fill="#a8a29e" />
            
            {/* Eyes - binocular style like WALL-E */}
            <motion.g
              animate={{ 
                scaleX: [1, 0.8, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              style={{ originX: "70px" }}
            >
              {/* Left eye */}
              <circle cx="58" cy="42" r="10" fill="#1f2937" />
              <circle cx="58" cy="42" r="8" fill="#3b82f6" />
              <circle cx="58" cy="42" r="5" fill="#1e3a8a" />
              <motion.circle 
                cx="60" 
                cy="40" 
                r="2" 
                fill="#fff"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Right eye */}
              <circle cx="82" cy="42" r="10" fill="#1f2937" />
              <circle cx="82" cy="42" r="8" fill="#3b82f6" />
              <circle cx="82" cy="42" r="5" fill="#1e3a8a" />
              <motion.circle 
                cx="84" 
                cy="40" 
                r="2" 
                fill="#fff"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
            
            {/* Antenna */}
            <line x1="70" y1="25" x2="70" y2="15" stroke="#78716c" strokeWidth="2" strokeLinecap="round" />
            <motion.circle 
              cx="70" 
              cy="12" 
              r="3" 
              fill="#ef4444"
              animate={{ 
                opacity: [0.4, 1, 0.4],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
          
          {/* Arms */}
          {/* Left arm - static */}
          <g>
            <rect x="20" y="85" width="12" height="30" rx="3" fill="#78716c" />
            <rect x="22" y="87" width="8" height="26" rx="2" fill="#a8a29e" />
            <circle cx="26" cy="117" r="4" fill="#57534e" />
          </g>
          
          {/* Right arm - static */}
          <g>
            <rect x="108" y="85" width="12" height="30" rx="3" fill="#78716c" />
            <rect x="110" y="87" width="8" height="26" rx="2" fill="#a8a29e" />
            <circle cx="114" cy="117" r="4" fill="#57534e" />
          </g>
        </svg>
      </motion.div>
      
      {/* Speech bubble with recycling message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg px-5 py-3 mb-8 border-2 border-green-200"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-green-700">Let's save the planet together!</span>
          </p>
        </div>
        {/* Speech bubble tail */}
        <div 
          className="absolute bottom-4 left-[-10px] w-0 h-0"
          style={{
            borderTop: "10px solid transparent",
            borderBottom: "10px solid transparent",
            borderRight: "10px solid #bbf7d0"
          }}
        />
      </motion.div>
    </div>
  );
}
