import { darkTheme } from "@root/config";
import { ThemeProvider } from "next-themes";

type ProvidersProps = {
  children: React.ReactNode;
};
const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      disableTransitionOnChange={false}
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
};

export { Providers };
