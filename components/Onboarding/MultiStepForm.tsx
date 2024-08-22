"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Form } from "@/components/ui/form";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import {
  commitmentsAndExperienceSchema,
  financialGoalsAndIncomeSchema,
  getDefaultValues,
  personalInfoSchema,
} from "./Schemas";
import { AnimatePresence } from "framer-motion";
import AnimateStep from "./AnimateStep";

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
  const [selectedCommitments, setSelectedCommitments] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [initialValues, setInitialValues] = useState<FormValues>(() => {
    if (typeof window !== "undefined") {
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
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        setInitialValues(JSON.parse(savedData));
      }
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(form.getValues()));
    }
  }, [form.watch()]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        form.reset(JSON.parse(savedData));
      }
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
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid && currentStep < 3) {
      if (typeof window !== "undefined") {
        localStorage.setItem("currentStep", (currentStep + 1).toString());
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      if (typeof window !== "undefined") {
        localStorage.setItem("currentStep", (currentStep - 1).toString());
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <AnimateStep>
            <FirstStep
              form={form}
              currentStep={currentStep}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </AnimateStep>
        );
      case 1:
        return (
          <AnimateStep>
            <SecondStep
              form={form}
              currentStep={currentStep}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </AnimateStep>
        );
      case 2:
        return (
          <AnimateStep>
            <ThirdStep
              form={form}
              currentStep={currentStep}
              prevStep={prevStep}
              nextStep={nextStep}
              setSelectedCommitments={setSelectedCommitments}
              selectedCommitments={selectedCommitments}
            />
          </AnimateStep>
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
      <form
        className="absolute inset-0 z-50"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {renderStep()}
      </form>
    </Form>
  );
};

export default MultiStepForm;
