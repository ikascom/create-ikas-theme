import { RecoverPasswordPage } from "@ikas/storefront";
import { RecoverPasswordPage as RecoverPasswordPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/recover-password";

const PageComponent = RecoverPasswordPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = RecoverPasswordPageNext.getStaticProps;
