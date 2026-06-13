import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '$0',
        description: 'Perfect for testing the waters.',
        features: ['1 Store', '10 Products', 'Basic Analytics', 'Standard Support'],
        cta: 'Start for Free',
        popular: false,
    },
    {
        name: 'Growth',
        price: '$29',
        description: 'Everything you need to grow your business.',
        features: ['3 Stores', 'Unlimited Products', 'Advanced Analytics', 'Priority Support', 'Custom Domain'],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Pro',
        price: '$79',
        description: 'Advanced features for scaling brands.',
        features: ['10 Stores', 'Unlimited Products', 'Custom Reports', '24/7 Phone Support', 'API Access', 'White Labeling'],
        cta: 'Contact Sales',
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white dark:bg-gray-950 transition-colors" data-jc-id="T2CH8I">
            <div className="container mx-auto px-4 lg:px-8" data-jc-id="T2CHZ5">
                <div className="text-center max-w-2xl mx-auto mb-16" data-jc-id="T2CI52">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white" data-jc-id="T2CITB">Simple, Transparent Pricing</h2>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300" data-jc-id="T2CJLP">
                        Choose the plan that's right for your business. No hidden fees.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto" data-jc-id="T2CLMW">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`relative p-8 rounded-2xl border flex flex-col h-full ${plan.popular
                                ? 'border-primary-500 shadow-xl shadow-primary-500/10 scale-105 z-10 bg-white dark:bg-gray-900'
                                : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        data-jc-id="T2CMGZ">
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium" data-jc-id="T2D7ZU">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white" data-jc-id="T2DA69">{plan.name}</h3>
                            <div className="mt-4 flex items-baseline gap-1" data-jc-id="T2DAXU">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white" data-jc-id="T2DR7G">{plan.price}</span>
                                <span className="text-gray-500 dark:text-gray-400" data-jc-id="T2DRZV">/month</span>
                            </div>
                            <p className="mt-4 text-gray-600 dark:text-gray-400" data-jc-id="T2DST5">{plan.description}</p>

                            <ul className="mt-8 space-y-4 mb-8" data-jc-id="T2DTKM">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3" data-jc-id="T2DUWV">
                                        <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" data-jc-id="T2DVMV"/>
                                        <span className="text-gray-600 dark:text-gray-300" data-jc-id="T2DWFZ">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-auto w-full py-3 px-6 rounded-xl font-semibold transition-all ${plan.popular
                                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500'
                                    }`}
                            data-jc-id="T2DXYC">
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
