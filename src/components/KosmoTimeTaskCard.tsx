import { css } from '@emotion/react';

const  KosmoTimeTaskCard = () => {
  return (
    <div css={rootStyle}>
      {/* left */}
      <div>
        <button>再生アイコン</button>
        <div>
          <span>砂時計アイコン</span>
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
            <span>long long long long long long long long long long title</span>
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

`;



export default KosmoTimeTaskCard
