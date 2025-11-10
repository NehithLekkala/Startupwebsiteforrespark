import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Recycle, Smartphone, Wrench, Sparkles } from "lucide-react";
import { WalleRobot } from "./WalleRobot";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 py-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-4 py-2 rounded-full border border-emerald-200"
            >
              <Recycle className="w-4 h-4" />
              <span className="text-sm">Sustainable Electronics</span>
              <Sparkles className="w-3 h-3 text-amber-500" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-6xl text-gray-900"
            >
              Give Your Gadgets a <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Second Life</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-xl"
            >
              Repair, recycle, buy, and sell electronics. Join the sustainable tech revolution with ReSpark.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              {/* WALL-E Robot */}
              <div className="mb-6">
                <WalleRobot />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-200">
                    <Recycle className="w-5 h-5 mr-2" />
                    Recycle Now
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    Browse Gadgets
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600">10k+ Devices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Wrench className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-sm text-gray-600">Expert Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Recycle className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm text-gray-600">Eco-Friendly</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-2xl blur-2xl opacity-30"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 rounded-2xl blur-xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1646821804389-9778ce2a4fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpciUyMHJlZnVyYmlzaG1lbnR8ZW58MXx8fHwxNzYwNzkzMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Electronics repair"
              className="relative rounded-2xl shadow-2xl w-full ring-4 ring-white/50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
