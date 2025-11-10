import { ShoppingCart, IndianRupee, Wrench, Recycle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

const features = [
  {
    icon: Wrench,
    title: "Expert Repairs",
    description: "Professional repair services for all major brands. Fast turnaround, quality guaranteed.",
    color: "text-orange-600",
    bgColor: "bg-gradient-to-br from-orange-100 to-amber-100",
    borderColor: "border-orange-200",
    hoverShadow: "hover:shadow-orange-200/50",
    featured: false
  },
  {
    icon: Recycle,
    title: "Eco Recycling",
    description: "Responsible recycling of electronics that can't be repaired. Protect the planet.",
    color: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-100 to-lime-100",
    borderColor: "border-green-200",
    hoverShadow: "hover:shadow-green-200/50",
    featured: true
  },
  {
    icon: ShoppingCart,
    title: "Buy Used Gadgets",
    description: "Browse thousands of quality-checked refurbished electronics at unbeatable prices.",
    color: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
    borderColor: "border-blue-200",
    hoverShadow: "hover:shadow-blue-200/50",
    featured: false
  },
  {
    icon: IndianRupee,
    title: "Sell Your Devices",
    description: "Get instant quotes for your old devices and turn unused gadgets into cash quickly.",
    color: "text-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-100 to-teal-100",
    borderColor: "border-emerald-200",
    hoverShadow: "hover:shadow-emerald-200/50",
    featured: false
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">
              Everything You Need for Electronics
            </h2>
            <p className="text-xl text-gray-600">
              A complete ecosystem for buying, selling, repairing, and recycling your tech devices
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className={`border-2 ${feature.borderColor} ${feature.hoverShadow} hover:shadow-xl transition-all duration-300 ${feature.featured ? 'ring-2 ring-green-400 ring-offset-2 shadow-lg' : ''}`}>
                  <CardHeader>
                    {feature.featured && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs shadow-md">
                        ⭐ Priority
                      </div>
                    )}
                    <motion.div 
                      className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 ${feature.featured ? 'ring-2 ring-green-300' : ''}`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </motion.div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
