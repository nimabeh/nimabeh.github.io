import React from 'react';

export const WavySentence: React.FC = () => {
  return (
    <div
      id="wavy-sentence-container"
      className="w-full max-w-3xl my-5 sm:my-8 select-text flex flex-col items-center justify-center text-center mx-auto"
      aria-label="Systems and organisations change, and their design has to change with them. I redesign from what they have become, grounded in thinking and making."
    >
      {/* DESKTOP & TABLET: Flowing wave dash 〜 with calibrated 20° slope and centered alignment */}
      <div className="hidden sm:block w-full">
        <svg
          viewBox="0 0 920 220"
          className="w-full h-auto overflow-visible select-text cursor-text mx-auto"
          style={{ userSelect: 'text', WebkitUserSelect: 'text' }}
          role="img"
        >
          <defs>
            {/*
              Top wave of 〜: Formatted with a 20° slope tangent at inflection.
              Inflection at (460, 65).
              Control points: (320, 14) and (600, 116) -> Δy/Δx = 102/280 = 0.364 ≈ tan(20°)
            */}
            <path
              id="desktop-wave-1"
              d="M 30 65 C 170 14, 320 14, 460 65 C 600 116, 750 116, 890 65"
              fill="none"
            />
            {/* Bottom wave of 〜: Parallel curve shifted down to y=145 with matching 20° slope */}
            <path
              id="desktop-wave-2"
              d="M 30 145 C 170 94, 320 94, 460 145 C 600 196, 750 196, 890 145"
              fill="none"
            />
          </defs>

          {/* Upper wave text: anchored exactly at center (50%) */}
          <text
            textAnchor="middle"
            className="fill-neutral-800"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontSize: '21px',
              fontWeight: 400,
              letterSpacing: '0.015em',
              userSelect: 'text',
              WebkitUserSelect: 'text',
            }}
          >
            <textPath href="#desktop-wave-1" startOffset="50%">
              Systems and organisations change, and their design has to change with them.
            </textPath>
          </text>

          {/* Lower wave text: anchored exactly at center (50%) */}
          <text
            textAnchor="middle"
            className="fill-neutral-800"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontSize: '21px',
              fontWeight: 400,
              letterSpacing: '0.015em',
              userSelect: 'text',
              WebkitUserSelect: 'text',
            }}
          >
            <textPath href="#desktop-wave-2" startOffset="50%">
              I redesign from what they have become, grounded in thinking and making.
            </textPath>
          </text>
        </svg>
      </div>

      {/* MOBILE: Clean wave dash 〜 with calibrated 20° slope and centered alignment */}
      <div className="block sm:hidden w-full max-w-[340px] xs:max-w-[360px] mx-auto">
        <svg
          viewBox="0 0 420 236"
          className="w-full h-auto overflow-visible select-text cursor-text mx-auto"
          style={{ userSelect: 'text', WebkitUserSelect: 'text' }}
          role="img"
        >
          <defs>
            {/*
              Calibrated 20° wave slope for mobile:
              Inflection at x=210.
              Control points: (145, y-24) and (275, y+24) -> Δy/Δx = 48/130 ≈ 0.369 ≈ tan(20°)
            */}
            <path
              id="mobile-wave-1"
              d="M 15 34 C 80 10, 145 10, 210 34 C 275 58, 340 58, 405 34"
              fill="none"
            />
            <path
              id="mobile-wave-2"
              d="M 15 86 C 80 62, 145 62, 210 86 C 275 110, 340 110, 405 86"
              fill="none"
            />
            <path
              id="mobile-wave-3"
              d="M 15 142 C 80 118, 145 118, 210 142 C 275 166, 340 166, 405 142"
              fill="none"
            />
            <path
              id="mobile-wave-4"
              d="M 15 194 C 80 170, 145 170, 210 194 C 275 218, 340 218, 405 194"
              fill="none"
            />
          </defs>

          {/* Line 1 - Centered at 50% */}
          <text
            textAnchor="middle"
            className="fill-neutral-800"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontSize: '16.5px',
              fontWeight: 400,
              userSelect: 'text',
              WebkitUserSelect: 'text',
            }}
          >
            <textPath href="#mobile-wave-1" startOffset="50%">
              Systems and organisations change,
            </textPath>
          </text>

          {/* Line 2 - Centered at 50% */}
          <text
            textAnchor="middle"
            className="fill-neutral-800"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontSize: '16.5px',
              fontWeight: 400,
              userSelect: 'text',
              WebkitUserSelect: 'text',
            }}
          >
            <textPath href="#mobile-wave-2" startOffset="50%">
              and their design has to change with them.
            </textPath>
          </text>

          {/* Line 3 - Centered at 50% */}
          <text
            textAnchor="middle"
            className="fill-neutral-800"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontSize: '16.5px',
              fontWeight: 400,
              userSelect: 'text',
              WebkitUserSelect: 'text',
            }}
          >
            <textPath href="#mobile-wave-3" startOffset="50%">
              I redesign from what they have become,
            </textPath>
          </text>

          {/* Line 4 - Centered at 50% */}
          <text
            textAnchor="middle"
            className="fill-neutral-800"
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontSize: '16.5px',
              fontWeight: 400,
              userSelect: 'text',
              WebkitUserSelect: 'text',
            }}
          >
            <textPath href="#mobile-wave-4" startOffset="50%">
              grounded in thinking and making.
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
