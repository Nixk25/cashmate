"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  COMMITMENTS_OPTIONS,
  SAVING_STRATEGIES,
  INCOME_RANGES,
  INVESTMENT_EXPERIENCES,
} from "@/app/lib/constants";
import SelectableCard from "./SelectableCard";
import { useCountries } from "@/app/lib/useCountries";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const personalInfoSchema = z.object({
  basicInfo: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    nickname: z.string().min(1, "Nickname is required"),
    dateOfBirth: z.any({ required_error: "A date of birth is required." }),
  }),
  address: z.object({
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    postalCode: z
      .string()
      .min(1, "Postal code is required")
      .max(6, "Postal code must have 6 digits max")
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), "Postal code must be a number"),
    country: z.string().min(1, "Country is required"),
  }),
});

const financialGoalsAndIncomeSchema = z.object({
  financialGoals: z.object({
    savingStrategy: z.string().min(1, "Saving strategy is required"),
  }),
  incomeDetails: z.object({
    incomeRange: z.string().min(1, "Income range is required"),
  }),
});

const commitmentsAndExperienceSchema = z.object({
  commitments: z.object({
    commitments: z.array(z.string().min(1, "Commitment is required")),
  }),
  investmentExperience: z.object({
    investmentExperience: z
      .string()
      .min(1, "Investment experience is required"),
  }),
});

const formSchema = z.object({
  personalInfo: personalInfoSchema,
  financialGoalsAndIncome: financialGoalsAndIncomeSchema,
  commitmentsAndExperience: commitmentsAndExperienceSchema,
});

type FormValues = z.infer<typeof formSchema>;

type MultiStepFormProps = {
  user: KindeUser | null;
};

const MultiStepForm = ({ user }: MultiStepFormProps) => {
  const router = useRouter();
  const { countries } = useCountries();
  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: country.name,
    flag: country.flag,
  }));

  const [selectedCommitments, setSelectedCommitments] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const savedStep = localStorage.getItem("currentStep");
    return savedStep ? parseInt(savedStep) : 0;
  });

  const [initialValues, setInitialValues] = useState<FormValues>(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          personalInfo: {
            basicInfo: {
              firstName: user?.given_name ?? "",
              lastName: user?.family_name ?? "",
              nickname: "",
              dateOfBirth: null,
            },
            address: {
              address: "",
              city: "",
              postalCode: undefined,
              country: "",
            },
          },
          financialGoalsAndIncome: {
            financialGoals: { savingStrategy: "" },
            incomeDetails: { incomeRange: "" },
          },
          commitmentsAndExperience: {
            commitments: { commitments: [] },
            investmentExperience: { investmentExperience: "" },
          },
        };
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    // Uložení hodnot do localStorage při každé změně hodnoty formuláře
    localStorage.setItem("formData", JSON.stringify(form.getValues()));
  }, [form.watch()]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");

    if (savedData) {
      form.reset(JSON.parse(savedData));
    }
  }, [currentStep]);

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
      setSelectedCommitments(
        initialValues.commitmentsAndExperience.commitments.commitments || []
      );
    }
  }, [initialValues, form]);

  const nextStep = async (fieldsToValidate: string[]) => {
    //@ts-ignore
    const isValid = await form.trigger(fieldsToValidate); // Spustí validaci konkrétních polí

    if (isValid && currentStep < 3) {
      localStorage.setItem("currentStep", (currentStep + 1).toString());
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      localStorage.setItem("currentStep", (currentStep - 1).toString());
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCardSelect = (value: string) => {
    const currentValues = form.getValues(
      "commitmentsAndExperience.commitments.commitments"
    );
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setSelectedCommitments(updatedValues);
    form.setValue(
      "commitmentsAndExperience.commitments.commitments",
      updatedValues
    );
  };

  const handleCountryChange = (value: string) => {
    form.setValue("personalInfo.address.country", value);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
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
      case 1:
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
      case 2:
        return (
          <>
            <h2>Commitments & Experience</h2>
            {COMMITMENTS_OPTIONS.map((option) => (
              <SelectableCard
                key={option.value}
                label={option.label}
                value={option.value}
                isSelected={selectedCommitments.includes(option.value)}
                onSelect={handleCardSelect}
              />
            ))}
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
          </>
        );
      case 3:
        return (
          <>
            <h2>Review & Submit</h2>
            {currentStep > 0 && (
              <Button type="button" onClick={prevStep}>
                Back
              </Button>
            )}
            <Button type="submit">Submit</Button>
          </>
        );
      default:
        return null;
    }
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    router.push("/dashboard");
  };
  return (
    <Form {...form}>
      <form className="relative z-50" onSubmit={form.handleSubmit(onSubmit)}>
        {renderStep()}
      </form>
    </Form>
  );
};

export default MultiStepForm;
