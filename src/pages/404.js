import * as React from "react"

import Seo from "../components/seo"

import PageWrap from '../components/pagewrap'

const NotFoundPage = () => (
  <PageWrap>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageWrap>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
