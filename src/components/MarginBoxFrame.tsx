import React from 'react';

export const MarginBoxFrame: React.FC = () => {
  // Two colors only: #368291 (the signature margin box color from the original theme) and #fafaf9 (the background canvas color)
  // Clean, grounded diagonal stripes
  const stripeStyle: React.CSSProperties = {
    backgroundImage:
      'repeating-linear-gradient(45deg, #368291, #368291 14px, #fafaf9 14px, #fafaf9 28px)',
  };

  return (
    <div
      id="margin-box-frame"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Margin Line */}
      <div
        id="margin-line-top"
        className="fixed top-0 left-0 w-full h-2.5 sm:h-3 md:h-3.5"
        style={stripeStyle}
      />

      {/* Bottom Margin Line */}
      <div
        id="margin-line-bottom"
        className="fixed bottom-0 left-0 w-full h-2.5 sm:h-3 md:h-3.5"
        style={stripeStyle}
      />

      {/* Left Margin Line */}
      <div
        id="margin-line-left"
        className="fixed top-0 left-0 h-full w-2.5 sm:w-3 md:w-3.5"
        style={stripeStyle}
      />

      {/* Right Margin Line */}
      <div
        id="margin-line-right"
        className="fixed top-0 right-0 h-full w-2.5 sm:w-3 md:w-3.5"
        style={stripeStyle}
      />
    </div>
  );
};
