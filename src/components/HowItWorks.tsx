import { Search, CheckCircle2, Package, Zap } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Search,
    title: "Browse or List",
    description: "Search for gadgets you need or list your device with photos and details",
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: CheckCircle2,
    title: "Quality Check",
    description: "All devices are verified and tested by our expert technicians",
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-100"
  },
  {
    icon: Package,
    title: "Secure Transaction",
    description: "Safe payment processing and insured shipping for peace of mind",
    color: "from-orange-600 to-amber-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your device quickly or receive payment within 24 hours",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-100"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, secure, and sustainable. Get started in just 4 easy steps.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div 
                      className={`absolute -top-2 -right-2 w-8 h-8 ${step.bgColor} text-gray-700 rounded-full flex items-center justify-center shadow-md`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                  <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <motion.div 
                    className={`hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r ${step.color} opacity-30`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    style={{ originX: 0 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
