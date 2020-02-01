const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const webpack = require("webpack");
const path = require('path')

const withBabelMinify = require('next-babel-minify')()

const bundleAnalyzer = require('@next/bundle-analyzer');
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

// next.config.js
module.exports = withBundleAnalyzer(
    withBabelMinify(
        withCss(
            withPurgeCss({
              webpack: (config, {isServer}) => {
                if (isServer) {
                  const antStyles = /antd\/.*?\/style\/css.*?/
                  const origExternals = [...config.externals]

                  config.externals = [
                    (context, request, callback) => {
                      if (request.match(antStyles)) return callback()
                      if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback)
                      } else {
                        callback()
                      }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                  ];

                  config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader',
                  })
                }
                // config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(__dirname, 'src/client/icons.js');
                config.resolve.alias['@ant-design/icons$'] = path.join(__dirname, 'src/client/icons.js');
                config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),);
                return config
              },
              purgeCssEnabled: ({dev, isServer}) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
              purgeCss: {
                whitelist: ["html", "body", "ant-layout"],
                whitelistPatterns: [/^ant-/, /^fade-/, /^move-/, /^slide-/, /^zoom-/, /^svg-/, /^fa-/],
                whitelistPatternsChildren: [/^ant-/, /^fade-/, /^move-/, /^slide-/, /^zoom-/, /^svg-/, /^fa-/],
                extractors: [
                  {
                    extractor: TailwindExtractor,
                    extensions: ["html", "js", "css", "tsx"]
                  }
                ]
              }
            })
        )
    )
);
