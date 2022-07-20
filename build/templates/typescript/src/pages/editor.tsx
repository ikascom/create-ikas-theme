import { EditorPage } from "@ikas/storefront";
import { EditorPage as EditorPageNext } from "@ikas/storefront-next";
import Components from "../components/__generated__/editor";

const PageComponent = EditorPage.default;

const Page = (props: any) => {
  return <PageComponent components={Components} {...props} />;
};

export default Page;
export const getStaticProps = EditorPageNext.getStaticProps;
