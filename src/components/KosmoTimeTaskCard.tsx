import { css } from '@emotion/react';

const  KosmoTimeTaskCard = () => {
  return (
    <div css={rootStyle}>
      {/* left */}
      <div>
        <button>再生アイコン</button>
        <div>
          <span className="material-icons">
            hourglass_top
          </span>
          <span>00:00:00</span>
        </div>
      </div>

      {/* right */}
      <div>
        {/* top */}
        <div>
          {/* top-left */}
          <div>
            <input type="checkbox"></input>
            <span css={titleStyle} title="long long long long long long long long long long title">long long long long long long long long long long title</span>
          </div>
          {/* show when hovering on Task card */}
          <div>
            Move to top
          </div>
        </div>
        {/* bottom */}
        <div>
          {/* bottom-left */}
          <div>
            <div>
              <span>アイコン</span>
              <span>long long long long tag name</span>
            </div>
            <div>
              <span>アイコン</span>
              <span>long long long long tag name</span>
            </div>
          </div>
          {/* bottom-right */}
          <div>
            <span>long long long long long name</span>
            <span />{/* icon */}
          </div>
        </div>
      </div>
    </div>
  )
}

const rootStyle = css`
  border-radius: 10px;
  min-height: 64px;
  width: 100%;
  background-color: white;
  display: flex;
  box-shadow: rgb(33 21 81 / 8%) 0px 1px 1px;
`;

const titleStyle = css`
  color: rgb(60, 53, 92);
  font-size: 14px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 10px;
  overflow: hidden;
`



export default KosmoTimeTaskCard
