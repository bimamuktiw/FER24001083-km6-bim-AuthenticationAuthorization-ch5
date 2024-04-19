import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";
import { cn } from "../../../lib/utils";
import { Icon } from "@iconify/react";

export default function Carousel({
  children,
  options,
  className,
  classNameContainer,
  arrow,
  arrowSize = 20,
}) {
  const defaultOptions = { align: "center", loop: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...defaultOptions, ...options },
    [Autoplay()]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const styleNavigation =
    "aspect-square flex items-center justify-center bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 cursor-pointer";

  return (
    <div className="relative">
      <div className={cn("embla", className)} ref={emblaRef}>
        <div className={cn("embla__container", classNameContainer)}>
          {children}
        </div>
      </div>
      {arrow && (
        <>
          <div
            className={cn(styleNavigation, "left-[25px]")}
            style={{ width: arrowSize * 1.7 }}
            onClick={scrollPrev}
          >
            <Icon
              icon="tabler:chevron-left"
              width={arrowSize}
              height={arrowSize}
            />
          </div>
          <div
            className={cn(styleNavigation, "right-[25px]")}
            style={{ width: arrowSize * 1.7 }}
            onClick={scrollNext}
          >
            <Icon
              icon="tabler:chevron-right"
              width={arrowSize}
              height={arrowSize}
            />
          </div>
        </>
      )}
    </div>
  );
}
