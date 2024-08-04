export type Email = {
  sent_from: string;
  title: string;
  body: string;
  sent_date: Date;
};

export type DayTime = "morning" | "afternoon" | "evening";

export const emails: Email[] = [
  {
    sent_from: "@coinbase",
    title: "Design User Registration Process",
    body: "Design the user registration process as outlined in the project requirements.",
    sent_date: new Date(2024, 7, 16, 9, 0),
  },
  {
    sent_from: "@apple",
    title: "Review and Feedback on Wireframes",
    body: "Review and provide feedback on the wireframes for the new design concept.",
    sent_date: new Date(2024, 7, 16, 9, 50),
  },
  {
    sent_from: "@shopify",
    title: "Mood Board for Ecommerce Template",
    body: "Create a mood board for the ecommerce template design.",
    sent_date: new Date(2024, 7, 16, 10, 35),
  },
  {
    sent_from: "@apple",
    title: "Finalize Color Palette and Typography",
    body: "Finalize the color palette and typography for the project.",
    sent_date: new Date(2024, 7, 16, 13, 0),
  },
  {
    sent_from: "@insurance",
    title: "Analyze User Feedback",
    body: "Analyze user feedback and suggest improvements based on findings.",
    sent_date: new Date(2024, 7, 16, 13, 25),
  },
  {
    sent_from: "@shopify",
    title: "Evaluate Website Layouts",
    body: "Evaluate two potential website layouts for feasibility and design.",
    sent_date: new Date(2024, 7, 16, 14, 25),
  },
  {
    sent_from: "@coinbase",
    title: "Identify User Registration Issues",
    body: "Identify issues in the user registration process and propose solutions.",
    sent_date: new Date(2024, 7, 16, 19, 0),
  },
];
