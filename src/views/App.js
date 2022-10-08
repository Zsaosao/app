import { BrowserRouter } from 'react-router-dom';
import '~/style/styleGlobal.scss';
import Nav from './nav/Nav';
import Router from '~/router/Router';
function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Router />
        </BrowserRouter>
    );
}
export default App;
