"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  COMMITMENTS_OPTIONS,
  INVESTMENT_EXPERIENCES,
} from "@/app/lib/constants";
import SelectableCard from "../SelectableCard";
import { UseFormReturn } from "react-hook-form";
import StepHeading from "../StepHeading";
import { Label } from "@/components/ui/label";
interface ThirdStepProps {
  currentStep: number;
  nextStep: (fieldsToValidate: string[]) => void;
  prevStep: () => void;
  form: UseFormReturn<any>;
  setSelectedCommitments: (commitments: string[]) => void;
  selectedCommitments: string[];
}
const ThirdStep = ({
  currentStep,
  nextStep,
  prevStep,
  form,
  setSelectedCommitments,
  selectedCommitments,
}: ThirdStepProps) => {
  const handleCardSelect = (value: string) => {
    const currentValues = form.getValues(
      "commitmentsAndExperience.commitments.commitments"
    );
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item: any) => item !== value)
      : [...currentValues, value];

    setSelectedCommitments(updatedValues);
    form.setValue(
      "commitmentsAndExperience.commitments.commitments",
      updatedValues
    );
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10">
      <StepHeading headline="Commitments & Experience" />
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-5">
          <Label className="text-xl text-center">Select what you have</Label>
          <div className="flex flex-wrap justify-center w-full gap-5 ">
            {COMMITMENTS_OPTIONS.map((option) => (
              <SelectableCard
                key={option.value}
                label={option.label}
                value={option.value}
                isSelected={selectedCommitments.includes(option.value)}
                onSelect={handleCardSelect}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <FormField
            control={form.control}
            name="commitmentsAndExperience.investmentExperience.investmentExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Your Investment Experience</FormLabel>
                <Select
                  value={field.value || ""}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue(
                      "commitmentsAndExperience.investmentExperience.investmentExperience",
                      value
                    );
                    if (window !== undefined) {
                      localStorage.setItem(
                        "formData",
                        JSON.stringify(form.getValues())
                      );
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Investment Experience</SelectLabel>
                      {INVESTMENT_EXPERIENCES.map((option: any) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-center gap-5 my-5">
          {currentStep > 0 && (
            <Button type="button" onClick={prevStep}>
              Back
            </Button>
          )}
          <Button
            onClick={() =>
              nextStep([
                "commitmentsAndExperience.commitments.commitments",
                "commitmentsAndExperience.investmentExperience.investmentExperience",
              ])
            }
            type="button"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
