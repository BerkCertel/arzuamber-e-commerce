import { IconType } from "react-icons";

interface ChoiceInputProps {
  text: string;
  onClick: (value: string) => void;
  icon: IconType;
  selected?: boolean;
}

function ChoiceInput({
  text,
  icon: Icon,
  onClick,
  selected,
}: ChoiceInputProps) {
  return (
    <div
      onClick={() => onClick(text)}
      className={`flex flex-col items-center justify-center gap-2 h-20 w-28 p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
        selected
          ? "border-primary bg-primaryLight text-white"
          : "border-gray-300 bg-white text-gray-600 hover:shadow-md"
      }`}
    >
      <Icon
        className={`text-2xl ${selected ? "text-white" : "text-primary"}`}
      />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

export default ChoiceInput;
