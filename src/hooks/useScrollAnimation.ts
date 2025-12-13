import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook to detect when elements enter the viewport and trigger animations
 * Uses Intersection Observer API for performance
 * Respects user's prefers-reduced-motion preference
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): {
  ref: RefObject<HTMLElement | null>;
  isVisible: boolean;
} {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If user prefers reduced motion, make element visible immediately
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // If triggerOnce is true, stop observing after first intersection
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            // If triggerOnce is false, allow re-triggering when element leaves viewport
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(element);
    
    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);
  
  return { ref, isVisible };
}
