import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ModulesPage from './pages/ModulesPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ModulesPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
