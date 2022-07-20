import { BlogSlugPage } from "@ikas/storefront";
import { BlogSlugPage as BlogSlugPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/blog/[slug]";

const PageComponent = BlogSlugPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticPaths = BlogSlugPageNext.getStaticPaths;
export const getStaticProps = BlogSlugPageNext.getStaticProps;
