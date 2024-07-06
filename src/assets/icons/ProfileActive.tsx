import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function ProfileActive(props: any) {
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fillRule="evenodd" clipRule="evenodd" fill="#000">
        <Path d="M6.75 6.5a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zM4.25 18.571a5.321 5.321 0 015.321-5.321h4.858a5.321 5.321 0 015.321 5.321 4.179 4.179 0 01-4.179 4.179H8.43a4.179 4.179 0 01-4.179-4.179z" />
      </G>
    </Svg>
  )
}

export default ProfileActive
