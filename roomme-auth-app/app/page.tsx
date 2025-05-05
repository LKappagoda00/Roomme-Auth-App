'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useLoginStore from '../store/loginStore';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { email, password, error, loading, setEmail, setPassword, setError, setLoading, login } = useLoginStore();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    if (!email || !password) {
      setError('Both fields are required.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    console.log('Login attempt:', { email, password }); // Debugging
    if (!validateForm()) return;

    setLoading(true);
    const success = await login(email, password);
    console.log('Login success:', success); // Debugging
    console.log()
    if (success) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen font-sans">
      <LeftPanel
        email={email}
        password={password}
        error={error}
        loading={loading}
        setEmail={setEmail}
        setPassword={setPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        showPassword={showPassword}
        handleLogin={handleLogin}
      />
      <RightPanel />
    </div>
  );
}
