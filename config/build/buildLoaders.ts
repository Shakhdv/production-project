import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";
import loader from "mini-css-extract-plugin/types/loader";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
              isDev? 'style-loader' : MiniCssExtractPlugin.loader,
              {
                    loader: "css-loader",
                    options: {
                        modules: {
                        auto: (resPath:string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev?'[path][name]__[local]--[hash:base64:5]':'[hash:base64:8]',
                        },
                    }
              },
              "sass-loader",
            ],
          }
    

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}
