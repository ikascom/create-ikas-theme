import { AccountRafflesPage } from "@ikas/storefront";
import { AccountRafflesPage as AccountRafflesPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/raffles";

const PageComponent = AccountRafflesPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = AccountRafflesPageNext.getStaticProps;
