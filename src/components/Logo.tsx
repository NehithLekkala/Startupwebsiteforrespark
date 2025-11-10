import { WalleIcon } from "./WalleIcon";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: { container: "w-8 h-8", svg: "w-8 h-8" },
    md: { container: "w-10 h-10", svg: "w-10 h-10" },
    lg: { container: "w-16 h-16", svg: "w-16 h-16" }
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizeClasses[size].container} relative`}>
        <svg
          viewBox="0 0 100 100"
          className={`${sizeClasses[size].svg}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          {/* Outer circular frame - Recycle symbol integrated */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="3"
            strokeDasharray="8 4"
            opacity="0.3"
          />
          
          {/* Main circle background */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="url(#logoGradient)"
          />
          
          {/* Lightning bolt (Electricity) - centered */}
          <path
            d="M 55 20 L 40 50 L 48 50 L 45 80 L 65 45 L 55 45 Z"
            fill="url(#accentGradient)"
            stroke="#fef3c7"
            strokeWidth="1"
          />
          
          {/* Leaf (Nature) - bottom left */}
          <path
            d="M 25 65 Q 20 70 25 75 Q 30 70 25 65 M 25 65 Q 28 70 25 75"
            fill="#d1fae5"
            stroke="#a7f3d0"
            strokeWidth="1.5"
          />
          
          {/* Rupee sign (Money) - top right */}
          <g transform="translate(68, 25)">
            {/* Rupee symbol ₹ */}
            <path
              d="M -2 2 L 5 2 M -2 5 L 5 5 M 2 2 L 2 5 Q 2 8 4 10 L 6 14"
              fill="none"
              stroke="#dcfce7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          
          {/* Recycle arrows (Recycling) - bottom right, subtle */}
          <g transform="translate(68, 70) scale(0.35)">
            <path
              d="M 0 0 L -10 -15 L -5 -15 L -5 -25 L 5 -15 L -2 -15 L 8 0 Z"
              fill="#d1fae5"
              opacity="0.8"
            />
          </g>
          
          {/* Central sparkle/star accent */}
          <circle cx="50" cy="50" r="2" fill="#fef3c7" opacity="0.6" />
          <circle cx="42" cy="42" r="1.5" fill="#fef3c7" opacity="0.4" />
          <circle cx="58" cy="38" r="1" fill="#fef3c7" opacity="0.5" />
        </svg>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-20 -z-10"></div>
      </div>
      {showText && (
        <div className="flex items-center gap-2">
          <span className={`${textSizes[size]}`}>ReSpark</span>
          <WalleIcon />
        </div>
      )}
    </div>
  );
}
