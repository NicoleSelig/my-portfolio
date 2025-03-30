import * as React from "react";
import { addClasses } from "../utils";

type IconProps = {
  className?: string;
  props?: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>;
};

export function LinkedInIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={42}
      data-name="Flat Line"
      viewBox="0 0 25 25"
      {...props}
      className={
        className ? addClasses(className, "w-full h-auto") : "w-full h-auto"
      }
    >
      <rect
        width={18}
        height={18}
        x={3}
        y={3}
        rx={1}
        style={{
          fill: "#2ca9bc",
          strokeWidth: 2,
        }}
      />
      <path
        d="M16 17v-3a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v3"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        d="M7.95 7.5h.1"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2.5,
        }}
      />
      <path
        d="M8 12v5m4-3v-2m9 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1Z"
        data-name="primary"
        style={{
          fill: "none",
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
}

export function GitHubIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={44}
      viewBox="0 0 23 23"
      {...props}
      className={
        className ? addClasses(className, "w-full h-auto") : "w-full h-auto"
      }
    >
      <title>{"github [#142]"}</title>
      <path
        fillRule="evenodd"
        d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
      />
    </svg>
  );
}

export function SunIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      {...props}
      className={
        className ? addClasses(className, "w-full h-auto") : "w-full h-auto"
      }
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <g fill="#c6a0f6">
          <path d="M32.003 16.003c-8.837 0-16.001 7.165-16.001 16.001s7.165 16.001 16.001 16.001 16.001-7.164 16.001-16.001-7.164-16.001-16.001-16.001zm0 24.003a8.005 8.005 0 0 1-8.001-8.001 8 8 0 0 1 8.001-8.001 8 8 0 0 1 8.001 8.001 8.005 8.005 0 0 1-8.001 8.001zM12.001 31.997c0-2.211-1.789-4-4-4H4c-2.211 0-4 1.789-4 4s1.789 4 4 4h4a3.998 3.998 0 0 0 4.001-4zM12.204 46.139l-2.832 2.829a4 4 0 0 0 5.657 5.656l2.833-2.828a4 4 0 1 0-5.658-5.657zM32.003 51.999c-2.211 0-4 1.789-4 4V60c0 2.211 1.789 4 4 4s4-1.789 4-4l-.004-4.001a3.994 3.994 0 0 0-3.996-4zM51.798 46.139c-1.559-1.562-4.091-1.562-5.653 0a4 4 0 0 0 0 5.657l2.829 2.828c1.562 1.57 4.094 1.562 5.656 0s1.566-4.094 0-5.656l-2.832-2.829zM60.006 27.997l-4.009.008a3.984 3.984 0 0 0-3.992 3.992 3.99 3.99 0 0 0 3.992 4h4.001c2.219.008 4-1.789 4-4a3.988 3.988 0 0 0-3.992-4zM51.798 17.855l2.828-2.829a3.99 3.99 0 0 0 0-5.657 3.993 3.993 0 0 0-5.652 0l-2.829 2.836a3.99 3.99 0 0 0 0 5.649c1.554 1.572 4.094 1.564 5.653.001zM32.003 11.995c2.207.016 4-1.789 4-3.992v-4c0-2.219-1.789-4-4-4a3.986 3.986 0 0 0-4 3.993l.008 4.008a3.984 3.984 0 0 0 3.992 3.991zM12.212 17.855a3.98 3.98 0 0 0 5.646-.008c1.574-1.547 1.566-4.086.008-5.649L15.037 9.37a3.999 3.999 0 0 0-5.657 0 3.988 3.988 0 0 0-.012 5.657l2.844 2.828z" />
        </g>
        <path
          fill="#9cf4a7"
          d="M39.996 31.997a8 8 0 0 0-8.001-8.001 8 8 0 0 0-8.001 8.001c0 4.414 3.583 8.001 8.001 8.001s8.001-3.587 8.001-8.001z"
        />
      </g>
    </svg>
  );
}

export function MoonIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      viewBox="0 0 430 430"
      fill="none"
      {...props}
      className={
        className ? addClasses(className, "w-full h-auto") : "w-full h-auto"
      }
    >
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="35"
      >
        <path
          stroke="#9cf4a7"
          d="m297.733 180.212 31.866 14.385-31.866 14.484-15.484 31.866-15.383-31.866L235 194.597l31.866-14.385 15.383-31.866zm46.694 124.345 22.824 10.402-22.824 10.402-11.109 22.925-11.108-22.925-22.925-10.402 22.925-10.402 11.108-22.924zm41.029-226.803 22.563 10.238-22.563 10.237-10.934 22.564-10.933-22.564-22.464-10.237 22.464-10.238 10.933-22.564z"
        />
        <path
          stroke="#c6a0f6"
          d="M255.4 365.843c-16.389 6.296-34.079 9.694-52.667 9.694-81.35 0-147.409-65.96-147.409-147.409 0-81.45 65.959-147.409 147.409-147.409 18.588 0 36.278 3.398 52.667 9.694-55.365 21.187-94.741 74.854-94.741 137.715s39.376 116.428 94.741 137.715"
        />
      </g>
    </svg>
  );
}

export function Logo({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      height={70}
      viewBox="0 200 900 600"
      preserveAspectRatio="xMidYMid meet"
      {...props}
      className={
        className ? addClasses(className, "w-full h-auto") : "w-full h-auto"
      }
    >
      <g
        transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="280"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M853 6090 c-214 -63 -324 -219 -364 -515 -17 -122 -17 -398 -1 -520
6 -49 13 -147 14 -217 l3 -127 -40 -41 c-22 -23 -69 -62 -105 -87 -118 -83
-179 -160 -200 -255 -11 -50 -11 -62 4 -100 34 -84 114 -171 256 -278 70 -52
111 -93 121 -119 6 -14 14 -90 19 -170 32 -539 111 -768 310 -900 93 -61 160
-86 313 -117 111 -22 113 -20 123 103 6 91 6 92 -17 102 -13 5 -67 13 -119 18
-237 23 -364 170 -411 478 -15 97 -19 401 -6 500 l7 60 -47 25 c-104 53 -230
166 -281 251 -29 47 -30 132 -3 173 10 15 59 55 107 87 105 70 162 122 171
157 6 24 1 108 -17 312 -12 140 -12 465 0 565 28 226 46 293 96 367 51 75 88
95 199 110 18 3 20 12 23 81 l3 77 -48 -1 c-26 0 -76 -9 -110 -19z"
        />
        <path
          d="M7670 5791 c-11 -22 -13 -93 -4 -129 4 -13 17 -24 33 -28 50 -11 126
-38 142 -51 8 -7 21 -13 28 -13 23 0 156 -145 188 -205 94 -180 143 -475 143
-853 0 -115 4 -172 14 -195 15 -37 59 -75 154 -132 35 -20 81 -54 103 -75 37
-35 39 -40 39 -97 0 -56 -3 -65 -44 -119 -67 -91 -164 -170 -268 -218 -20 -10
-39 -24 -42 -32 -3 -8 -1 -58 4 -112 28 -292 -14 -579 -106 -719 -70 -104
-176 -168 -304 -185 -41 -5 -95 -12 -120 -16 l-45 -7 -3 -81 c-3 -92 8 -134
37 -134 71 0 277 55 346 93 17 9 39 20 50 26 33 15 126 100 160 144 32 42 95
167 95 188 0 6 7 32 15 58 32 101 73 417 76 576 2 91 9 105 74 149 117 78 211
149 248 190 52 56 95 132 103 182 14 94 -30 155 -215 299 -57 44 -115 100
-132 124 l-29 44 0 176 c0 299 -49 592 -126 744 -8 16 -14 33 -14 38 0 15 -68
118 -114 172 -47 56 -142 130 -196 152 -76 32 -205 65 -254 65 -15 0 -30 -8
-36 -19z"
        />
        <path
          d="M4025 5215 c-5 -2 -22 -6 -36 -9 -15 -3 -39 -24 -58 -52 l-34 -46 -8
-307 c-4 -168 -11 -326 -14 -351 -3 -25 -10 -209 -15 -410 -6 -201 -13 -373
-16 -383 -3 -10 -12 -17 -20 -15 -10 2 -454 585 -569 748 -14 19 -60 83 -103
143 -121 168 -176 246 -192 271 -29 45 -155 221 -167 234 -7 7 -13 17 -13 22
0 4 -30 40 -68 79 -59 62 -72 71 -103 71 -28 0 -46 -10 -88 -47 l-52 -48 1
-395 c1 -383 -9 -733 -31 -1085 -6 -93 -15 -233 -19 -310 -5 -77 -12 -165 -16
-196 -6 -49 -4 -58 15 -76 39 -36 107 -38 177 -7 62 27 58 -2 66 598 3 303 11
594 17 646 6 52 11 124 11 160 1 70 22 186 37 201 6 6 29 -20 62 -71 62 -96
156 -228 276 -385 25 -33 56 -76 69 -96 14 -20 31 -43 39 -51 9 -8 28 -33 44
-55 15 -22 63 -87 106 -144 242 -323 344 -466 492 -699 26 -41 55 -81 63 -87
10 -9 51 -13 117 -13 l102 0 16 63 c37 148 40 245 44 1127 4 858 4 866 -17
912 -11 26 -24 49 -28 52 -11 7 -76 15 -87 11z"
        />
        <path
          d="M5695 4884 c-97 -9 -418 -78 -510 -110 -23 -8 -48 -14 -57 -14 -10 0
-32 -6 -50 -14 -18 -8 -71 -29 -118 -46 -168 -62 -321 -149 -411 -231 -94 -87
-146 -219 -116 -292 22 -52 117 -122 187 -137 19 -4 58 -13 85 -20 126 -31
165 -40 240 -55 101 -22 195 -43 265 -60 30 -7 91 -21 135 -30 80 -17 141 -31
265 -59 80 -18 195 -44 232 -51 64 -12 54 -77 -23 -156 -74 -77 -121 -108
-269 -180 -58 -28 -114 -55 -124 -61 -11 -6 -31 -14 -45 -18 -14 -5 -51 -18
-81 -30 -225 -88 -497 -117 -641 -68 -50 17 -76 33 -116 75 -29 30 -53 59 -53
66 0 37 -22 87 -38 87 -25 0 -115 -88 -131 -128 -12 -28 -11 -38 3 -70 26 -58
89 -103 227 -162 229 -97 422 -96 784 6 225 64 448 162 584 258 193 137 271
281 228 424 -14 48 -22 52 -187 97 -36 9 -85 23 -110 30 -25 8 -72 21 -105 31
-33 9 -78 23 -100 30 -22 6 -69 20 -105 29 -36 10 -87 24 -115 31 -27 8 -75 21
-105 29 -30 9 -80 22 -110 30 -30 8 -84 23 -120 32 -36 10 -85 24 -109 31 -25
8 -53 14 -62 14 -10 0 -34 8 -54 17 -29 14 -35 22 -35 49 0 97 137 192 355 247
94 24 180 40 515 93 98 16 193 38 245 56 17 5 40 12 52 15 39 9 93 68 93 101
0 16 -6 34 -12 40 -39 31 -185 55 -283 46z"
        />
      </g>
    </svg>
  );
}
