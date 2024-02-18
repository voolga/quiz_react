export function Loader() {
  return (
    <>
      <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="none" />

        <rect x="50" y="125" width="20" height="20" fill="#ff41af">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          />
        </rect>
        <rect x="80" y="125" width="20" height="20" fill="white">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="1s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </rect>
        <rect x="110" y="125" width="20" height="20" fill="yellow">
          <animate
            attributeName="opacity"
            values="0.2;1;0.2"
            dur="1s"
            repeatCount="indefinite"
            begin="0.4s"
          />
        </rect>

        <text x="150" y="145" fontFamily="'Press Start 2P'" fontSize="20" fill="yellow">
          Loading quiz...
        </text>
      </svg>
    </>
  )
}
