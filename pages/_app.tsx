import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/nextjs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      appearance={{
        signIn: {
          elements: {
            formButtonPrimary: {
              color: "white",
              backgroundColor: "#5e1286",
            },
          },
        },
        variables: {
          colorPrimary: "red",
          colorBackground: "yellow",
        },
      }}
    >
      <SignedIn>
        <UserButton />
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

export default MyApp;
