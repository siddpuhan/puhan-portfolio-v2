export default function HouseIcon({ className = "w-[26px] h-[26px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} dark:text-white text-zinc-900 transition-colors`}
    >
      {/* Chimney */}
      <path d="M6 9.5V4.5H9V6.8" />
      {/* Outer Roof */}
      <path d="M2.5 11.5L12 3.5L21.5 11.5" />
      {/* House Walls & Base */}
      <path d="M4.5 10.5V20.5H19.5V10.5" />
      {/* Door Cutout */}
      <path d="M9.5 20.5V14.5H14.5V20.5" />
    </svg>
  );
}
