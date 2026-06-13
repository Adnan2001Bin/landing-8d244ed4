import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen pt-20 overflow-hidden bg-white dark:bg-gray-950 transition-colors perspective-1000" data-jc-id="WHWOQ4">
            {/* 3D Grid Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" data-jc-id="WHWQ5S">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]" data-jc-id="WHWQCW"></div>

                {/* 3D Floating Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-500/20 dark:bg-primary-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob" data-jc-id="WHWTY1"/>
                <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-emerald-500/20 dark:bg-emerald-500/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" data-jc-id="CZKGSI"/>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-20 md:pb-32" data-jc-id="CZKIVH">
                <div className="text-center max-w-4xl mx-auto" data-jc-id="CZKJNP">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    data-jc-id="CZKKEI">
                        <span className="inline-flex items-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300 border border-primary-200 dark:border-primary-800 backdrop-blur-sm" data-jc-id="CZKLYG">
                            ✨ Now with AI-powered product descriptions
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    data-jc-id="CZL553">
                        Launch Your
                        <span className="block sm:inline bg-gradient-to-r from-primary-600 to-emerald-600 dark:from-primary-400 dark:to-emerald-400 bg-clip-text text-transparent px-2" data-jc-id="CZL86F">
                            Online Store
                        </span>
                        in Minutes
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} data-jc-id="CZLQN7">Build beautiful e-commerce stores without coding. Choose a template, customize it, and start selling today.asdfe aerer</motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    data-jc-id="CZLV48">
                        <a
                            href="https://dashboard.buildshipping.com/signup"
                            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all transform  w-full sm:w-auto"
                        data-jc-id="CZLXFV">
                            Get Started Free
                        </a>
                        <button
                            onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-800 px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-750 hover:text-primary-600 dark:hover:text-primary-400 transition-all w-full sm:w-auto"
                        data-jc-id="CZMGO0">
                            View Templates
                        </button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.p
                        className="mt-6 md:mt-8 text-sm text-gray-500 dark:text-gray-400 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    data-jc-id="CZN1H5">
                        Trusted by 1,000+ merchants • No credit card required
                    </motion.p>
                </div>

                {/* Dashboard Preview with 3D Tilt Effect */}
                <motion.div
                    className="mt-12 md:mt-16 relative max-w-5xl mx-auto perspective-1000"
                    initial={{ opacity: 0, y: 40, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                data-jc-id="CZN58E">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform transition-transform hover:scale-[1.01] duration-500" data-jc-id="CZNNNK">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                            alt="Dashboard Preview"
                            className="w-full h-auto"
                        data-jc-id="CZNP6J"/>
                    </div>

                    {/* Floating Elements - Responsive positioning */}
                    <div className="absolute -left-4 md:-left-8 top-1/4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 md:p-4 hidden sm:block border border-gray-100 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3s' }} data-jc-id="CZNS64">
                        <div className="flex items-center gap-3" data-jc-id="CZNU99">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center" data-jc-id="CZNUFB">
                                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary-600 dark:text-primary-400" data-jc-id="CZOBDT"/>
                            </div>
                            <div data-jc-id="CZOC8R">
                                <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white" data-jc-id="CZOCU9">New Order!</p>
                                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400" data-jc-id="CZODNH">$127.00</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
