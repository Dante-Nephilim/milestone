import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div
        className="w-1/2 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url(https://via.placeholder.com/600x800?text=Login+Image)" }}
      />

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <h1 className="text-2xl font-bold text-green-900 mb-6">Log in</h1>

        <button
          className="w-full max-w-sm border rounded-md py-2 mb-3 flex items-center justify-center gap-2 shadow-sm"
          onClick={() => navigate("/onboarding")}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Sign in with Google
        </button>

        <button
          className="w-full max-w-sm border rounded-md py-2 mb-3 flex items-center justify-center gap-2 shadow-sm"
          onClick={() => navigate("/onboarding")}
        >
          <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-5 h-5" />
          Sign in with Apple
        </button>

        <div className="w-full max-w-sm text-center text-sm text-gray-500 my-3">or</div>

        <input type="email" placeholder="Email" className="w-full max-w-sm border rounded-md px-3 py-2 mb-2" />
        <input type="password" placeholder="Password" className="w-full max-w-sm border rounded-md px-3 py-2 mb-2" />

        <div className="w-full max-w-sm flex justify-between text-xs text-gray-500 mb-4">
          <span></span>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password? Reset
          </a>
        </div>

        <div className="w-full max-w-sm flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-700">Remember me</label>
        </div>

        <button
          className="w-full max-w-sm bg-green-900 text-white py-2 rounded-md hover:bg-green-800 mb-3"
          onClick={() => navigate("/onboarding")}
        >
          Log In
        </button>

        <p className="text-sm text-gray-600">
          Don’t have account?{" "}
          <a href="#" className="text-green-900 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
