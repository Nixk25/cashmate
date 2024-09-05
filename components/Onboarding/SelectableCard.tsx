"use client";
type SelectableCardProps = {
  label: string;
  value: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
};

const SelectableCard = ({
  label,
  value,
  isSelected,
  onSelect,
}: SelectableCardProps) => {
  return (
    <div
      onClick={() => onSelect(value)}
      className={`cursor-pointer p-4 border rounded-lg ${
        isSelected ? "bg-primary text-white" : "bg-white text-black"
      }`}
    >
      {label}
    </div>
  );
};

export default SelectableCard;
