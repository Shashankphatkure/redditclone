"use client";

import { forwardRef } from "react";
import Link from "next/link";

const variants = {
  primary:
    "bg-accent-yellow hover:bg-accent-yellow-hover dark:bg-accent-yellow-dark text-text-primary-light dark:text-text-primary-dark",
  secondary:
    "bg-background-alt-light dark:bg-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light/80 dark:hover:bg-background-alt-dark/80",
  outline:
    "border border-background-alt-light dark:border-background-alt-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-alt-light dark:hover:bg-background-alt-dark",
  danger:
    "bg-interactive-red hover:bg-interactive-red-hover dark:bg-interactive-red-dark text-white",
  success:
    "bg-accent-green hover:bg-accent-green-hover dark:bg-accent-green-dark text-white",
  link: "text-interactive-blue hover:text-interactive-blue-hover dark:text-interactive-blue-dark underline-offset-4 hover:underline",
};

const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

const shapes = {
  default: "rounded-lg",
  rounded: "rounded-full",
  square: "rounded-none",
};

const Button = forwardRef(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      shape = "rounded",
      href,
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles = `
    inline-flex items-center justify-center font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${shapes[shape]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

    const content = (
      <>
        {isLoading && (
          <span className="mr-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={baseStyles} ref={ref} {...props}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={baseStyles}
        disabled={disabled || isLoading}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
