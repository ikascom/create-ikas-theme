import { ForgotPasswordPage } from "@ikas/storefront";
import { ForgotPasswordPage as ForgotPasswordPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/forgot-password";

const PageComponent = ForgotPasswordPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = ForgotPasswordPageNext.getStaticProps;
