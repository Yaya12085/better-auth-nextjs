import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full h-10 rounded-md outline-none border  border-black/[.08] transition-colors px-4 sm:px-5 sm:min-w-44`}
      {...props}
    />
  );
});

Input.displayName = "Input";
