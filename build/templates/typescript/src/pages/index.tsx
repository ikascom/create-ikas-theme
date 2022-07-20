import { IndexPage } from "@ikas/storefront";
import { IndexPage as IndexPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/index";

const PageComponent = IndexPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = IndexPageNext.getStaticProps;
