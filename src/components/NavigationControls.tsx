import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideData } from '../types';

interface NavigationControlsProps {
  currentIndex: number;
  slides: SlideData[];
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  slides,
  onPrev,
  onNext,
  onSelectSlide,
}) => {
  const [isScrubberOpen, setIsScrubberOpen] = useState(false);
  const totalSlides = slides.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalSlides - 1;

  return (
    <nav aria-label="Slide Navigation" className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-40 px-5 sm:px-10 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* LEFT / CENTER: Instagram-style interactive slide carousel bar */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsScrubberOpen((prev) => !prev)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200/90 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            title="Click to choose between pages"
            aria-label="Instagram-style slide selector"
          >
            {slides.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <span
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSlide(idx);
                  }}
                  className={`block transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-6 sm:w-7 h-2 bg-[#368291]'
                      : 'w-2 h-2 bg-neutral-300 hover:bg-[#368291]/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </button>

          {/* Instagram-style preview drawer / popup when user clicks/pushes slide indicator */}
          {isScrubberOpen && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setIsScrubberOpen(false)}
              />
              <div
                id="instagram-slide-selector"
                className="absolute left-0 bottom-full mb-3 z-30 w-72 sm:w-80 p-3 bg-white rounded-2xl shadow-xl border border-neutral-200 text-neutral-800 text-xs font-mono space-y-1.5 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-[11px] text-neutral-400">
                  <span>CHOOSE PAGE</span>
                  <span>{currentIndex + 1} of {totalSlides}</span>
                </div>
                <div className="space-y-1 max-h-56 overflow-y-auto custom-scrollbar pt-1">
                  {slides.map((s, idx) => {
                    const isCur = idx === currentIndex;
                    const label = s.type === 'cover'
                      ? 'Intro / (re)designer'
                      : s.categoryTag || s.title || (s.type === 'contact' ? 'Contact' : `Page ${idx + 1}`);

                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          onSelectSlide(idx);
                          setIsScrubberOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors ${
                          isCur
                            ? 'bg-[#368291]/10 text-[#256370] font-semibold'
                            : 'hover:bg-neutral-100 text-neutral-700'
                        }`}
                      >
                        <span className="truncate">{idx + 1}. {label}</span>
                        {isCur && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#368291]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* RIGHT: Prominent Reveal.js-style navigation controls */}
        <div className="flex items-center gap-2">
          {/* Previous Arrow Button */}
          <button
            type="button"
            id="prev-slide-btn"
            onClick={onPrev}
            disabled={isFirst}
            className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border transition-all duration-200 ${
              isFirst
                ? 'opacity-20 cursor-not-allowed border-neutral-300 text-neutral-400 bg-white/50'
                : 'border-[#368291]/40 bg-white text-[#368291] hover:bg-[#368291] hover:text-white hover:border-[#368291] shadow-md hover:scale-105 active:scale-95'
            }`}
            title="Previous slide (Left Arrow • Swipe right)"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            id="next-slide-btn"
            onClick={onNext}
            disabled={isLast}
            className={`flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border transition-all duration-200 ${
              isLast
                ? 'opacity-20 cursor-not-allowed border-neutral-300 text-neutral-400 bg-white/50'
                : 'border-[#368291] bg-[#368291] text-white hover:bg-[#286470] shadow-md hover:scale-105 active:scale-95'
            }`}
            title="Next slide (Right Arrow • Spacebar • Swipe left)"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </nav>
  );
};
