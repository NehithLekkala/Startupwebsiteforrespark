import { Button } from "./ui/button";
import { Menu, User } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { motion } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo size="md" showText={true} />
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[rgb(235,119,50)] hover:text-orange-600 transition-colors relative group font-bold underline">
              Repair
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[rgb(50,174,50)] hover:text-blue-600 transition-colors relative group font-bold underline">
              Recycle
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[rgb(9,100,246)] hover:text-emerald-600 transition-colors relative group font-bold underline">
              Buy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[rgb(0,94,251)] hover:text-teal-600 transition-colors relative group font-bold underline">
              Sell
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors relative group font-bold underline">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4 relative">
            {/* Small character pointing to Sign In */}
            <div className="absolute -top-16 right-32 hidden lg:block">
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg px-3 py-1.5 shadow-md"
                >
                  <p className="text-xs text-blue-700 whitespace-nowrap">👤 Sign in here!</p>
                </motion.div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-cyan-100"></div>
              </div>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md">
                List Device
              </Button>
            </motion.div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-orange-600">Repair</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Recycle</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Buy</a>
              <a href="#" className="text-gray-700 hover:text-teal-600">Sell</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" className="w-full gap-2">
                  <User className="w-4 h-4" />
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  List Device
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
