import { FC, useState, cloneElement, useMemo } from "react";

// Styles
import { WindowWrapper } from "./styles";

// helpers
import { throttle } from "lodash";
import { WindowProps } from "../../../model";
import useElementSize from "../../../hooks/useElementSize";

const bufferedItems = 2;

const Window: FC<WindowProps> = ({
  rowHeight,
  children,
  gap = 10,
  isVirtualizationEnabled = true,
}) => {
  const [containerRef, { height: containerHeight }] =
    useElementSize<HTMLUListElement>();
  const [scrollPosition, setScrollPosition] = useState(0);

  // get the children to be renderd
  const visibleChildren = useMemo(() => {
    if (!isVirtualizationEnabled)
      return children.map((child, index) =>
        cloneElement(child, {
          style: {
            position: "absolute",
            top: index * rowHeight + index * gap,
            height: rowHeight,
            left: 0,
            right: 0,
            lineHeight: `${rowHeight}px`,
          },
        })
      );
    const startIndex = Math.max(
      Math.floor(scrollPosition / rowHeight) - bufferedItems,
      0
    );
    const endIndex = Math.min(
      Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) +
        bufferedItems,
      children.length - 1
    );

    return children.slice(startIndex, endIndex + 1).map((child, index) =>
      cloneElement(child, {
        style: {
          position: "absolute",
          top: (startIndex + index) * rowHeight + index * gap,
          height: rowHeight,
          left: 0,
          right: 0,
          lineHeight: `${rowHeight}px`,
        },
      })
    );
  }, [
    children,
    containerHeight,
    rowHeight,
    scrollPosition,
    gap,
    isVirtualizationEnabled,
  ]);

  const onScroll = useMemo(
    () =>
      throttle(
        function (e: any) {
          setScrollPosition(e.target.scrollTop);
        },
        50,
        { leading: false }
      ),
    []
  );

  return (
    <WindowWrapper
      onScroll={onScroll}
      style={{
        overflowY: "scroll",
        position: "relative",
      }}
      ref={containerRef}
      className="container"
    >
      {visibleChildren}
    </WindowWrapper>
  );
};

export default Window;
