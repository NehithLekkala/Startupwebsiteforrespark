import { motion } from "motion/react";

interface FriendlyCharacterProps {
  message: string;
  position?: "left" | "right";
  variant?: "happy" | "excited" | "waving";
}

export function FriendlyCharacter({ 
  message, 
  position = "left",
  variant = "happy" 
}: FriendlyCharacterProps) {
  const characterVariants = {
    happy: (
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <motion.ellipse 
          cx="60" 
          cy="90" 
          rx="35" 
          ry="40" 
          fill="#10b981"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Head */}
        <motion.circle 
          cx="60" 
          cy="40" 
          r="30" 
          fill="#10b981"
          animate={{ 
            y: [0, -3, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Eyes */}
        <motion.g
          animate={{ 
            scaleY: [1, 0.1, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        >
          <circle cx="50" cy="35" r="4" fill="#1f2937" />
          <circle cx="70" cy="35" r="4" fill="#1f2937" />
        </motion.g>
        
        {/* Smile */}
        <path 
          d="M 48 45 Q 60 52 72 45" 
          stroke="#1f2937" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Arms */}
        <motion.path 
          d="M 30 80 Q 15 85 20 100" 
          stroke="#059669" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
          animate={{ 
            rotate: [0, -10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: "30px", originY: "80px" }}
        />
        <motion.path 
          d="M 90 80 Q 105 85 100 100" 
          stroke="#059669" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
          animate={{ 
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: "90px", originY: "80px" }}
        />
        
        {/* Sparkles */}
        <motion.g
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <circle cx="25" cy="40" r="2" fill="#fbbf24" />
          <circle cx="95" cy="40" r="2" fill="#fbbf24" />
          <circle cx="60" cy="15" r="2" fill="#fbbf24" />
        </motion.g>
      </svg>
    ),
    excited: (
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <motion.ellipse 
          cx="60" 
          cy="90" 
          rx="35" 
          ry="40" 
          fill="#f59e0b"
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Head */}
        <motion.circle 
          cx="60" 
          cy="40" 
          r="30" 
          fill="#f59e0b"
          animate={{ 
            y: [0, -5, 0],
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Eyes (excited) */}
        <circle cx="50" cy="35" r="5" fill="#1f2937" />
        <circle cx="70" cy="35" r="5" fill="#1f2937" />
        <circle cx="52" cy="33" r="2" fill="#fff" />
        <circle cx="72" cy="33" r="2" fill="#fff" />
        
        {/* Big smile */}
        <path 
          d="M 45 45 Q 60 55 75 45" 
          stroke="#1f2937" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Arms raised */}
        <motion.path 
          d="M 30 75 Q 20 65 15 55" 
          stroke="#dc2626" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
          animate={{ 
            rotate: [0, -15, 0],
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: "30px", originY: "75px" }}
        />
        <motion.path 
          d="M 90 75 Q 100 65 105 55" 
          stroke="#dc2626" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
          animate={{ 
            rotate: [0, 15, 0],
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: "90px", originY: "75px" }}
        />
        
        {/* Energy sparkles */}
        <motion.g
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            staggerChildren: 0.1
          }}
        >
          <circle cx="20" cy="35" r="3" fill="#ef4444" />
          <circle cx="100" cy="35" r="3" fill="#ef4444" />
          <circle cx="60" cy="10" r="3" fill="#fbbf24" />
          <circle cx="30" cy="20" r="2" fill="#3b82f6" />
          <circle cx="90" cy="20" r="2" fill="#3b82f6" />
        </motion.g>
      </svg>
    ),
    waving: (
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="60" cy="90" rx="35" ry="40" fill="#3b82f6" />
        
        {/* Head */}
        <motion.circle 
          cx="60" 
          cy="40" 
          r="30" 
          fill="#3b82f6"
          animate={{ 
            rotate: [0, 5, -5, 0],
          }}
          transition={{ 
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: "60px", originY: "70px" }}
        />
        
        {/* Eyes */}
        <circle cx="50" cy="36" r="4" fill="#1f2937" />
        <circle cx="70" cy="36" r="4" fill="#1f2937" />
        <path 
          d="M 46 32 Q 50 28 54 32" 
          stroke="#1f2937" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round"
        />
        <path 
          d="M 66 32 Q 70 28 74 32" 
          stroke="#1f2937" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Friendly smile */}
        <path 
          d="M 48 48 Q 60 54 72 48" 
          stroke="#1f2937" 
          strokeWidth="2.5" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Left arm (normal) */}
        <path 
          d="M 30 80 Q 20 90 25 100" 
          stroke="#1e40af" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Right arm (waving) */}
        <motion.path 
          d="M 90 75 Q 110 65 115 50" 
          stroke="#1e40af" 
          strokeWidth="6" 
          fill="none" 
          strokeLinecap="round"
          animate={{ 
            rotate: [0, -25, 0, -25, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ originX: "90px", originY: "75px" }}
        />
        
        {/* Sparkles */}
        <motion.g
          animate={{ 
            opacity: [0, 1, 0],
            x: [0, 10, 20],
            y: [0, -5, -10],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        >
          <circle cx="110" cy="45" r="2" fill="#fbbf24" />
          <circle cx="115" cy="40" r="1.5" fill="#fbbf24" />
        </motion.g>
      </svg>
    ),
  };

  return (
    <div className={`relative ${position === "right" ? "flex-row-reverse" : "flex-row"} flex items-end gap-3`}>
      {/* Character */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {characterVariants[variant]}
      </motion.div>
      
      {/* Speech bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className={`relative bg-white rounded-2xl shadow-lg px-4 py-3 max-w-xs ${
          position === "right" ? "mr-2" : "ml-2"
        }`}
      >
        <p className="text-sm text-gray-700">{message}</p>
        {/* Speech bubble tail */}
        <div 
          className={`absolute bottom-4 ${
            position === "right" ? "right-[-8px]" : "left-[-8px]"
          } w-0 h-0`}
          style={{
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            ...(position === "right" 
              ? { borderLeft: "8px solid white" }
              : { borderRight: "8px solid white" }
            )
          }}
        />
      </motion.div>
    </div>
  );
}
