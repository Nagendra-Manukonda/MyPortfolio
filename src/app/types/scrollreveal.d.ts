declare module "scrollreveal" {
  interface ScrollRevealObject {
    reveal: (selector: string | Element | Element[], config?: any) => void;
  }

  interface ScrollRevealOptions {
    distance?: string;
    duration?: number;
    delay?: number;
    origin?: "top" | "bottom" | "left" | "right";
    reset?: boolean;
    [key: string]: any;
  }

  function ScrollReveal(options?: ScrollRevealOptions): ScrollRevealObject;
  export default ScrollReveal;
}
