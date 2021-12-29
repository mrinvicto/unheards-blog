// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const title = "What are we?"
const description = ""

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  <Layout title={"The Unheards"} location={location}>
    <Seo title={title} description={description} />
    <h1>What are we?</h1>
    <p>
      Mental illness has been a stigma for like forever now, even in times like
      these. It’s the year 2020, the age of the millennials. Most of the half
      are struggling with things “we are not supposed to talk about”.
    </p>
    <p>
      We were supposed to change the world, well, guess we did it! We made it
      unbearable.
    </p>
    <blockquote>
      We are guided but not understood Loved but not secured Encouraged but not
      comforted Cared for but not looked after We are someone they listen to but
      not hear. The Unheards.
      <p>-Monika Singh Chahal</p>
    </blockquote>
    <p>
      So here’s a small attempt to change it. To share stories of not only
      success but all failed attempts too. Not only struggles but of giving up
      too.{" "}
      <b>
        The stories of souls apart from the herd. The stories still in progress.
      </b>
    </p>
    <p>
      Let the world hear you, Let us make all stories something to hear about
      because we were all made special and different. No success is independent
      of struggles, of it’s daunting past.
    </p>
    <p>
      Let us tear down the picture of the ideal life they make us chase,{" "}
      <b>
        An attempt to reveal the truest and the most beautiful souls of society.
        An attempt not for an ideal life, but a comforting world.
      </b>{" "}
      Where these unheard are heard and understood. For that’s what we all want,
      deep down in there.
    </p>
    <p>To be heard and understood.</p>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
