import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function ProfileInactive(props: any) {
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G stroke="#000" strokeWidth={1.5}>
        <Path
          d="M12 11a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M5 18.571A4.571 4.571 0 019.571 14h4.858A4.571 4.571 0 0119 18.571 3.429 3.429 0 0115.571 22H8.43A3.429 3.429 0 015 18.571z" />
      </G>
    </Svg>
  )
}

export default ProfileInactive
