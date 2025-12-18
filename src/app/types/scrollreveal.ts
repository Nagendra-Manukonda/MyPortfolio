declare module "scrollreveal" {
  export interface ScrollRevealOptions {
    distance?: string;
    duration?: number;
    delay?: number;
    origin?: "top" | "bottom" | "left" | "right";
    reset?: boolean;
    interval?: number;
    easing?: string;
    scale?: number;
    opacity?: number;
    [key: string]: any;
  }

  export interface ScrollRevealObject {
    reveal: (
      target: string | Element | Element[],
      options?: ScrollRevealOptions
    ) => void;
    destroy: () => void;
  }

  function ScrollReveal(options?: ScrollRevealOptions): ScrollRevealObject;

  export default ScrollReveal;
}
