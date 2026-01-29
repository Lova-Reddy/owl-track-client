import { createContext, useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for token in storage on load
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                // Check expiry if needed
                // if (decoded.exp * 1000 < Date.now()) throw new Error('Expired');
                setUser(decoded);
            } catch (error) {
                console.error("Invalid token:", error);
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock login for now since backend URL is not provided/setup fully yet
        // In real app: const res = await axios.post('/api/auth/login', { email, password });
        // const { token } = res.data;

        // Simulating a successful login with a fake token
        // This is a minimal valid JWT structure for testing
        // You can replace this with a real API call later

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    // Create a dummy token (mimicking a real one)
                    // We can't easily sign a real JWT on client without a library that does signing (jwt-decode only decodes)
                    // So for this mock, we'll just set a dummy user object directly and pretend we stored a token.
                    // WHEN CONNECTING TO REAL BACKEND: Use the token from response.

                    const mockUser = {
                        id: '123',
                        name: 'Test User',
                        email: email
                    };

                    // For now, we just save a flag or a dummy string as token if we aren't really hitting a server
                    // But to satisfy "implement JWT", ideally we receive it from server.
                    // We will set user state directly for now.

                    setUser(mockUser);
                    localStorage.setItem('token', 'mock-jwt-token-val');
                    resolve(mockUser);
                } else {
                    reject(new Error("Invalid credentials"));
                }
            }, 800);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    const value = {
        user,
        loading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
