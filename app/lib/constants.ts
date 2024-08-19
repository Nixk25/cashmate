// ONBOARDING CONSTANTS

export const STEPS = [
  "Basic Information",
  "Address Details",
  "Financial Goals",
  "Income Details",
  "Commitments",
  "Investment Experience",
];

export const SAVING_STRATEGIES = [
  {
    value: "50/30/20",
    label: "50/30/20 - 50% essentials, 30% personal, 20% savings",
  },
  { value: "80/20", label: "80/20 - 80% expenses, 20% savings" },
  {
    value: "70/20/10",
    label: "70/20/10 - 70% expenses, 20% savings, 10% investments",
  },
];

export const INCOME_RANGES = [
  { value: "0-2000", label: "$0 - $2,000" },
  { value: "2000-5000", label: "$2,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000-20000", label: "$10,000 - $20,000" },
  { value: "20000+", label: "$20,000+" },
];

export const COMMITMENTS_OPTIONS = [
  {
    value: "mortgage",
    label: "Mortgage",
  },
  {
    value: "carLoan",
    label: "Car Loan",
  },
  {
    value: "studentLoan",
    label: "Student Loan",
  },
  {
    value: "creditCard",
    label: "Credit Card",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const INVESTMENT_EXPERIENCES = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export const INPUTS = [
  {
    name: "basicInfo.firstName",
    label: "First Name",
    type: "text",
  },
  {
    name: "basicInfo.lastName",
    label: "Last Name",
    type: "text",
  },
  {
    name: "basicInfo.nickname",
    label: "Nickname",
    type: "text",
  },
  {
    name: "basicInfo.dateOfBirth",
    label: "Date of Birth",
    type: "date",
  },
  {
    name: "address.address",
    label: "Address",
    type: "text",
  },
  {
    name: "address.city",
    label: "City",
    type: "text",
  },
  {
    name: "address.postalCode",
    label: "Postal Code",
    type: "text",
  },
  {
    name: "address.country",
    label: "Country",
    type: "countrySelect",
  },
  {
    name: "financialGoals.savingStrategy",
    label: "Saving Strategy",
    type: "select",
    options: SAVING_STRATEGIES,
  },
  {
    name: "incomeDetails.incomeRange",
    label: "Income Range",
    type: "select",
    options: INCOME_RANGES,
  },
  {
    name: "commitments.commitments",
    label: "Commitments",
    type: "multiselect",
    options: COMMITMENTS_OPTIONS,
  },
  {
    name: "investmentExperience.investmentExperience",
    label: "Investment Experience",
    type: "select",
    options: INVESTMENT_EXPERIENCES,
  },
];

// SIGNUP CONSTANTS

export const PROS = [
  {
    text: "Comprehensive financial tools: We offer a wide range of tools for effective financial management.",
  },
  {
    text: "Personalized financial advice: Get tailored tips and advice to help you plan and save better.",
  },
  {
    text: "Expense and income analysis: Track your expenses and income in real-time ",
  },

  {
    text: "Security first: Your data is protected with state-of-the-art security standards.",
  },
];

// BANNER CONSTANTS

export const ACTIONS = [
  {
    heading: "Users track income and expenses",
  },
  {
    heading: "Set budgets and financial goals",
  },
  {
    heading: "Gain insights from financial experts",
  },
];

// EXPERTS CONSTANTS

import first from "../../public/firstman.jpeg";
import second from "../../public/secondwoman.jpeg";
import third from "../../public/third.jpeg";
import fourth from "../../public/fourth.jpeg";
import fifth from "../../public/fifth.jpeg";
export const EXPERTS = [
  {
    name: "John Smith",
    description:
      "With over 20 years of experience in investment banking, John specializes in mergers and acquisitions, providing strategic financial advice to clients worldwide.",
    image: first,
  },
  {
    name: "Emily Chen",
    description:
      "Emily is a seasoned portfolio manager, known for her expertise in risk management and asset allocation. She has a strong track record of delivering consistent returns for her clients.",
    image: second,
  },
  {
    name: "Michael Johnson",
    description:
      "Michael is a financial analyst renowned for his deep understanding of market trends and economic indicators. He frequently publishes insightful research reports that are highly regarded by investors.",
    image: third,
  },
  {
    name: "Sarah Patel",
    description:
      "Sarah is a financial planner dedicated to helping individuals and families achieve their financial goals. She provides personalized advice on budgeting, saving, and retirement planning.",
    image: fourth,
  },
  {
    name: "David Lee",
    description:
      "David is an expert in corporate finance, specializing in capital raising and financial restructuring. He has successfully led numerous complex transactions for both public and private companies.",
    image: fifth,
  },
];

export const PEOPLE = [
  {
    id: 1,
    name: "John Doe",
    designation: "Financial guru",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Bank manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Freelancer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Random guy",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "CEO of Bank ",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

//PRICING CONSTANTS

export const FREEADVANTAGES = [
  { advantage: "Up to 1 user" },
  { advantage: "Basic support" },
  { advantage: "Access to core features" },
];

export const PAIDADVANTAGES = [
  { advantage: "Unlimited users" },
  { advantage: "System analytics" },
  { advantage: "30-day free trial" },
  { advantage: "Chat support 24/7" },
  { advantage: "Advanced support services" },
];

//NAVBAR CONSTANTS

export const NAVLINKS = [
  { href: "#features", title: "Features" },
  { href: "#pricing", title: "Pricing" },
];
