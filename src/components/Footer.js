import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <p className="mt-10 text-center text-sm text-gray-500">
        Üye değil misiniz?{" "}
        <a
          href="#"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          14 günlük ücretsiz deneme başlatın
        </a>
      </p>
    </div>
  );
};

export default Footer;
