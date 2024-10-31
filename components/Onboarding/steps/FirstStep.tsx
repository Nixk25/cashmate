import React, { useState } from "react";
import { useCountries } from "@/app/lib/useCountries";
import { UseFormReturn } from "react-hook-form";
import { DatePicker } from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StepHeading from "../StepHeading";

// Types
interface FirstStepProps {
  currentStep: number;
  nextStep: (fieldsToValidate: string[]) => void;
  prevStep: () => void;
  form: UseFormReturn<any>;
}

type Date = {
  day: string;
  month: string;
  year: string;
};

const FirstStep: React.FC<FirstStepProps> = ({
  currentStep,
  nextStep,
  prevStep,
  form,
}) => {
  const { countries } = useCountries();
  const [dateError, setDateError] = useState<string | null>(null);

  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: country.name,
    flag: country.flag,
  }));

  const handleCountryChange = (value: string) => {
    form.setValue("personalInfo.address.country", value);
  };

  const handleDateChange = (date: Date) => {
    const newDate = `${date.day}.${date.month}.${date.year}`;
    form.setValue("personalInfo.basicInfo.dateOfBirth", newDate);
    setDateError(null);
  };

  const currentDate = today(getLocalTimeZone());
  const minAgeDate = currentDate.subtract({ years: 18 });

  const validateDateOfBirth = () => {
    const dateOfBirth = form.getValues("personalInfo.basicInfo.dateOfBirth");
    if (!dateOfBirth) {
      setDateError("Date of birth is required");
      return false;
    }

    // Convert the date string into a Date object
    const [day, month, year] = dateOfBirth.split(".").map(Number);
    const birthDate = new Date(year, month - 1, day); // month - 1 because months are 0-indexed in JS

    // Get the current date and subtract 18 years
    const today = new Date();
    const minAgeDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    // Check if the user's birth date is before or equal to the min age date
    if (birthDate > minAgeDate) {
      setDateError("You must be at least 18 years old.");
      return false;
    }

    setDateError(null); // Clear any previous errors
    return true;
  };

  const handleNextStep = () => {
    if (validateDateOfBirth()) {
      nextStep([
        "personalInfo.basicInfo.firstName",
        "personalInfo.basicInfo.lastName",
        "personalInfo.basicInfo.dateOfBirth",
        "personalInfo.basicInfo.nickname",
        "personalInfo.address.address",
        "personalInfo.address.city",
        "personalInfo.address.postalCode",
        "personalInfo.address.country",
      ]);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10">
      <StepHeading headline="Tell us more about yourself" />

      <div className="container flex flex-col items-center justify-center max-w-[400px] w-full">
        <BasicInfoFields form={form} />
        <DateOfBirthField
          form={form}
          handleDateChange={handleDateChange}
          minAgeDate={minAgeDate}
          dateError={dateError}
        />
        <AddressFields
          form={form}
          countryOptions={countryOptions}
          handleCountryChange={handleCountryChange}
        />

        <NavigationButtons
          currentStep={currentStep}
          prevStep={prevStep}
          handleNextStep={handleNextStep}
        />
      </div>
    </section>
  );
};

const BasicInfoFields: React.FC<{ form: UseFormReturn<any> }> = ({ form }) => (
  <>
    <div className="flex w-full gap-5">
      <FormField
        control={form.control}
        name="personalInfo.basicInfo.firstName"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Your first name</FormLabel>
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
          <FormItem className="flex-1">
            <FormLabel>Your last name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Last Name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    <FormField
      control={form.control}
      name="personalInfo.basicInfo.nickname"
      render={({ field }) => (
        <FormItem className="w-full mt-3">
          <FormLabel>Your Nickname</FormLabel>
          <FormControl>
            <Input {...field} placeholder="Nickname" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </>
);

const AddressFields: React.FC<{
  form: UseFormReturn<any>;
  countryOptions: { value: string; label: string; flag: string }[];
  handleCountryChange: (value: string) => void;
}> = ({ form, countryOptions, handleCountryChange }) => (
  <div className="w-full mt-6">
    <div className="flex items-center justify-center gap-5">
      <FormField
        control={form.control}
        name="personalInfo.address.address"
        render={({ field }) => (
          <FormItem className="flex-1">
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
        name="personalInfo.address.postalCode"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Postal Code</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Postal Code" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    <FormField
      control={form.control}
      name="personalInfo.address.city"
      render={({ field }) => (
        <FormItem className="w-full mt-3">
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
      name="personalInfo.address.country"
      render={({ field }) => (
        <FormItem className="w-full mt-3" suppressHydrationWarning>
          <FormLabel>Country</FormLabel>
          <Select value={field.value || ""} onValueChange={handleCountryChange}>
            <SelectTrigger suppressHydrationWarning>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                {countryOptions.map(({ flag, label, value }) => (
                  <SelectItem key={value} value={label}>
                    <div className="flex items-center gap-2">
                      <img
                        src={flag}
                        alt={label}
                        className="object-cover size-4"
                      />
                      <div>{label}</div>
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
  </div>
);

const DateOfBirthField: React.FC<{
  form: UseFormReturn<any>;
  handleDateChange: (date: Date) => void;
  minAgeDate: any;
  dateError: string | null;
}> = ({ form, handleDateChange, minAgeDate, dateError }) => (
  <FormField
    control={form.control}
    name="personalInfo.basicInfo.dateOfBirth"
    render={({ field }) => (
      <FormItem className="w-full mt-3">
        <FormLabel>Your birthday</FormLabel>
        <FormControl>
          <DatePicker
            isRequired
            //@ts-ignore
            onChange={handleDateChange}
            aria-label="Birthday"
            popoverProps={{
              shouldCloseOnBlur: true,
            }}
            showMonthAndYearPickers
            maxValue={minAgeDate}
            errorMessage="You have to be at least 18 years old to use CashMate"
          />
        </FormControl>
        {dateError && <p className="text-sm text-red-500">{dateError}</p>}
        <FormDescription>
          You must be at least 18 years old to use CashMate
        </FormDescription>
      </FormItem>
    )}
  />
);

const NavigationButtons: React.FC<{
  currentStep: number;
  prevStep: () => void;
  handleNextStep: () => void;
}> = ({ currentStep, prevStep, handleNextStep }) => (
  <div className="flex justify-center mt-6">
    {currentStep > 0 && (
      <Button type="button" onClick={prevStep}>
        Back
      </Button>
    )}
    <Button className="px-10 ml-2" onClick={handleNextStep} type="button">
      Next
    </Button>
  </div>
);

export default FirstStep;
