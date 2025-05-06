import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from './Logo';

export default function LeftPanel({
  email,
  password,
  error,
  loading,
  setEmail,
  setPassword,
  togglePasswordVisibility,
  showPassword,
  handleLogin,
}: {
  email: string;
  password: string;
  error: string;
  loading: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  togglePasswordVisibility: () => void;
  showPassword: boolean;
  handleLogin: () => void;
}) {
  return (
    <div className="w-full md:w-1/2 bg-black text-white px-12 py-16 md:px-24 md:py-32 flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <Logo /> {/* Use the new Logo component */}
        </div>

        <h1 className="text-[40px] font-inter font-medium mb-6">Welcome back to Room.me!</h1>
        <p className="text-[20px] font-inter font-regular mb-6">
          Room.me is an innovative video conference product that revolutionizes virtual meetings.
        </p>

        <div className="flex flex-col gap-6">
          <label htmlFor="email" className="text-[22px] font-inter font-medium">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <label htmlFor="password" className="text-[22px] font-inter font-medium">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="bg-gray-800 text-white p-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-200"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 transition-colors w-full mt-8 p-4 rounded-md text-white font-semibold"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

        <button
          className="bg-white text-black w-full mt-6 p-4 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-200"
        >
          <img src="/Google svg.png" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>
      </div>

      <div className="mt-10">
        <div className="flex justify-between items-center text-sm text-gray-300">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-500" />
            Remember for 30 days
          </label>
          <a href="#" className="text-purple-400 hover:underline">Forgot password</a>
        </div>

        <p className="mt-8 text-sm text-gray-300">
          Don’t have an account? <a href="#" className="underline text-white font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
}
