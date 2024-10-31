"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SAVING_STRATEGIES, INCOME_RANGES } from "@/app/lib/constants";
import { UseFormReturn } from "react-hook-form";
import StepHeading from "../StepHeading";

interface SecondStepProps {
  currentStep: number;
  nextStep: (fieldsToValidate: string[]) => void;
  prevStep: () => void;
  form: UseFormReturn<any>;
}
const SecondStep = ({
  currentStep,
  nextStep,
  prevStep,
  form,
}: SecondStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-10">
      <StepHeading headline="Financial Goals & Income" />
      <div className="container">
        <div className="flex items-center justify-center gap-5">
          <FormField
            control={form.control}
            name="financialGoalsAndIncome.financialGoals.savingStrategy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Saving Strategy</FormLabel>
                <Select
                  required
                  value={field.value || ""}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue(
                      "financialGoalsAndIncome.financialGoals.savingStrategy",
                      value
                    );
                    localStorage.setItem(
                      "formData",
                      JSON.stringify(form.getValues())
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Saving Strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Saving Strategy</SelectLabel>
                      {SAVING_STRATEGIES.map((option: any) => (
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

          <FormField
            control={form.control}
            name="financialGoalsAndIncome.incomeDetails.incomeRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Your Income Range</FormLabel>
                <Select
                  required
                  value={field.value || ""}
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue(
                      "financialGoalsAndIncome.incomeDetails.incomeRange",
                      value
                    );
                    localStorage.setItem(
                      "formData",
                      JSON.stringify(form.getValues())
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Your Income Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Income Ranges</SelectLabel>
                      {INCOME_RANGES.map((option: any) => (
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
        <div className="flex justify-center gap-5 mt-5">
          {currentStep > 0 && (
            <Button type="button" onClick={prevStep}>
              Back
            </Button>
          )}
          <Button
            onClick={() =>
              nextStep([
                "financialGoalsAndIncome.financialGoals.savingStrategy",
                "financialGoalsAndIncome.incomeDetails.incomeRange",
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

export default SecondStep;
