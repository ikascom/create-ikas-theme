import { AccountPage } from "@ikas/storefront";
import { AccountPage as AccountPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/index";

const PageComponent = AccountPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = AccountPageNext.getStaticProps;
