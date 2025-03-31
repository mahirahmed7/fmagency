'use client';

import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsVisible(false), 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0A0A] transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              animation: 'gridFloat 10s linear infinite',
              opacity: 0.2
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.4), rgba(10, 10, 10, 0.1))',
              filter: 'blur(100px)',
              animation: 'pulseGradient 2s ease-in-out infinite'
            }}
          />
        </div>

        {/* Logo Animation */}
        <div className="relative mb-8 transform-gpu">
          <div className="relative">
            <div className="w-32 h-32 relative animate-logoFloat">
              <img
                src="/images/logos/logonew.png"
                alt="FM Agency"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full scale-150 animate-pulse" />
            </div>
            <div className="absolute -inset-4 bg-secondary/10 blur-xl rounded-full animate-pulse" />
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="mt-4 text-secondary font-medium tracking-wider animate-pulse">
          LOADING
        </div>
      </div>

      {/* Add keyframes and animations */}
      <style jsx global>{`
        @keyframes gridFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
        }

        @keyframes pulseGradient {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }

        @keyframes logoFloat {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-logoFloat {
          animation: logoFloat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen; 