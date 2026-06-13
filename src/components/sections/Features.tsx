import { motion } from 'framer-motion';
import { Palette, Package, CreditCard, BarChart, Truck, Smartphone } from 'lucide-react';

const features = [
    {
        icon: Palette,
        title: 'Beautiful Templates',
        description: 'Choose from professionally designed templates that you can customize to match your brand.',
    },
    {
        icon: Package,
        title: 'Product Management',
        description: 'Add products with variants, manage inventory, and organize with collections.',
    },
    {
        icon: CreditCard,
        title: 'Easy Checkout',
        description: 'Provide a seamless checkout experience with multiple payment options.',
    },
    {
        icon: BarChart,
        title: 'Analytics Dashboard',
        description: 'Track sales, orders, and customer behavior with real-time analytics.',
    },
    {
        icon: Truck,
        title: 'Shipping Integration',
        description: 'Configure shipping zones, rates, and free shipping thresholds.',
    },
    {
        icon: Smartphone,
        title: 'Mobile Responsive',
        description: 'Your store looks great on every device, from desktop to mobile.',
    },
];

export function Features() {
    return (
        <section className="py-24 bg-white dark:bg-gray-950 transition-colors" data-jc-id="Z959NE">
            <div className="container mx-auto px-4 lg:px-8" data-jc-id="Z95ACI">
                <div className="text-center max-w-2xl mx-auto" data-jc-id="Z95B0I">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white" data-jc-id="Z95B6I">Everything You Need to Sell</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300" data-jc-id="Z95BYB">
                        All the tools and features you need to run a successful online store.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-jc-id="Z95E09">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg hover:shadow-primary-50/50 dark:hover:shadow-primary-900/20 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        data-jc-id="Z95EV6">
                            <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-6" data-jc-id="Z95ZJ9">
                                <feature.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" data-jc-id="Z960E6"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white" data-jc-id="Z961QF">{feature.title}</h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed" data-jc-id="Z96I2O">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
