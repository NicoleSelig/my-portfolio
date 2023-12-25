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
      viewBox="0 0 42 42"
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
      viewBox="0 0 44 44"
      {...props}
      className={
        className ? addClasses(className, "w-full h-auto") : "w-full h-auto"
      }
    >
      <title>{"github [#142]"}</title>
      <path
        fill="#000"
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
      xmlSpace="preserve"
      width={35}
      height={35}
      viewBox="0 0 64 64"
      {...props}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <g fill="#394240">
          <path d="M32.003 16.003c-8.837 0-16.001 7.165-16.001 16.001s7.165 16.001 16.001 16.001 16.001-7.164 16.001-16.001-7.164-16.001-16.001-16.001zm0 24.003a8.005 8.005 0 0 1-8.001-8.001 8 8 0 0 1 8.001-8.001 8 8 0 0 1 8.001 8.001 8.005 8.005 0 0 1-8.001 8.001zM12.001 31.997c0-2.211-1.789-4-4-4H4c-2.211 0-4 1.789-4 4s1.789 4 4 4h4a3.998 3.998 0 0 0 4.001-4zM12.204 46.139l-2.832 2.829a4 4 0 0 0 5.657 5.656l2.833-2.828a4 4 0 1 0-5.658-5.657zM32.003 51.999c-2.211 0-4 1.789-4 4V60c0 2.211 1.789 4 4 4s4-1.789 4-4l-.004-4.001a3.994 3.994 0 0 0-3.996-4zM51.798 46.139c-1.559-1.562-4.091-1.562-5.653 0a4 4 0 0 0 0 5.657l2.829 2.828c1.562 1.57 4.094 1.562 5.656 0s1.566-4.094 0-5.656l-2.832-2.829zM60.006 27.997l-4.009.008a3.984 3.984 0 0 0-3.992 3.992 3.99 3.99 0 0 0 3.992 4h4.001c2.219.008 4-1.789 4-4a3.988 3.988 0 0 0-3.992-4zM51.798 17.855l2.828-2.829a3.99 3.99 0 0 0 0-5.657 3.993 3.993 0 0 0-5.652 0l-2.829 2.836a3.99 3.99 0 0 0 0 5.649c1.554 1.572 4.094 1.564 5.653.001zM32.003 11.995c2.207.016 4-1.789 4-3.992v-4c0-2.219-1.789-4-4-4a3.986 3.986 0 0 0-4 3.993l.008 4.008a3.984 3.984 0 0 0 3.992 3.991zM12.212 17.855a3.98 3.98 0 0 0 5.646-.008c1.574-1.547 1.566-4.086.008-5.649L15.037 9.37a3.999 3.999 0 0 0-5.657 0 3.988 3.988 0 0 0-.012 5.657l2.844 2.828z" />
        </g>
        <path
          fill="#F9EBB2"
          d="M39.996 31.997a8 8 0 0 0-8.001-8.001 8 8 0 0 0-8.001 8.001c0 4.414 3.583 8.001 8.001 8.001s8.001-3.587 8.001-8.001z"
        />
      </g>
    </svg>
  );
}
