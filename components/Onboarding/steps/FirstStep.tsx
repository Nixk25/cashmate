import React from "react";
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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCountries } from "@/app/lib/useCountries";
import { UseFormReturn } from "react-hook-form";

interface FirstStepProps {
  currentStep: number;
  nextStep: (fieldsToValidate: string[]) => void;
  prevStep: () => void;
  form: UseFormReturn<any>; // Typ formuláře z react-hook-form
}
const FirstStep = ({
  currentStep,
  nextStep,
  prevStep,
  form,
}: FirstStepProps) => {
  const { countries } = useCountries();
  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: country.name,
    flag: country.flag,
  }));

  const handleCountryChange = (value: string) => {
    form.setValue("personalInfo.address.country", value);
  };
  return (
    <>
      <h2>Personal Information</h2>
      <FormField
        control={form.control}
        name="personalInfo.basicInfo.firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="First Name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="personalInfo.basicInfo.lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Last Name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="personalInfo.basicInfo.dateOfBirth"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Date of birth</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(new Date(field.value), "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  //@ts-ignore
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="personalInfo.basicInfo.nickname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your NickName</FormLabel>
            <FormControl>
              <Input {...field} placeholder="NickName" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="personalInfo.address.address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Address" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="personalInfo.address.city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input {...field} placeholder="City" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="personalInfo.address.postalCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Postal Code</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Postal Code" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="personalInfo.address.country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <Select
              value={field.value || ""}
              onValueChange={handleCountryChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  {countryOptions.map(({ flag, label, value }) => (
                    <SelectItem key={value} value={label}>
                      <div className="flex gap-2 items-center">
                        <img
                          src={flag}
                          alt={value}
                          className="size-4 object-cover"
                        />
                        <span>{label}</span>
                      </div>
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
            "personalInfo.basicInfo.firstName",
            "personalInfo.basicInfo.lastName",
            "personalInfo.basicInfo.dateOfBirth",
            "personalInfo.basicInfo.nickname",
            "personalInfo.address.address",
            "personalInfo.address.city",
            "personalInfo.address.postalCode",
            "personalInfo.address.country",
          ])
        }
        type="button"
      >
        Next
      </Button>
    </>
  );
};

export default FirstStep;
