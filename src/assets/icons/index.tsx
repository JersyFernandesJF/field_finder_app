import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"


const Check = (props?:any) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 1.333C4.327 1.333 1.333 4.327 1.333 8c0 3.673 2.994 6.667 6.667 6.667 3.673 0 6.667-2.994 6.667-6.667 0-3.673-2.994-6.667-6.667-6.667Zm3.187 5.134-3.78 3.78a.5.5 0 0 1-.707 0L4.813 8.36a.503.503 0 0 1 0-.707.503.503 0 0 1 .707 0l1.533 1.534L10.48 5.76a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .707Z"
      fill="#005C5C"
    />
  </Svg>
)
const EyeIcon = (props?: any) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.387 8A2.384 2.384 0 0 1 8 10.387 2.384 2.384 0 0 1 5.613 8 2.384 2.384 0 0 1 8 5.613 2.384 2.384 0 0 1 10.387 8Z"
      stroke="#111830"
      strokeOpacity={0.3}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 13.513c2.353 0 4.547-1.386 6.073-3.786.6-.94.6-2.52 0-3.46C12.547 3.867 10.353 2.48 8 2.48S3.453 3.867 1.927 6.267c-.6.94-.6 2.52 0 3.46 1.526 2.4 3.72 3.786 6.073 3.786Z"
      stroke="#111830"
      strokeOpacity={0.3}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const EmailIConTextIput = (props?:any) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.667 4.167H3.333A.833.833 0 0 0 2.5 5v10c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833V5a.833.833 0 0 0-.833-.833ZM3.333 2.5A2.5 2.5 0 0 0 .833 5v10a2.5 2.5 0 0 0 2.5 2.5h13.334a2.5 2.5 0 0 0 2.5-2.5V5a2.5 2.5 0 0 0-2.5-2.5H3.333Z"
      fill="#111830"
      fillOpacity={0.3}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.36 6.133a.833.833 0 0 1 1.173-.107l3.934 3.278a.833.833 0 0 0 1.066 0l3.934-3.278a.833.833 0 0 1 1.066 1.28l-3.932 3.278a2.5 2.5 0 0 1-3.201 0L4.467 7.307a.833.833 0 0 1-.107-1.174Z"
      fill="#111830"
      fillOpacity={0.3}
    />
  </Svg>
)

const EmailIcon = (props?: any) =>(
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.667 4.167H3.333A.833.833 0 0 0 2.5 5v10c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833V5a.833.833 0 0 0-.833-.833ZM3.333 2.5A2.5 2.5 0 0 0 .833 5v10a2.5 2.5 0 0 0 2.5 2.5h13.334a2.5 2.5 0 0 0 2.5-2.5V5a2.5 2.5 0 0 0-2.5-2.5H3.333Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.36 6.133a.833.833 0 0 1 1.173-.107l3.934 3.278a.833.833 0 0 0 1.066 0l3.934-3.278a.833.833 0 0 1 1.066 1.28l-3.932 3.278a2.5 2.5 0 0 1-3.201 0L4.467 7.307a.833.833 0 0 1-.107-1.174Z"
      fill="#fff"
    />
  </Svg>

)

const FacebookIcon = (props?: any) => (
    <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.992 3.656 9.129 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.242 0-1.629.772-1.629 1.563V10h2.774l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.992 20 10Z"
        fill="#1877F2"
      />
      <Path
        d="m13.893 12.89.443-2.89h-2.774V8.125c0-.791.387-1.563 1.63-1.563h1.261v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.778 1.385-3.778 3.89V10H5.898v2.89h2.54v6.989a10.057 10.057 0 0 0 3.124 0V12.89h2.33Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
const GoogleIcon = (props?: any) =>(
    <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        opacity={0.05}
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Z"
        fill="#111830"
      />
      <Path
        d="M10 7.342c.813 0 1.362.352 1.675.646l1.223-1.195A4.163 4.163 0 0 0 10 5.667a4.33 4.33 0 0 0-3.871 2.388l1.4 1.088c.352-1.045 1.325-1.8 2.47-1.8Z"
        fill="#EA4335"
      />
      <Path
        d="M14.16 10.096c0-.356-.029-.616-.091-.885H10v1.608h2.388c-.048.4-.308 1.001-.886 1.406l1.368 1.059c.818-.756 1.29-1.868 1.29-3.188Z"
        fill="#4285F4"
      />
      <Path
        d="M7.535 10.857A2.667 2.667 0 0 1 7.39 10c0-.299.053-.588.14-.857L6.129 8.055A4.338 4.338 0 0 0 5.667 10c0 .698.168 1.358.462 1.945l1.406-1.088Z"
        fill="#FBBC05"
      />
      <Path
        d="M10 14.333c1.17 0 2.152-.385 2.87-1.05l-1.368-1.058c-.366.255-.857.433-1.502.433-1.146 0-2.118-.756-2.465-1.8l-1.401 1.087A4.323 4.323 0 0 0 10 14.333Z"
        fill="#34A853"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
const AppleIcon = (props?: any) =>(
    <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.204 6.992c-.342-.156-.711-.325-1.328-.325C5.576 6.667 5 9.02 5 11.373c0 2.352 1.726 5.294 2.876 5.294.674 0 1.151-.202 1.546-.37.279-.118.517-.219.756-.219.238 0 .476.101.755.22.395.167.872.369 1.546.369.821 0 1.936-1.5 2.506-3.213.058-.173-.06-.35-.232-.398a2.346 2.346 0 0 1-1.699-2.272c0-1.025.641-1.897 1.536-2.22.17-.06.275-.251.195-.416-.43-.888-1.151-1.481-2.306-1.481-.617 0-.986.169-1.328.325-.296.136-.573.263-.973.263s-.677-.127-.974-.263ZM9.167 5.677a2.344 2.344 0 0 1 2.343-2.344c.087 0 .157.07.157.157a2.344 2.344 0 0 1-2.344 2.343.156.156 0 0 1-.156-.156Z"
      fill="#111830"
    />
  </Svg>
)

export {FacebookIcon, GoogleIcon, AppleIcon, EmailIcon, EmailIConTextIput, EyeIcon, Check}