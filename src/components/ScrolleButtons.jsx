import { useSwipeable } from "react-swipeable";

export function ScrolleButtons({
  HandleDaysCountPlus,
  HandleDaysCountMinus,
  end,
}) {
  const handlers = useSwipeable({
    onSwipedLeft: HandleDaysCountPlus,
    onSwipedRight: HandleDaysCountMinus,
  });
  return (
    <div className="scrolle-buttons" {...handlers}>
      {end !== 3 && (
        <span style={{ paddingRight: "0.4rem" }} onClick={HandleDaysCountMinus}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </span>
      )}
      {end !== 8 && (
        <span
          style={{ paddingLeft: "0.4rem" }}
          onClick={HandleDaysCountPlus}
          className="scroll-button-plus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </span>
      )}
    </div>
  );
}