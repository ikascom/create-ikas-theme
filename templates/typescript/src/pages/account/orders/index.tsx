import { OrdersPage } from "@ikas/storefront";
import { OrdersPage as OrdersPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/orders/index";

const PageComponent = OrdersPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = OrdersPageNext.getStaticProps;
