import { LoginPage } from "@ikas/storefront";
import { LoginPage as LoginPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/login";

const PageComponent = LoginPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = LoginPageNext.getStaticProps;
