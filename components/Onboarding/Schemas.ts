import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import z from "zod";
//@ts-ignore
export const getDefaultValues = (user: KindeUser) => ({
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
});

export const personalInfoSchema = z.object({
  basicInfo: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    nickname: z.string().min(1, "Nickname is required"),
    dateOfBirth: z
      .string({ required_error: "A date of birth is required." })
      .min(1),
  }),
  address: z.object({
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    postalCode: z
      .string()
      .min(1, "Postal code is required")
      .max(6, "Postal code must have 6 digits max")
      .refine((val) => !isNaN(Number(val)), "Postal code must be a number"),
    country: z.string().min(1, "Country is required"),
  }),
});

export const financialGoalsAndIncomeSchema = z.object({
  financialGoals: z.object({
    savingStrategy: z.string().min(1, "Saving strategy is required"),
  }),
  incomeDetails: z.object({
    incomeRange: z.string().min(1, "Income range is required"),
  }),
});

export const commitmentsAndExperienceSchema = z.object({
  commitments: z.object({
    commitments: z.array(z.string().min(1, "Commitment is required")),
  }),
  investmentExperience: z.object({
    investmentExperience: z
      .string()
      .min(1, "Investment experience is required"),
  }),
});
