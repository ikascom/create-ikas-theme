import * as React from "react";
import { AppProps } from "next/app";
import { IkasStorefrontConfig } from "@ikas/storefront-config";

import Config from "config.json";

// You can remove this and add your own styles
import "src/styles/global.css";

IkasStorefrontConfig.init({
  ...Config,
  apiUrl: process.env.NEXT_PUBLIC_GQL_URL,
  adminApiUrl: process.env.NEXT_PUBLIC_UPLOAD_GQL_URL,
  cdnUrl: process.env.NEXT_PUBLIC_IMG_BASE_URL,
});

const IkasThemeApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default IkasThemeApp;
