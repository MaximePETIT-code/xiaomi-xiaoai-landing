import { useRect } from "@studio-freight/hamo";
import {
  useMemo,
  useCallback,
  useImperativeHandle,
  useEffect,
  useRef,
  forwardRef,
} from "react";
import { useScreenSize } from "../../../Hooks/useScreenSize";
import PropTypes from "prop-types";

const BASE_URL = "https://res.cloudinary.com/dvx9zz0jq/image/upload";

export const CanvasVideo = forwardRef(
  ({ count, folder, pad = 3, className, extension = "png" }, ref) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [setWrapperRectRef, rect] = useRect();

    const isMobile = useScreenSize(990);

    const frames = useMemo(
      () =>
        new Array(count).fill(0).map((_, i) => {
          const image = new Image();
          const quality = "q_auto:good,e_sharpen";
          const width = `${isMobile ? "w_800" : "w_1920"}`;
          image.src = `${BASE_URL}/${width},${quality},f_auto${folder}product${
            isMobile ? "-mobile" : ""
          }${(i + 1).toString().padStart(pad, "0")}.${extension}`;
          return image;
        }),
      [count, pad, folder, extension, isMobile]
    );

    useEffect(() => {
      canvasRef.current.width = rect.width * window.devicePixelRatio;
      canvasRef.current.height = rect.height * window.devicePixelRatio;
      canvasRef.current.style.width = `${rect.width}px`;
      canvasRef.current.style.height = `${rect.height}px`;
    }, [rect]);

    const progress = useCallback(
      (progress) => {
        const index = Math.floor(progress * (count - 1));
        const image = frames[index];

        const imageRatio = image.width / image.height;
        const canvasRatio = rect.width / rect.height;
        let height = rect.height;
        let width = rect.width;

        if (imageRatio < canvasRatio) {
          height = width / imageRatio;
        } else {
          width = height * imageRatio;
        }

        const x = (rect.width - width) * 0.5;
        const y = (rect.height - height) * 0.5;

        contextRef.current.drawImage(
          image,
          x,
          y,
          width * window.devicePixelRatio,
          height * window.devicePixelRatio
        );
      },
      [rect, frames, count]
    );

    useEffect(() => {
      if (frames[0] && rect.width) {
        frames[0].addEventListener("load", () => progress(0), { once: true });
      }
    }, [frames, rect, progress]);

    useImperativeHandle(
      ref,
      () => ({
        progress,
        element: canvasRef.current,
      }),
      [progress]
    );

    return (
      <div className={className} ref={setWrapperRectRef}>
        <canvas
          className="canvasVideo"
          ref={(node) => {
            canvasRef.current = node;
            if (node) {
              contextRef.current = node.getContext("2d", { antialias: true });
              contextRef.current.mozImageSmoothingEnabled = true;
              contextRef.current.webkitImageSmoothingEnabled = true;
              contextRef.current.msImageSmoothingEnabled = true;
              contextRef.current.imageSmoothingEnabled = true;
            }
          }}
        />
      </div>
    );
  }
);

CanvasVideo.displayName = "CanvasVideo";

CanvasVideo.propTypes = {
  count: PropTypes.number.isRequired,
  folder: PropTypes.string.isRequired,
  pad: PropTypes.number,
  className: PropTypes.string,
  extension: PropTypes.string,
};
