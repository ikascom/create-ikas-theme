import { AddressesPage } from "@ikas/storefront";
import { AddressesPage as AddressesPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/addresses";

const PageComponent = AddressesPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = AddressesPageNext.getStaticProps;
