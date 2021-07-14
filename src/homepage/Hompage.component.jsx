import React from 'react'

import "./Homepage.styles.scss";

const Hompage = () => {
  return (
    <div className="homepage">

      <div className="banner">
        <div className="banner-desc">
          <h1 className="text-thin">
            <strong>See</strong>&nbsp;everything with&nbsp;<strong>Clarity</strong>
          </h1>
          <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
          <br />
            <a className="button" href="/shop">Shop Now &nbsp;
              <span role="img" aria-label="arrow-right" className="anticon anticon-arrow-right">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="banner-img">
            <img src='https://i.ibb.co/3pXRRsG/smile-red.png' alt="" />
        </div>
      </div>

    <div className="display">

      <div className="display-header">
          <h1>Products Category</h1>
          <a href="/featured">See All</a>
      </div>

      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">GIRLS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">BOYS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">BABY</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Hompage;
