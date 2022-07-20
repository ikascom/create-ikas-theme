import { RafflePage } from "@ikas/storefront";
import { RafflePage as RafflePageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/raffle/[slug]";

const PageComponent = RafflePage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticPaths = RafflePageNext.getStaticPaths;
export const getStaticProps = RafflePageNext.getStaticProps;
