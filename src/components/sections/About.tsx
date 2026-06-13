import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors" data-jc-id="4APCCU">
            <div className="container mx-auto px-4 lg:px-8" data-jc-id="8UEMML">
                <div className="grid md:grid-cols-2 gap-16 items-center" data-jc-id="8UELZ6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    data-jc-id="8UELA8">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white" data-jc-id="8UEJ35">Empowering Entrepreneurs Everywhere</h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed" data-jc-id="8UEI9U">
                            At Build Shipping, we believe that starting an online business should be accessible to everyone.
                            Our mission is to remove the technical barriers to entry and provide powerful tools that help
                            merchants succeed in the digital economy.
                        </p>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed" data-jc-id="9XULAY">
                            Founded in 2023, we've helped over 1,000 merchants launch their dream stores.
                            We're a team of passionate developers, designers, and e-commerce experts dedicated to your success.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-8" data-jc-id="9XUNP3">
                            <div data-jc-id="9XUODX">
                                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400" data-jc-id="9XUOGR">1k+</p>
                                <p className="text-gray-600 dark:text-gray-400 mt-1" data-jc-id="9XUPR3">Active Merchants</p>
                            </div>
                            <div data-jc-id="9XUQL7">
                                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400" data-jc-id="9XUQOM">$10M+</p>
                                <p className="text-gray-600 dark:text-gray-400 mt-1" data-jc-id="9XV70X">GMV Processed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    data-jc-id="9XV8I8">
                        <div className="aspect-square rounded-2xl overflow-hidden relative z-10" data-jc-id="9XVBAZ">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            data-jc-id="9XVC1R"/>
                        </div>
                        {/* Decorative blob behind image */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob" data-jc-id="9XVULY"/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
