import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  forwardRef,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Wrapper from "./style";

const HorizontalScroll = forwardRef(
  (
    {
      children,
      className = "",
      showArrows = false,
      showScrollBar = false,
    },
    ref
  ) => {
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const [dragging, setDragging] = useState(false);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);
    const [scrollValue, setScrollValue] = useState(0);
    const [scrollMax, setScrollMax] = useState(0);

    // Attach ref
    useEffect(() => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(containerRef.current);
      } else {
        ref.current = containerRef.current;
      }
    }, [ref]);

    // Update scroll state
    const updateScrollState = useCallback(() => {
      const container = containerRef.current;
      if (!container) return;

      const left = container.scrollLeft;
      const max = container.scrollWidth - container.clientWidth;

      setScrollValue(left);
      setScrollMax(max);
      setCanPrev(left > 5);
      setCanNext(left < max - 5);
    }, []);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      updateScrollState();
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);

      return () => {
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }, [updateScrollState]);

    // Enable snap
    const enableSnap = () => {
      const container = containerRef.current;
      if (!container) return;

      container.style.scrollBehavior = "smooth";
      container.style.scrollSnapType = "x mandatory";
    };

    useEffect(() => {
      enableSnap();
    }, []);

    // Mouse events (drag scroll)
    const handleMouseDown = (e) => {
      isDragging.current = true;
      setDragging(false);

      startX.current = e.pageX - containerRef.current.offsetLeft;
      scrollLeft.current = containerRef.current.scrollLeft;

      containerRef.current.style.scrollSnapType = "none";
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      enableSnap();
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;

      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX.current;

      if (Math.abs(walk) > 5) setDragging(true);

      containerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      enableSnap();
    };

    // Arrow scroll
    const scrollPage = (direction) => {
      const container = containerRef.current;
      if (!container) return;

      const amount = container.clientWidth;
      const left = direction === "next" ? amount : -amount;

      container.scrollBy({ left, behavior: "smooth" });
    };

    // Range scrollbar
    const onRangeChange = (e) => {
      containerRef.current.scrollLeft = Number(e.target.value);
    };

    return (
      <Wrapper>
        <div
          ref={containerRef}
          className={`scroll-container hide-scrollbar ${className} ${
            dragging ? "dragging" : ""
          }`}
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            overflowY: "hidden",
            cursor: isDragging.current ? "grabbing" : "grab",
            paddingBottom: "10px",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              className: `${child.props.className || ""} scroll-item`,
              style: {
                ...(child.props.style || {}),
                minWidth: "300px",        // 🔥 important
                flexShrink: 0,
                scrollSnapAlign: "start",
              },
            })
          )}
        </div>

        {/* Controls */}
        <div className="controls">
          {showArrows && (
            <>
              {canPrev && (
                <button
                  className="arrow prev"
                  onClick={() => scrollPage("prev")}
                >
                  <ChevronLeft />
                </button>
              )}

              {canNext && (
                <button
                  className="arrow next"
                  onClick={() => scrollPage("next")}
                >
                  <ChevronRight />
                </button>
              )}
            </>
          )}

          {showScrollBar && scrollMax > 0 && (
            <div className="bottom-scroll">
              <input
                type="range"
                min={0}
                max={scrollMax}
                value={scrollValue}
                onChange={onRangeChange}
              />
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
);

export default HorizontalScroll;