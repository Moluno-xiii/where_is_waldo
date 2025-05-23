import { useState } from "react";
import type { ImageTypes } from "../App";

interface PropTypes {
  image: ImageTypes | undefined;
}

interface ClickPosition {
  x: number;
  y: number;
  percentX: number;
  percentY: number;
}

const Waldo: React.FC<PropTypes> = ({ image }) => {
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(
    null,
  );

  if (!image) {
    return <div>No selected image</div>;
  }

  const isGuessCorrect =
    (clickPosition?.percentX as number) > image.correct_x_percent_min &&
    (clickPosition?.percentX as number) < image.correct_x_percent_max &&
    (clickPosition?.percentY as number) > image.correct_y_percent_min &&
    (clickPosition?.percentY as number) < image.correct_y_percent_max;

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imageElement = event.currentTarget;
    const rect = imageElement.getBoundingClientRect();

    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const clickXPercent = clickX / imageElement.offsetWidth;
    const clickYPercent = clickY / imageElement.offsetHeight;

    setClickPosition({
      x: clickX,
      y: clickY,
      percentX: clickXPercent,
      percentY: clickYPercent,
    });
  };

  return (
    <div className="relative">
      <img
        src={image.source}
        loading="lazy"
        alt="Where is waldo puzzle"
        className="rounded-xl max-md:min-h-[70vh]"
        onClick={handleImageClick}
      />
      <span className="text-2xl">
        {clickPosition
          ? isGuessCorrect
            ? "You guessed right, You Win!"
            : "You guessed wrong"
          : null}
      </span>
      {clickPosition ? (
        <div
          style={{
            position: "absolute",
            left: clickPosition.x - 20,
            top: clickPosition.y - 20,
            width: "40px",
            height: "40px",
            border: `${isGuessCorrect ? "2px solid green" : "2px solid red"}`,
            backgroundColor: `${isGuessCorrect ? "#dcfce7" : "rgba(255, 0, 0, 0.2)"}`,
            pointerEvents: "none",
            borderRadius: "4px",
          }}
        />
      ) : null}
    </div>
  );
};

export default Waldo;
