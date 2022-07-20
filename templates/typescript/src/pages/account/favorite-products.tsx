import { FavoriteProductsPage } from "@ikas/storefront";
import { FavoriteProductsPage as FavoriteProductsPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/account/favorite-products";

const PageComponent = FavoriteProductsPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = FavoriteProductsPageNext.getStaticProps;
