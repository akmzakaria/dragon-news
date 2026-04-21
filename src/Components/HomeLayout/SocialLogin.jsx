import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-lg">Login With</h2>
      <div className="space-y-3 md:space-y-5">
        <button className="btn btn-secondary btn-outline w-full text-sm md:text-base">
          <FcGoogle size={20} />
          Login with Google
        </button>
        <button className="btn btn-primary btn-outline w-full text-sm md:text-base">
          <FaGithub size={20} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
