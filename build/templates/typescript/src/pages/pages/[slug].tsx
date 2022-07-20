import { CustomPage } from "@ikas/storefront";
import { CustomPage as CustomPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/pages/[slug]";

const PageComponent = CustomPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticPaths = CustomPageNext.getStaticPaths;
export const getStaticProps = CustomPageNext.getStaticProps;
