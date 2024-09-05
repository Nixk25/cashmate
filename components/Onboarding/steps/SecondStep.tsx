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
import { SAVING_STRATEGIES, INCOME_RANGES } from "@/app/lib/constants";
import { UseFormReturn } from "react-hook-form";

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
    <>
      <h2>Financial Goals & Income</h2>
      <FormField
        control={form.control}
        name="financialGoalsAndIncome.financialGoals.savingStrategy"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Saving Strategy</FormLabel>
            <Select
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
    </>
  );
};

export default SecondStep;
