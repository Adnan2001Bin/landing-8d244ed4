import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/Home';
import { ThemeProvider } from './components/ThemeProvider';
import { SmoothScroll } from './components/SmoothScroll';

function App() {
    return (
        <HelmetProvider data-jc-id="UDVGFD">
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme" data-jc-id="UDVGCS">
                <SmoothScroll data-jc-id="UDVFNR"/>
                <Router data-jc-id="UDVFL2">
                    <Routes data-jc-id="UDVF0E">
                        <Route path="/" element={<Home />} data-jc-id="UDVEX4"/>
                        {/* Add more routes here as needed */}
                    </Routes>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    )
}

export default App
