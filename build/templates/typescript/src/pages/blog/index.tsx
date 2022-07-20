import { BlogPage } from "@ikas/storefront";
import { BlogPage as BlogPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/blog/index";

const PageComponent = BlogPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = BlogPageNext.getStaticProps;
