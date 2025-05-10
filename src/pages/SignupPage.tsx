import { useNavigate } from "react-router-dom";
import { getMediaUrl } from "../services/payloadService";

const SignupPage = () => {
  const navigate = useNavigate();
  const backgroundImageUrl = getMediaUrl("login-image.png");

  return (
    <div className="min-h-screen flex">
      {/* Left Image */}
      <div
        className="w-1/2 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* Right Notice */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 text-center">
        <h1 className="text-2xl font-bold text-green-900 mb-4">Sign up</h1>
        <p className="text-sm text-gray-600 mb-4 max-w-sm">
          Signup is currently disabled for this site. Please contact an administrator to create your account.
        </p>

        <button className="text-sm text-green-900 font-medium hover:underline" onClick={() => navigate("/")}>
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
