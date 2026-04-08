import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "motin_site_copy/**",
      "public/legacy/**",
      "styles/**",
      "temporary screenshots/**",
    ],
  },
];

export default eslintConfig;
