import Header from './components/navbar/Navbar';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Interest from './screens/Interest';
import Purpose from './screens/Purpose'
import Values from './screens/Values';

function App() {
    return (
        <>
            <Header />
            <Home />
            <Purpose />
            <Values />
            <Interest />
            <Contact />
        </>
    );
}

export default App;
