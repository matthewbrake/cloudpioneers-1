import { useEffect, useRef } from 'react';

// Default options for the Intersection Observer.
const defaultOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

/**
 * A custom React hook that uses the Intersection Observer API to apply a
 * fade-in-up animation to an element when it scrolls into the viewport.
 * The animation is achieved by adding/removing CSS classes.
 *
 * @param {IntersectionObserverInit} [options=defaultOptions] - Optional Intersection Observer options.
 * @returns {React.RefObject<HTMLDivElement>} A ref object to be attached to the target element.
 *
 * @example
 * const sectionRef = useScrollAnimation();
 * return <section ref={sectionRef} className="opacity-0 transform translate-y-4" />;
 */
export const useScrollAnimation = (options: IntersectionObserverInit = defaultOptions) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // The callback function for the observer.
    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      // If the element is intersecting (visible) in the viewport...
      if (entry.isIntersecting) {
        // Remove the initial 'hidden' state classes.
        entry.target.classList.remove('opacity-0', 'translate-y-4', 'translate-y-5');
        // Add the 'visible' state classes.
        entry.target.classList.add('opacity-100', 'translate-y-0');
        // Stop observing the element once it's visible to prevent re-triggering.
        observer.unobserve(entry.target);
      }
    };

    // Create a new Intersection Observer.
    const observer = new IntersectionObserver(observerCallback, options);
    
    // Start observing the element.
    observer.observe(currentRef);
    
    // Cleanup function: stop observing when the component unmounts.
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]); // Re-run the effect if the options change.

  return ref;
};
