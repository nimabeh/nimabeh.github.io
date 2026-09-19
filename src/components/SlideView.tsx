import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { SlideData } from '../types';
import { WavySentence } from './WavySentence';

interface SlideViewProps {
  slide: SlideData;
}

export const SlideView: React.FC<SlideViewProps> = ({ slide }) => {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-3xl mx-auto px-4 sm:px-12 md:px-16 py-6 sm:py-10 flex flex-col justify-center min-h-[56vh] sm:min-h-[64vh]"
    >
      {/* COVER SLIDE */}
      {slide.type === 'cover' && (
        <div className="space-y-4 sm:space-y-6 text-center flex flex-col items-center justify-center w-full mx-auto">
          <div className="space-y-2 sm:space-y-3 flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 font-slab">
              {slide.title}
            </h1>
            <div className="inline-block">
              <span className="font-mono text-xs sm:text-base md:text-lg px-2.5 py-1 rounded bg-neutral-200/70 text-neutral-800 border border-neutral-300/60 tracking-tight font-medium">
                {slide.categoryTag}
              </span>
            </div>
          </div>

          {/* Wavy Sentence in the intentional shape of ≈ (readable, larger font, ends rising cleanly) */}
          <WavySentence />
        </div>
      )}

      {/* CONTENT SLIDES (AI Works, Product Works, Event & Exhibition, Avocation) */}
      {slide.type === 'content' && (
        <div className="space-y-6 sm:space-y-8 text-left">
          {/* Category Tag Header */}
          <div>
            <span className="font-mono text-sm sm:text-base md:text-lg px-3 py-1 rounded bg-neutral-200/70 text-neutral-800 border border-neutral-300/60 font-medium tracking-tight">
              {slide.categoryTag}
            </span>
          </div>

          {/* Bullet List */}
          <ul className="space-y-5 sm:space-y-6 list-disc list-outside pl-5 sm:pl-6 text-neutral-800">
            {slide.bullets?.map((bullet) => (
              <li
                key={bullet.id}
                className="text-base sm:text-lg md:text-xl font-slab leading-relaxed pl-1 text-neutral-800 marker:text-neutral-400"
              >
                {bullet.formattedParts.map((part, pIdx) => {
                  if (part.link) {
                    return (
                      <a
                        key={pIdx}
                        href={part.link.url}
                        target={part.link.isExternal ? '_blank' : undefined}
                        rel={part.link.isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-baseline gap-0.5 text-sky-700 hover:text-sky-900 underline underline-offset-4 decoration-sky-400 decoration-2 font-medium hover:decoration-sky-700 transition-all group"
                      >
                        <span>{part.link.text}</span>
                        {part.link.isExternal && (
                          <ArrowUpRight className="inline-block w-3 h-3 text-sky-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        )}
                      </a>
                    );
                  }

                  return (
                    <span
                      key={pIdx}
                      className={part.isBold ? 'font-semibold text-neutral-900' : ''}
                    >
                      {part.text}
                    </span>
                  );
                })}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CONTACT SLIDE */}
      {slide.type === 'contact' && (
        <div className="space-y-6 sm:space-y-8 text-center sm:text-left flex flex-col items-center sm:items-start">
          <p className="text-xl sm:text-2xl md:text-3xl font-slab text-neutral-800 leading-snug">
            {slide.closingNote}
          </p>

          {slide.contactEmail && (
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                href={`mailto:${slide.contactEmail}`}
                className="inline-flex items-center gap-2 text-lg sm:text-2xl font-mono font-semibold text-sky-700 hover:text-sky-900 underline underline-offset-6 decoration-sky-400 decoration-2 hover:decoration-sky-700 transition-all"
              >
                <Mail className="w-5 h-5 text-sky-600" />
                <span>{slide.contactEmail}</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopyEmail(slide.contactEmail!)}
                className="p-2 text-xs font-mono rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};
