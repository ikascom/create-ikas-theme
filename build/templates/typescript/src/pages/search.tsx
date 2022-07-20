import { SearchPage } from "@ikas/storefront";
import { SearchPage as SearchPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/search";

const PageComponent = SearchPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = SearchPageNext.getStaticProps;
