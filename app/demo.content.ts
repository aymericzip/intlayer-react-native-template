import {
  t,
  enu,
  cond,
  insert,
  nest,
  md,
  html,
  file,
  gender,
  type Dictionary,
} from "intlayer";

const demoContent = {
  key: "demo-screen",
  content: {
    // Translation
    translation: t({
      en: "Hello World",
      fr: "Bonjour le monde",
      es: "Hola Mundo",
    }),

    // Enumeration
    enumeration: enu({
      "0": "No items",
      "1": "One item",
      ">1": "Many items",
    }),

    // Condition
    condition: cond({
      true: "Condition is true",
      false: "Condition is false",
    }),

    // Insertion
    insertion: insert("Hello {{name}}, you are {{age}} years old"),

    // Nested Content
    nested: nest("tab-two-screen"),

    // Markdown
    markdown: md("# Markdown Title\nThis is **bold** text."),

    // HTML
    htmlContent: html("<h1>HTML Title</h1><p>This is <b>bold</b> text.</p>"),

    // File
    fileContent: file("../assets/demo-file.txt"),

    // Function Fetching
    functionContent: () => "This content comes from a function",

    // Async Function Fetching
    asyncFunctionContent: async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return "This content comes from an async function";
    },

    // Gender
    genderContent: gender({
      male: "Hello Sir",
      female: "Hello Madam",
      fallback: "Hello",
    }),
  },
} satisfies Dictionary;

export default demoContent;
