import { NotFoundPage } from "@ikas/storefront";
import { NotFoundPage as NotFoundPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/404";

const PageComponent = NotFoundPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = NotFoundPageNext.getStaticProps;
