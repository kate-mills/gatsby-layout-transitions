import * as React from "react"
import { TransitionLink } from "gatsby-plugin-transitions";

import Seo from "../components/seo"
import PageWrap from '../components/pagewrap'

const SecondPage = () => (
  <PageWrap>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
  <TransitionLink to="/">Go back to the homepage</TransitionLink>
  </PageWrap>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
