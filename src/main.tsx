import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "flowbite-react";

const mainTheme = createTheme({
  checkbox: {
    color: {
      default:
        "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        },
      },
    },
  },
  select: {
    field: {
      select: {
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        },
      },
    },
  },
  tabs: {
    tablist: {
      tabitem: {
        variant: {
          default: {
            active: {
              on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            },
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
