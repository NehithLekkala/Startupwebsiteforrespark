import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { WalleRobotCTA } from "./WalleRobotCTA";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">Join the Green Tech Movement</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl mb-6">
              Ready to ReSpark Your Tech?
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              Join thousands of users Recycling, repairing, buying and selling electronics sustainably. 
              Start your journey towards a greener future today.
            </p>
          </motion.div>
          
          {/* WALL-E Robot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <WalleRobotCTA />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 shadow-xl">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="border-2 border-white text-[rgb(128,94,94)] hover:bg-white/10 backdrop-blur-sm">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
