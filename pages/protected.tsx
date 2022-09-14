import { withServerSideAuth } from "@clerk/nextjs/ssr";
import { NextPage } from "next";

export const getServerSideProps = withServerSideAuth(
  ({ req, resolvedUrl }) => {
    const REDIRECT_URL = `${process.env.CLERK_REDIRECT_URL}${resolvedUrl}`;
    const { sessionId } = req.auth;

    if (!sessionId) {
      return {
        redirect: {
          destination: `${process.env.CLERK_FRONT_END_URL}/sign-in?redirect_url=${REDIRECT_URL}`,
        },
      };
    }

    const { user } = req;
    // return the users primary email address.
    const email = user.emailAddresses.find((email) => {
      return email.id === user.primaryEmailAddressId;
    });
    console.log(email);
    return { props: {} };
  },
  { loadUser: true }
);

const ProtectedPage: NextPage = () => {
  return <div>Protected</div>;
};

export default ProtectedPage;
