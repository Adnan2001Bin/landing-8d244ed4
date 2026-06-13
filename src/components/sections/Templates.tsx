import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const templates = [
    {
        id: 1,
        name: 'Modern Fashion',
        category: 'Clothing',
        image: 'bg-rose-100 dark:bg-rose-900/20',
        color: 'text-rose-600 dark:text-rose-400',
    },
    {
        id: 2,
        name: 'Tech Gadgets',
        category: 'Electronics',
        image: 'bg-blue-100 dark:bg-blue-900/20',
        color: 'text-blue-600 dark:text-blue-400',
    },
];

export function Templates() {
    return (
        <section id="templates" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors" data-jc-id="DX97P2">
            <div className="container mx-auto px-4 lg:px-8" data-jc-id="DX96YB">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-jc-id="DX96AB">
                    <div className="max-w-2xl" data-jc-id="DX95JJ">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white" data-jc-id="DX95F5">Stunning Templates</h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300" data-jc-id="5GBZ6E">
                            Start with a professionally designed template and customize it to fit your brand.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    data-jc-id="5GBXKN">
                        View all templates <ArrowRight className="w-5 h-5" data-jc-id="5GBVDB"/>
                    </a>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto" data-jc-id="5GBULX">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        data-jc-id="5GBTRM">
                            <div className="aspect-[3/4] rounded-2xl mb-4 overflow-hidden relative" data-jc-id="5GBAMT">
                                <img
                                    src={template.id === 1
                                        ? "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000"
                                        : "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    }
                                    alt={template.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                data-jc-id="5GB9VD"/>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" data-jc-id="5GAP30"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" data-jc-id="5GAOAI">
                                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all" data-jc-id="5GAMWM">
                                        Preview
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white" data-jc-id="5GAJYT">{template.name}</h3>
                            <p className={`text-sm font-medium ${template.color}`} data-jc-id="5GAJ75">{template.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
