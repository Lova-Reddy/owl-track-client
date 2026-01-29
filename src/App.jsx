import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GlobalLayout from './components/GlobalLayout';
import ModulesPage from './pages/ModulesPage';
import TopicDetailsPage from './pages/TopicDetailsPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />

                    <Route path="/" element={
                        <ProtectedRoute>
                            <GlobalLayout>
                                <Layout />
                            </GlobalLayout>
                        </ProtectedRoute>
                    }>
                        <Route index element={<ModulesPage />} />
                    </Route>

                    {/* <Route path="/topic/:dayId" element={
                        <ProtectedRoute>
                            <GlobalLayout>
                                <TopicDetailsPage />
                            </GlobalLayout>
                        </ProtectedRoute>
                    } /> */}

                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <GlobalLayout>
                                <Dashboard />
                            </GlobalLayout>
                        </ProtectedRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
