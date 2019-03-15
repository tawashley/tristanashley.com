import PropTypes from "prop-types"
import React from "react"

import SiteLogo from './site-logo'

const Header = ({ siteTitle }) => (
  <header
    style={{
        borderTop: '4px solid #074068',
        color: '#074068'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `24px 0`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <SiteLogo style={{
          height: 60,
      }} />
      <h1 style={{ margin: 0, marginLeft: 16 }}>
        {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
