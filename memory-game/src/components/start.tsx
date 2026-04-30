import { Button } from ".";

interface StartProps {
  onStart: () => void;
}
export const Start = ({ onStart }: StartProps) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-[#2b87d1]">
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="white"
        className="pulse-faint hero-icon"
      >
        <rect width="58" height="58" rx="10" fill="currentcolor"></rect>
        <rect x="70" width="58" height="58" rx="10" fill="currentcolor"></rect>
        <rect y="70" width="58" height="58" rx="10" fill="currentcolor"></rect>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M118 80H80L80 118H118V80ZM80 70C74.4772 70 70 74.4772 70 80V118C70 123.523 74.4772 128 80 128H118C123.523 128 128 123.523 128 118V80C128 74.4772 123.523 70 118 70H80Z"
          fill="currentcolor"
        />
      </svg>
      <h1 className="text-4xl font-bold text-white">Visual Memory Test</h1>
      <p className="text-sm text-gray-200">Memorize the squares.</p>
      <Button variant="outline" onClick={onStart}>
        Start
      </Button>
    </div>
  );
};
