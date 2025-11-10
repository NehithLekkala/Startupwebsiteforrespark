import { motion } from "motion/react";
import { TrendingUp, Users, Leaf, Heart } from "lucide-react";

const stats = [
  { value: "50K+", label: "Devices Sold", icon: TrendingUp, color: "from-blue-400 to-cyan-400" },
  { value: "15K+", label: "Happy Customers", icon: Users, color: "from-emerald-400 to-teal-400" },
  { value: "30 Tons", label: "E-Waste Recycled", icon: Leaf, color: "from-green-400 to-lime-400" },
  { value: "98%", label: "Satisfaction Rate", icon: Heart, color: "from-orange-400 to-amber-400" }
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-3"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
                <motion.div 
                  className="text-4xl lg:text-5xl text-white mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-emerald-100">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
