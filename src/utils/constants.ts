import { CatgeoryPageDetails } from "../models/CatgeoryPageDetails"

// Default site properties
export const SITE_URL = "https://theunheards.com"
export const BLOG_HOME_TITLE = "TheUnheards"
export const BLOG_TITLE_SUFFIX = "TheUnheards"
export const BLOG_DESCRIPTION =
  "TheUnheards is a blog about people who are unheards."
export const BLOG_KEYWORDS = "TheUnheards, TheUnheards by Monika Singh Chahal"
export const HOMEPAGE_TITLE = "TheUnheards - Beautiful, Honest & Unashamed"
export const BLOG_LIST_PAGE_TITLE_PREFIX = "TheUnheards"

// 404 Error page
export const NOT_FOUND_PAGE_TITLE = "404 - Page Not Found"
export const NOT_FOUND_DESCRIPTION =
  "Sorry, the page you are looking for is no longer available on TheUnheards."

// Twitter social handles
export const TWITTER_CREATOR_HANDLE = "@dineshverma"
export const SITE_TWITTER_HANDLE = "@dineshverma"

// Default OG Tag values
export const DEFAULT_OG_SHARE_IMAGE =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD7n83jJkBG2P-P6QaDVJ3wOVeHkDKYjet4J2ZL-3hzROrFCOb5jmUFK13n9NYu0ItRn5khcESYzVg_nhTdaE1j6oXQ4wKXYJUpC8cWnZT9dtC2D9KxocjFXK6WcSwOLIpF_ScxpkbHjIbh-gfBkbMhnKQzaonwhUrP6SzofVBlifDF1bt9dgE3beAEQ/s1600/og-default.png"
export const OG_ABOUT_ME_PAGE = "https://theunheards.com/about"

// Category page values
export const CATEGORY_DETAILS: { [key: string]: CatgeoryPageDetails } = {
  stories: {
    title: "Stories",
    description:
      "A well curated list of stories. This is just a small description here.",
    keywords: "TheUnheards stories, TheUnheards stories by Monika Singh Chahal",
    excerpt:
      "A well curated list of stories. This is just a small description here and will show up on category page.",
  },
}
