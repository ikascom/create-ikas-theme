import { OrderDetailPage } from "@ikas/storefront";
import { OrderDetailPage as OrderDetailPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/orders/[id]";

const PageComponent = OrderDetailPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getServerSideProps = OrderDetailPageNext.getServerSideProps;
