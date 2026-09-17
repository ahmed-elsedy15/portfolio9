import { useScrollProgress } from "../hooks/useScrollProgress.js";

export default function ScrollProgressBar() {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo to-cyan transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
