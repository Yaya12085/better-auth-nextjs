import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2]  hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44`}
        {...props}
      >
        {title}
      </button>
    );
  }
);

Button.displayName = "Button";
