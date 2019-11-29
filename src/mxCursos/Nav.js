import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <header id="header" className="gridlove-site-header hidden-md-down  gridlove-header-shadow">
			
                <div className="gridlove-header-wrapper">
                    <div className="gridlove-header-1 gridlove-header-middle container">
                        
                        <div className="gridlove-slot-l">
                            
                            <div className="gridlove-site-branding  ">
                                <span className="site-title h1">
                                    <a href="https://www.serveware.com.br" rel="home">
                                        <img className="gridlove-logo lazyloaded" src="/images/servewareLogo.png" data-src="/images/servewareLogo.png" alt="" />
                                    </a>
                                </span>
                            </div>

                        </div>

                        <div className="gridlove-slot-r">
                            <nav className="gridlove-main-navigation">	
                                <ul id="menu-mx-novo" className="gridlove-main-nav gridlove-menu"><li id="menu-item-19904" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-19904"><a href="/">HOME</a></li>
                                    <li id="menu-item-19905" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-19905"><a href="/about">SOBRE</a></li>
                                </ul>
                            </nav>
                            <ul className="gridlove-actions gridlove-menu">
                                <li className="gridlove-actions-button gridlove-action-search">
                                    <span>
                                        <i className="fa fa-search"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

            </header>
        )
    }
}

export default Nav