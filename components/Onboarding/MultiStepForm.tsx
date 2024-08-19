import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
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
import { INPUTS, COMMITMENTS_OPTIONS } from "@/app/lib/constants";
import SelectableCard from "./SelectableCard";
import { useCountries } from "@/app/lib/useCountries";
import Image from "next/image";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

const basicInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  nickname: z.string().min(1, "Nickname is required"),
  dateOfBirth: z.date({
    required_error: "A date of birth is required.",
  }),
});

const addressDetailsSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z
    .string()
    .min(1, "Postal code is required")
    .max(6, "Postal code must have 6 digits max")
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), "Postal code must be a number"),
  country: z.string().min(1, "Country is required"),
});

const financialGoalsSchema = z.object({
  savingStrategy: z.string().min(1, "Saving strategy is required"),
});

const incomeDetailsSchema = z.object({
  incomeRange: z.string().min(1, "Income range is required"),
});

const commitmentsSchema = z.object({
  commitments: z.array(z.string().min(1, "Commitment is required")),
});

const investmentExperienceSchema = z.object({
  investmentExperience: z.string().min(1, "Investment experience is required"),
});

const formSchema = z.object({
  basicInfo: basicInfoSchema,
  address: addressDetailsSchema,
  financialGoals: financialGoalsSchema,
  incomeDetails: incomeDetailsSchema,
  commitments: commitmentsSchema,
  investmentExperience: investmentExperienceSchema,
});

type MultiStepFormProps = {
  user: KindeUser | null;
};

type FormValues = z.infer<typeof formSchema>;

const MultiStepForm = ({ user }: MultiStepFormProps) => {
  const [selectedCommitments, setSelectedCommitments] = useState<string[]>([]);
  const { countries } = useCountries();
  const [initialValues, setInitialValues] = useState<FormValues | null>(null);

  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: country.name,
    flag: country.flag,
  }));

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setInitialValues(parsedData);
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basicInfo: {
        firstName: "",
        lastName: "",
        nickname: "",
        dateOfBirth: undefined,
      },
      address: { address: "", city: "", postalCode: undefined, country: "" },
      financialGoals: { savingStrategy: "" },
      incomeDetails: { incomeRange: "" },
      commitments: { commitments: [] },
      investmentExperience: { investmentExperience: "" },
      ...initialValues, // Add initial values from localStorage
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      localStorage.setItem("formData", JSON.stringify(values));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [form]);

  useEffect(() => {
    const storedCommitments = form.getValues("commitments.commitments");
    setSelectedCommitments(storedCommitments);
  }, [form.getValues("commitments.commitments")]);

  const handleCardSelect = (value: string) => {
    const currentValues = form.getValues("commitments.commitments");
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setSelectedCommitments(updatedValues);
    form.setValue("commitments.commitments", updatedValues);
  };

  const renderInput = (input: any) => {
    switch (input.type) {
      case "text":
        return (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={input.label} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "date":
        return (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name}
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
                          format(field.value, "PPP")
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
        );
      case "select":
        return (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <Select
                  value={field.value || ""} // Ensure the value is correctly set
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue(input.name, value); // Save the value to form state
                    localStorage.setItem(
                      "formData",
                      JSON.stringify(form.getValues())
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${input.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{input.label}</SelectLabel>
                      {input.options.map((option: any) => (
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
        );
      case "multiselect":
        return (
          <FormField
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                {input.options.map((option: any) => (
                  <SelectableCard
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    isSelected={selectedCommitments.includes(option.value)}
                    onSelect={handleCardSelect}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case "countrySelect":
        return (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{input.label}</FormLabel>
                <Select
                  value={field.value || ""} // Ensure the value is correctly set
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.setValue(input.name, value); // Save the value to form state
                    localStorage.setItem(
                      "formData",
                      JSON.stringify(form.getValues())
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${input.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{input.label}</SelectLabel>
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
        );
      default:
        return null;
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    localStorage.removeItem("formData");
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex relative z-50"
      >
        {INPUTS.map((input, index) => (
          <div key={index}>{renderInput(input)}</div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
