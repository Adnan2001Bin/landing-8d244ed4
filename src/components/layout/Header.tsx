import { useState } from 'react';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors" data-jc-id="JOINKB">
            <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-4" data-jc-id="JOIOH2">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                data-jc-id="JOIPSK">
                    <Logo className="h-8 w-8" data-jc-id="T60R7Z"/>
                    <span className="text-xl font-bold tracking-tight dark:text-white" data-jc-id="T60R3O">Build Shipping</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8" data-jc-id="T60PO6">
                    <button onClick={() => scrollToSection('templates')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors" data-jc-id="T60OZZ">
                        Templates
                    </button>
                    <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors" data-jc-id="T60NCF">
                        Pricing
                    </button>
                    <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors" data-jc-id="T60L6B">
                        About
                    </button>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4" data-jc-id="T603BR">
                    <div className="flex items-center justify-center" data-jc-id="T602NK">
                        <ThemeToggle data-jc-id="T601YP"/>
                    </div>
                    <a
                        href="https://dashboard.buildshipping.com/login"
                        className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                    data-jc-id="T601AQ">
                        Log In
                    </a>
                    <a
                        href="https://dashboard.buildshipping.com/signup"
                        className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                    data-jc-id="T5ZYZU">
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden" data-jc-id="T5ZFO1">
                    <ThemeToggle data-jc-id="T5ZEZ9"/>
                    <button
                        className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    data-jc-id="T5ZEWH">
                        {isMenuOpen ? <X className="h-6 w-6" data-jc-id="T5ZCS1"/> : <Menu className="h-6 w-6" data-jc-id="T5ZCPI"/>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 p-4 space-y-4" data-jc-id="T5ZB9N">
                    <button onClick={() => scrollToSection('templates')} className="block w-full text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600" data-jc-id="T5YUV2">
                        Templates
                    </button>
                    <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600" data-jc-id="T5YSR6">
                        Pricing
                    </button>
                    <button onClick={() => scrollToSection('about')} className="block w-full text-left text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600" data-jc-id="T5YR5H">
                        About
                    </button>
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3" data-jc-id="T5YP1T">
                        <a href="https://dashboard.buildshipping.com/login" className="block text-center text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600" data-jc-id="T5YOA5">
                            Log In
                        </a>
                        <a href="https://dashboard.buildshipping.com/signup" className="block text-center rounded-full bg-primary-600 px-4 py-2 text-base font-medium text-white hover:bg-primary-700" data-jc-id="T5Y73T">
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
