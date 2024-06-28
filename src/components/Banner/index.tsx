import { useProps } from "./useProps";
import { Layout } from "./Layout";

export const Banner = () => {
    // propsをスプレッド構文で渡す
    return <Layout {...useProps()} />;
};