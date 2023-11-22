import { css } from "styled-components";

// from https://codepen.io/csilverman/post/fixing-the-jitter-bug
export const hoverLift = (x = 0, y = 0) => css`
  transform: translate(0, 0);

  transition: all 0.2s ease-in-out;
  transition-property: transform, box-shadow;

  &:hover {
    position: relative;
    transform: translate(${x}px, ${-y}px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    &:after {
      /* Basic setup */
      position: absolute;
      content: "";
      width: 100%;
      top: 0;
      left: 0;

      /* Bottom is positioned to cover the area the hovered element is leaving */
      bottom: -1em;

      /* We need to place the pseudo-element under everything else. Without
         specifying the placement, it will sit on top of the parent element (our card)
         and block the user from selecting text or clicking links */
      z-index: -1;
    }
  }
`;
