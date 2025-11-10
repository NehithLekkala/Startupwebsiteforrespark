import { motion } from "motion/react";

export function WalleIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center"
    >
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tracks/Base */}
        <rect x="6" y="30" width="20" height="5" rx="2" fill="#4a5568" />
        <rect x="7" y="31" width="18" height="3" rx="1" fill="#2d3748" />
        
        {/* Body */}
        <motion.rect 
          x="7" 
          y="17" 
          width="18" 
          height="14" 
          rx="1" 
          fill="#d97706"
          animate={{ 
            y: [17, 16.5, 17],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <rect x="8" y="18" width="16" height="12" rx="0.5" fill="#f59e0b" />
        
        {/* Recycling symbol on body */}
        <motion.circle 
          cx="16" 
          cy="24" 
          r="3" 
          fill="#10b981"
          animate={{ 
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <text x="16" y="26.5" fontSize="4" fill="#fff" textAnchor="middle">♻</text>
        
        {/* Neck */}
        <rect x="12" y="14" width="8" height="3" rx="1" fill="#78716c" />
        
        {/* Head */}
        <motion.g
          animate={{ 
            rotate: [0, -2, 2, 0],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: "16px", originY: "9px" }}
        >
          <rect x="10" y="6" width="12" height="9" rx="1.5" fill="#78716c" />
          <rect x="11" y="7" width="10" height="7" rx="1" fill="#a8a29e" />
          
          {/* Eyes */}
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
            style={{ originX: "16px" }}
          >
            <circle cx="13.5" cy="10" r="2" fill="#1f2937" />
            <circle cx="13.5" cy="10" r="1.5" fill="#3b82f6" />
            <circle cx="13.7" cy="9.5" r="0.5" fill="#fff" />
            
            <circle cx="18.5" cy="10" r="2" fill="#1f2937" />
            <circle cx="18.5" cy="10" r="1.5" fill="#3b82f6" />
            <circle cx="18.7" cy="9.5" r="0.5" fill="#fff" />
          </motion.g>
          
          {/* Antenna */}
          <line x1="16" y1="6" x2="16" y2="3" stroke="#78716c" strokeWidth="0.5" strokeLinecap="round" />
          <motion.circle 
            cx="16" 
            cy="2.5" 
            r="0.8" 
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
        
        {/* Arms - static */}
        <rect x="5" y="19" width="2.5" height="7" rx="0.8" fill="#78716c" />
        <rect x="24.5" y="19" width="2.5" height="7" rx="0.8" fill="#78716c" />
      </svg>
    </motion.div>
  );
}
