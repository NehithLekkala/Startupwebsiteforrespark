import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    name: "Redmi Note 10 Pro",
    condition: "Excellent",
    price: "₹8,999",
    originalPrice: "₹15,999",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1760531953684-769354b5ebb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjBzbWFydHBob25lJTIwYW5kcm9pZHxlbnwxfHx8fDE3NjI3NzMzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "boAt Airdopes 131",
    condition: "Like New",
    price: "₹999",
    originalPrice: "₹2,490",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzYyNzczMDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Mi Smart Band 5",
    condition: "Very Good",
    price: "₹1,499",
    originalPrice: "₹2,999",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1665860455418-017fa50d29bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tlciUyMHNtYXJ0d2F0Y2h8ZW58MXx8fHwxNzYyNzczMzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "JBL Go 2 Speaker",
    condition: "Excellent",
    price: "₹1,999",
    originalPrice: "₹3,499",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1674303324806-7018a739ed11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMGJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MXx8fHwxNzYyNzczMzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Mi 10000mAh Power Bank",
    condition: "Like New",
    price: "₹799",
    originalPrice: "₹1,499",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1760708825913-65a50b3dc39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmslMjBjaGFyZ2VyfGVufDF8fHx8MTc2Mjc1OTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Lenovo Tab M8",
    condition: "Very Good",
    price: "₹5,999",
    originalPrice: "₹12,990",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1738737271801-d404a575d870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjB0YWJsZXQlMjBkZXZpY2V8ZW58MXx8fHwxNzYyNzczMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Marketplace() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">
              Featured Marketplace
            </h2>
            <p className="text-xl text-gray-600">
              Quality refurbished devices at amazing prices. All tested and certified.
            </p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden hover:shadow-xl hover:shadow-emerald-100 transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg">
                    {product.condition}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md">
                      View Details
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
              View All Products
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
