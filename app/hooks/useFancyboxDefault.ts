"use client";

import useFancybox from "./useFancybox";

export default function useFancyboxDefault() {
  return useFancybox({
    mainStyle: {
      "--f-toolbar-padding": "24px",
      "--f-button-svg-stroke-width": "1.1",
      "--f-arrow-svg-stroke-width": "1.1",
      "--f-thumb-border-radius": "0px",
    },
    Carousel: {
      Toolbar: {
        display: {
          left: ["infobar", "counter"],
          middle: [],
          right: ["zoomIn", "zoomOut", "autoplay", "close"],
        },
      },
    },
    on: {
      shouldClose: (fancybox) => {
        const slide = fancybox.getSlide();
        if (slide?.el) {
          slide.el.classList.add("f--closing-opacity");
        }
        return true;
      },

      destroy: (fancybox) => {
        const slide = fancybox.getSlide();
        if (slide?.el) {
          slide.el.classList.remove("f--closing-opacity");
        }
      },
    },
  });
}
