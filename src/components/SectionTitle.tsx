interface SectionTitleProps {
  title: string;
  variant?: "default" | "footer" | "dark-bg";
  className?: string;
  underlineColor?: string;
}

export default function SectionTitle({
  title,
  variant = "default",
  className = "",
  underlineColor,
}: SectionTitleProps) {
  const baseClasses = "font-bold";

  const variantClasses = {
    default:
      "text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center",
    footer: "text-lg sm:text-xl mb-8",
    "dark-bg": "text-3xl sm:text-4xl text-white mb-16 text-center",
  };

  const underlineClasses =
    underlineColor ||
    (variant === "footer"
      ? "bg-white/30"
      : variant === "dark-bg"
        ? "bg-white/30"
        : "bg-linear-to-r from-indigo-500 to-purple-500");

  const underlineHeight = variant === "footer" ? "h-0.5" : "h-1";

  return (
    <h2 className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <span className="relative inline-block">
        {title}
        <span
          className={`absolute -bottom-2 left-0 right-0 ${underlineHeight} ${underlineClasses} rounded-full`}
        ></span>
      </span>
    </h2>
  );
}
