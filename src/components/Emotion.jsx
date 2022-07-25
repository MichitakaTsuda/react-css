/**@jsxRuntime classic */
/**@jsx jsx*/
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const buttonStyle = css({
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  });
  return (
    <div css={containerStyle}>
      <p>- Emotion -</p>
      <button css={buttonStyle}>FIGHT</button>
    </div>
  );
};
