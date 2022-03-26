import { CatgeoryPageDetails } from "../models/CatgeoryPageDetails"

// Default site properties
export const SITE_URL = "https://ladwhocodes.com"
export const BLOG_HOME_TITLE = "LadWhoCodes"
export const BLOG_TITLE_SUFFIX = "LadWhoCodes"
export const BLOG_DESCRIPTION = "LadWhoCodes in the best blog"
export const BLOG_KEYWORDS = "LadWhoCodes, Dinesh Verma"
export const HOMEPAGE_TITLE = "LadWhoCodes - Hello World"
export const BLOG_LIST_PAGE_TITLE_PREFIX = "LadWhoCodes"

// 404 Error page
export const NOT_FOUND_PAGE_TITLE = "404 - Page Not Found"
export const NOT_FOUND_DESCRIPTION =
  "Sorry, the page you are looking for is no longer available on LadWhoCodes."

// Twitter social handles
export const TWITTER_CREATOR_HANDLE = "@dineshverma"
export const SITE_TWITTER_HANDLE = "@dineshverma"

// Default OG Tag values
export const DEFAULT_OG_SHARE_IMAGE =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD7n83jJkBG2P-P6QaDVJ3wOVeHkDKYjet4J2ZL-3hzROrFCOb5jmUFK13n9NYu0ItRn5khcESYzVg_nhTdaE1j6oXQ4wKXYJUpC8cWnZT9dtC2D9KxocjFXK6WcSwOLIpF_ScxpkbHjIbh-gfBkbMhnKQzaonwhUrP6SzofVBlifDF1bt9dgE3beAEQ/s1600/og-default.png"
export const OG_ABOUT_ME_PAGE = "https://ladwhocodes.com/about"

// Category page values
export const CATEGORY_DETAILS: { [key: string]: CatgeoryPageDetails } = {
  java: {
    title: "Java",
    description:
      "Read latest tutorials involving Java which is one of the mosty popular programming languages. Java is used to make Backend applications, mobile apps, desktop apps, games and much more.",
    keywords:
      "Java programming tutorials, Java coding language, Latest Java updates, coding in java, Java tutorials, How to become better programmer with Java",
    excerpt:
      "Java is one of the most popular programming languages in the world.",
  },
  flutter: {
    title: "Flutter",
    description:
      "Read latest tutorials about flutter which in an open source framework developed by Google to make cross platform applications.",
    keywords:
      "Flutter performance optimizations, flutter performance, flutter application development tutorials, how to make apps using flutter",
    excerpt:
      "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
  },
  "react-native": {
    title: "React Native",
    description:
      "Read latest articles about React Native. Learn to create cross platform applications using React Native and how to performance tune the application.",
    keywords:
      "React Native application development tutorials, performance optimizations in React Native, React Native performance optimizations, React Native fixes",
    excerpt:
      "React Native is a cross platform mobile application development framework designed by Facebook.",
  },
}
