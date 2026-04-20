import styled from "styled-components";

const Wrapper = styled.div`
    .controls {
        transition: opacity 0.2s ease;
        opacity: 0;
        pointer-events: none;

        .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 4;
            width: 38px;
            height: 38px;
            border-radius: 10px;
            border: none;
            background: rgba(0, 0, 0, 0.6);
            color: white;
            font-size: 1.6rem;
            line-height: 0;
            cursor: pointer;

            &.prev {
                left: 8px;
            }
            &.next {
                right: 8px;
            }
            &:active {
                transform: translateY(-50%) scale(0.98);
            }
        }

        .bottom-scroll {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 12px;
            width: 50%;
            max-width: 720px;
            z-index: 4;
            border-radius: 999px;
            padding: 8px 10px;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 2px 0px #ddd;

            input[type="range"] {
                -webkit-appearance: none;
                width: 100%;
                height: 10px;
                border-radius: 999px;
                background: transparent;
                outline: none;
                border-radius: 999px;
            }

            input[type="range"]::-webkit-slider-runnable-track {
                height: 8px;
                border-radius: 999px;
                background: rgba(0, 0, 0, 0.08);
            }

            input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                margin-top: -5px;
            }
        }
    }

    &:hover {
        .controls {
            opacity: 1;
            pointer-events: auto;
        }

        .scroll-item {
            background-color: #f4f4f4 !important;
        }
    }

    &.show-controls .controls {
        opacity: 1;
        pointer-events: auto;
    }

    .scroll-container {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        user-select: none;
        padding: 0.25rem 0;
        cursor: grab;

        &.dragging {
            cursor: grabbing;
        }

        &::-webkit-scrollbar {
            display: none;
        }

        .scroll-item {
            flex: 0 0 auto;
            scroll-snap-align: start; /* important for snap */
            margin-right: -8px;
            background-color: #fafafa;
        }
    }
`;

export default Wrapper;
