import { Routes, Route } from 'react-router-dom';
import Home from '~/components/Home';
import News from '~/components/News';
import Contact from '~/components/Contact';
import About from '~/components/About';
import ContactId from '~/components/ContactId';
function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/:id" element={<ContactId />} />
            <Route path="about" element={<About />} />
        </Routes>
    );
}

export default Router;
