import React from "react";
import { Provider } from "react-redux";
import { wrapper } from "../app/store";

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
