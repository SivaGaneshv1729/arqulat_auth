import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import MainLogin from './pages/MainLogin';
import LocalLogin from './pages/LocalLogin';
import LocalRegister from './pages/LocalRegister';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLogin />} />
                    <Route path="/login" element={<LocalLogin />} />
                    <Route path="/register" element={<LocalRegister />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
