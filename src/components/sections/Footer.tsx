import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors" data-jc-id="4PN5RN">
            <div className="container mx-auto px-4 lg:px-8" data-jc-id="4PN4Y6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12" data-jc-id="4PN4A6">
                    <div className="col-span-2 lg:col-span-2" data-jc-id="4PN3JJ">
                        <Link to="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-4" data-jc-id="4PN3E5">
                            <Logo className="h-8 w-8" data-jc-id="4PN21A"/>
                            <span className="text-xl font-bold dark:text-white" data-jc-id="4PN1WR">Build Shipping</span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 max-w-sm mb-6" data-jc-id="4PN0KR">
                            The easiest way to build and launch your online store.
                            Start selling to the world today.
                        </p>
                        <div className="flex gap-4" data-jc-id="40PWTF">
                            {/* Social placeholders */}
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" data-jc-id="40PVJ2"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" data-jc-id="40PUSA"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700" data-jc-id="40PU1I"></div>
                        </div>
                    </div>

                    <div data-jc-id="40PT5Q">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4" data-jc-id="40PSL1">Product</h4>
                        <ul className="space-y-2" data-jc-id="40PRU9">
                            <li data-jc-id="40PRP7"><Link to="/templates" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40PRP3">Templates</Link></li>
                            <li data-jc-id="40PQAB"><Link to="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40PQ9M">Pricing</Link></li>
                            <li data-jc-id="40P9AY"><Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40P9A9">Features</Link></li>
                        </ul>
                    </div>

                    <div data-jc-id="40P7R5">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4" data-jc-id="40P7OJ">Company</h4>
                        <ul className="space-y-2" data-jc-id="40P6XR">
                            <li data-jc-id="40P6AM"><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40P6AI">About</Link></li>
                            <li data-jc-id="40P5EM"><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40P5EI">Blog</Link></li>
                            <li data-jc-id="40P40L"><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40P3ZW">Careers</Link></li>
                        </ul>
                    </div>

                    <div data-jc-id="40OMW9">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4" data-jc-id="40OMBK">Support</h4>
                        <ul className="space-y-2" data-jc-id="40OLKS">
                            <li data-jc-id="40OLFQ"><Link to="/help" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40OLFM">Help Center</Link></li>
                            <li data-jc-id="40OK0X"><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40OK0T">Contact Us</Link></li>
                            <li data-jc-id="40OIM2"><Link to="/status" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40OILY">Status</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4" data-jc-id="40OH18">
                    <p className="text-sm text-gray-500 dark:text-gray-400" data-jc-id="40OG67">
                        © {new Date().getFullYear()} Build Shipping. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400" data-jc-id="40NZ4Y">
                        <Link to="/privacy" className="hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40NYEE">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary-600 dark:hover:text-primary-500" data-jc-id="40NX31">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
