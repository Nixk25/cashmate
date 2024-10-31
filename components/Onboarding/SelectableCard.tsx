"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
    <Card
      onClick={() => onSelect(value)}
      className={`cursor-pointer p-4 border rounded-lg min-w-[500px] ${
        isSelected ? "bg-primary text-white" : "bg-white text-black"
      }`}
    >
      <CardHeader>ICON</CardHeader>
      <CardContent>{label}</CardContent>
    </Card>
  );
};

export default SelectableCard;
