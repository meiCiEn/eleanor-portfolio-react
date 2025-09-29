import React, { useEffect, useRef } from "react";

/**
 * WavyBackground (standalone, no shadcn)
 *
 * Props:
 * - backgroundFill: string (background color)
 * - colors: string[] (gradient wave colors)
 * - waveWidth: number (wavelength / segment size)
 * - blur: number (blur amount in px)
 * - speed: "slow" | "medium" | "fast" | number
 * - waveOpacity: number (0–1)
 * - containerClassName: string (Tailwind classes for outer container)
 * - className: string (Tailwind classes for content wrapper)
 */
export default function WavyBackground({
  children,
  backgroundFill = "#0f0f23",
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9"],
  waveWidth = 50,
  blur = 8,
  speed = "medium",
  waveOpacity = 0.5,
  containerClassName = "relative h-screen w-full overflow-hidden",
  className = "flex items-center justify-center",
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  const speedMap =
    typeof speed === "number"
      ? speed
      : { slow: 0.15, medium: 0.3, fast: 0.55 }[speed] ?? 0.3;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));

    function resize() {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;

    function draw() {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // background fill
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, width, height);

      ctx.filter = `blur(${blur}px)`;

      const steps = Math.ceil(width / 8);
      const baseAmplitude = Math.max(12, height * 0.25);

      colors.forEach((color, i) => {
        const yCenter = height * (0.25 + (0.5 * i) / Math.max(1, colors.length - 1));

        ctx.beginPath();
        for (let j = 0; j <= steps; j++) {
          const x = (j / steps) * width;
          const y =
            yCenter +
            Math.sin((j / waveWidth) + t + i * 0.6) * baseAmplitude * 0.3 +
            Math.cos((j / (waveWidth * 1.5)) - t * 0.8 + i) * baseAmplitude * 0.2;
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        ctx.fillStyle = hexToRgba(color, waveOpacity);
        ctx.fill();
      });

      ctx.filter = "none";
      t += 0.01 * speedMap;

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [backgroundFill, colors, waveWidth, blur, speedMap, waveOpacity]);

  return (
    <div className={`relative isolate ${containerClassName}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}

function hexToRgba(hex, alpha = 1) {
  const h = hex.replace("#", "");
  const bigint =
    h.length === 3
      ? parseInt(h.split("").map((c) => c + c).join(""), 16)
      : parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
