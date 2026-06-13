import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        data-jc-id="QMCGLO">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-600 dark:text-gray-400" data-jc-id="QMCIPL"/>
            <Moon className="absolute h-5 w-5 rotate-90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-600 dark:text-gray-400" data-jc-id="QMCJJN"/>
            <span className="sr-only" data-jc-id="QMCL0Y">Toggle theme</span>
        </button>
    );
}
