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
  personalInfoSchema,
} from "./Schemas";
import { AnimatePresence, motion } from "framer-motion";
import StepHeading from "./StepHeading";

const formSchema = z.object({
  personalInfo: personalInfoSchema,
  financialGoalsAndIncome: financialGoalsAndIncomeSchema,
  commitmentsAndExperience: commitmentsAndExperienceSchema,
});

type FormValues = z.infer<typeof formSchema>;

type MultiStepFormProps = {
  //@ts-ignore
  user: KindeUser | null;
};

const MultiStepForm = ({ user }: MultiStepFormProps) => {
  const router = useRouter();
  const [selectedCommitments, setSelectedCommitments] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

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
      setDirection(1);
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
      }, 50);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep - 1);
      }, 50);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <FirstStep
            form={form}
            currentStep={currentStep}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <SecondStep
            form={form}
            currentStep={currentStep}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <ThirdStep
            form={form}
            currentStep={currentStep}
            prevStep={prevStep}
            nextStep={nextStep}
            setSelectedCommitments={setSelectedCommitments}
            selectedCommitments={selectedCommitments}
          />
        );
      case 3:
        return (
          <div className="flex flex-col items-center justify-center w-full min-h-screen gap-5">
            <StepHeading headline="Do you want to submit?" />
            <div className="flex gap-5">
              {currentStep > 0 && (
                <Button type="button" onClick={prevStep}>
                  Back
                </Button>
              )}
              <Button type="submit">Submit</Button>
            </div>
          </div>
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
      <motion.form
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
        //@ts-ignore
        className="absolute inset-0 z-50 max-h-screen overflow-x-hidden "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 150 : -150,
                opacity: 0,
              }),
              center: {
                x: 0,
                opacity: 1,
              },
              exit: (direction: number) => ({
                x: direction < 0 ? 150 : -150,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </motion.form>
    </Form>
  );
};

export default MultiStepForm;
