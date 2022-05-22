import * as React from "react"
import { graphql } from "gatsby"
import { AboutMePageQuery } from "../../graphql-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"

const AboutUsPage = ({ location }: PageProps<AboutMePageQuery>) => (
  <Layout location={location}>
    <>
      <Seo
        title="TheUnheards - A bit about Us"
        location={location}
        shouldAppendTitle={false}
        meta={{
          type: "website",
          title: "TheUnheards - A bit about Us",
          description: "Will be updating this soon.",
          keywords: "TheUnheards, TheUnheards by Monika Singh Chahal",
        }}
      />
      <div className="blog-page">
        <header>
          <h1 className="post-title">About</h1>
          <img
            className="about-me-image"
            src="/images/monika_singh_chahal.jpeg"
          />
          <p>
            Hey!, This is Monika Singh Chahal, a.k.a the unheard. A kindergarten
            teacher, an editor, a traveller, a blogger, and a social media
            content creator, are a few of the roles I have added to my bucket.
            For as long as I remember I found myself feeling and thinking about
            things quite differently from the rest of the people around me. More
            deeply, more personally, more emotionally and more often. It did
            earn me a title of an over-thinker, drama queen etc but I never
            quite understood it.
          </p>
          <p>
            Very later in life, I realised I had anxiety and traces of
            depression. Obviously a taboo I really did not open up about it. I
            acted as I was supposed to. Made it worse. Also, to tell you more I
            love reading, books are home to me, so I came across a lot of
            self-help books that helped me become more aware of my feelings and
            emotions. They guided me to work on myself. So I did. Definitely
            better and controlled, but yes it seems to become part of your
            personality, you can’t go back to being a carefree person, an
            unbothered one, you can’t just stop being an over-thinker, but well
            managed and composed. I am still working on myself and each day I
            feel proud of the person I’m becoming.
          </p>
          <p>
            I’m married to a great guy, who actually pushed me to pen down my
            journey. I always loved writing, poems, short write-ups etc. and
            always wanted to have my own blog, sharing my experiences. So I came
            up with ‘TheUnheards’ and added more people like me to the journey.
          </p>
          <p>
            As sad as some experiences may seem, I do live a happy life, I do
            enjoy moments, and for most, I’m an extrovert. I become a better
            version of myself each day and I’m focusing on my career the most. I
            love being independent and working hard keeps me going on. A foodie
            I love exploring new cuisines and going miles to taste specific
            dishes. Travelling is most important to me, it keeps my soul
            replenished.
          </p>
          <p>
            Being a kindergarten teacher has taught me plenty and helped me in
            tremendous ways. It gave me patience, the key to life and it helped
            me understand how humans operate. Trust me all adults are just a
            bigger version of the kids. It gave me empathy and trained me to be
            a communicator.
          </p>
          <p>
            Being a writer has made me realise the power of words, and the
            impact they can create on oneself and the readers. The art of
            expression and understanding oneself.
          </p>
          <p>
            So, here I am sharing the Beautiful. Honest. Unashamed version of my
            stories with you all!
          </p>
          <p>Hope you all will find a little of me in the abundance of you.</p>
        </header>
      </div>
    </>
  </Layout>
)

export default AboutUsPage

export const query = graphql`
  query AboutMePage {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
