import { SlugPage } from "@ikas/storefront";
import { SlugPage as SlugPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/[slug]/index";

const PageComponent = SlugPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticPaths = SlugPageNext.getStaticPaths;
export const getStaticProps = SlugPageNext.getStaticProps;
