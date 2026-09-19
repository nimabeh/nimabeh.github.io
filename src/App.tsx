/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { SLIDES } from './data/portfolioData';
import { MarginBoxFrame } from './components/MarginBoxFrame';
import { SlideView } from './components/SlideView';
import { NavigationControls } from './components/NavigationControls';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSlides = SLIDES.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, goToSlide, totalSlides]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    // Minimum swipe threshold (45px) and verify horizontal intent
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <main
      className="relative min-h-screen w-full bg-stone-50 text-neutral-900 flex flex-col justify-center overflow-x-hidden select-text"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 2-Color Grounded Striped Margin Box Frame (#368291 and #fafaf9) */}
      <MarginBoxFrame />

      {/* Main Slide Presentation Stage */}
      <div className="flex-1 flex items-center justify-center w-full my-auto py-12 sm:py-16">
        <AnimatePresence mode="wait">
          <SlideView
            key={currentSlide.id}
            slide={currentSlide}
          />
        </AnimatePresence>
      </div>

      {/* Modern Navigation Controls: Instagram Slide Carousel & Prominent Reveal Arrows */}
      <NavigationControls
        currentIndex={currentIndex}
        slides={SLIDES}
        onPrev={goToPrev}
        onNext={goToNext}
        onSelectSlide={goToSlide}
      />
    </main>
  );
}
