import { breakPoints } from "./resoinsive";



export function responsiveProp(prop, callback) {
    if (prop) {
      return breakPoints.map((breakPoints) => {
        if (prop[breakPoints.name]) {
          return css`
            @media (max-width: ${breakPoints.media}px) {
              ${callback(breakPoints)}
            }
          `;
        }
      });
    }
  }