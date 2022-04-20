import * as React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Footer = () => {
  const _handleSubmit = async (e: any) => {
    e.preventDefault()
    const emailId = e.target[0].value
    // const firstName = e.target[1].value
    // const lastName = e.target[2].value
    const result = await addToMailchimp(emailId, {
      PATHNAME: window.location,
      // FNAME: firstName,
      // LNAME: lastName,
    })
    console.log({ result })
  }

  return (
    <div className="bottom-footer">
      <div className="subscribe-footer">
        <div className="container is-max-widescreen">
          <div className="p-6">
            <div className="column is-half is-offset-one-quarter">
              <p className="subscribe-text">
                Subscribe to our weekly newsletter.
              </p>
              <form id="mail-chimp-form" onSubmit={_handleSubmit}>
                <input id="email_id" type={"text"} />
                {/* <input id={"first_name"} type={"text"} />
                <input id={"last_name"} type={"text"} /> */}
                <input
                  id="mail-chimp-submit"
                  type={"submit"}
                  value={"Subscribe"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="links-footer">
        <div className="container is-max-widescreen">
          <div className="column p-6">
            <div className="column is-two-thirds p-6">
              <div>TheUnheards</div>
              <div>TheUnheards is a blah blha blah ...</div>
            </div>
            <div className="column p-6">
              <div>Title</div>
              <ol>
                <li>Something</li>
                <li>Something Else</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
