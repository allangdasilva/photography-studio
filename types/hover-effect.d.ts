declare module "hover-effect" {
  interface HoverEffectOptions {
    parent: HTMLElement;
    intensity?: number;
    image1: string;
    image2: string;
    displacementImage: string;
    imagesRatio?: number;
  }

  export default class HoverEffect {
    constructor(options: HoverEffectOptions);
  }
}
