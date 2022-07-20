import { RegisterPage } from "@ikas/storefront";
import { RegisterPage as RegisterPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/register";

const PageComponent = RegisterPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = RegisterPageNext.getStaticProps;
