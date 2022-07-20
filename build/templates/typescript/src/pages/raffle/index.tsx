import { RafflesPage } from "@ikas/storefront";
import { RafflesPage as RafflesPageNext } from "@ikas/storefront-next";
import Components from "src/components/__generated__/pages/raffle/index";

const PageComponent = RafflesPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = RafflesPageNext.getStaticProps;
