import { CartPage } from "@ikas/storefront";
import { CartPage as CartPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/cart";

const PageComponent = CartPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = CartPageNext.getStaticProps;
