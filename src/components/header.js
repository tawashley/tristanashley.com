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
        display: 'flex'
      }}
    >
      <SiteLogo style={{
          height: 60,
      }} />
      <section style={{
        flex: 1,
        display: 'flex',
        borderLeft: '2px solid #074068',
        alignItems: 'center',
        marginLeft: 16
      }}>
        <h1 style={{ margin: 0, marginLeft: 16 }}>
            {siteTitle}
        </h1>
      </section>
      
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
