// @ts-nocheck
"use client";

import React, { useEffect } from "react";

const SnowProvider = () => {
  useEffect(() => {
    (() => {
      if (true) {
        var duration = 86400 * 1000;
        var animationEnd = Date.now() + duration;
        var skew = 1;
        let i = 0;

        function randomInRange(min, max) {
          return Math.random() * (max - min) + min;
        }

        (function frame() {
          i++;
          var timeLeft = animationEnd - Date.now();
          var ticks = Math.max(200, 500 * (timeLeft / duration));
          skew = Math.max(0.8, skew - 0.001);

          // if i is even
          if (i % 30 == 0) {
            confetti({
              particleCount: 1,
              startVelocity: 0,
              ticks: ticks,
              origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: Math.random() * skew - 0.2,
              },
              colors: ["#fe0607"],
              shapes: ["circle"],
              gravity: randomInRange(0.4, 0.6),
              scalar: randomInRange(0.4, 0.8),
              drift: randomInRange(-0.4, 0.4),
            });
          }

          if (timeLeft > 0) {
            requestAnimationFrame(frame);
          }
        })();
      }
    })();
  }, []);

  return (
    <div>
      <script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js"
        defer
      ></script>
    </div>
  );
};

export default SnowProvider;
