"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
  /** Minimum duration to show loader in ms (default: 1200) */
  minDuration?: number;
}

export default function PageLoader({ minDuration = 1200 }: PageLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Remove from DOM after fade out animation
      setTimeout(() => setVisible(false), 600);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!visible) return null;

  return (
    <div
      aria-label="Loading"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0c0117 0%, #1a0530 40%, #000 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(111,48,159,0.4) 0%, transparent 65%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Main spinner ring */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        {/* Outer ping ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(176,111,236,0.15)",
            animation: "loaderPing 2s ease-out infinite",
          }}
        />
        {/* Spinning arc */}
        <div
          style={{
            position: "absolute",
            inset: 6,
            borderRadius: "50%",
            border: "3px solid rgba(111,48,159,0.2)",
            borderTop: "3px solid #b06fec",
            borderRight: "3px solid rgba(176,111,236,0.6)",
            animation: "loaderSpin 0.9s linear infinite",
          }}
        />
        {/* Inner dot */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #b06fec, #7c3aed)",
              boxShadow: "0 0 12px rgba(176,111,236,0.8)",
              animation: "loaderPulse 1.2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Loading dots */}
      <div
        style={{
          marginTop: 28,
          display: "flex",
          gap: 6,
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "rgba(176,111,236,0.7)",
              animation: `loaderDot 1.2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Label */}
      <p
        style={{
          marginTop: 16,
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "rgba(176,111,236,0.6)",
          fontFamily: "Lexend, Helvetica, sans-serif",
          animation: "loaderFadeText 1.5s ease-in-out infinite alternate",
        }}
      >
        Loading...
      </p>

      {/* CSS keyframes injected inline */}
      <style>{`
        @keyframes loaderSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes loaderPing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.7); opacity: 0.5; }
        }
        @keyframes loaderDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes loaderFadeText {
          from { opacity: 0.4; }
          to { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
