'use client'; // Ensure this file is treated as a client-side component
import { useRouter } from 'next/navigation';
import useLoginStore from '../../store/loginStore';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, logout } = useLoginStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout(); // Clear session using Zustand store
    localStorage.removeItem('isAuthenticated');
    router.push('/'); // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <h1 className="text-2xl font-bold mb-4">Welcome, you’re logged in.</h1>
      <button
        onClick={handleLogout}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold"
      >
        Logout
      </button>
    </div>
  );
}