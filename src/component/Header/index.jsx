import React, { PureComponent } from 'react'
import { Link, withRouter } from 'umi'
import { BackTop } from 'antd'
import styles from './style.less'

const isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)

class Header extends PureComponent {
  state = {
    scrollSta: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleIndexScroll)
    // const { pathname } = this.props.location
    // console.log('pathname', pathname)
  }

  handleIndexScroll = (event) => {
    const scrollTop = event.target.documentElement.scrollTop || event.target.body.scrollTop
    if (scrollTop > 20) {
      this.setState({
        scrollSta: true,
      })
    } else {
      this.setState({
        scrollSta: false,
      })
    }
  }

  render() {
    const { scrollSta } = this.state
    const pathname = this.props?.location?.pathname?.split('/')[1]
    return (
      <div className={styles.header}>
        <div className={`${styles.headerBar} ${scrollSta ? styles.on : ''}`}>
          <div className={styles.container}>
            <img className={styles.logo}
                 src={scrollSta ? require('./images/roll-logo.png') : require('./images/logo.png')} alt=""/>
            <ul className={styles.nav}>
              <li className={`${pathname === 'index' ? styles.on : ''}`}><Link to="/">首页</Link></li>
              <li className={`${pathname === '' ? styles.on : ''}`}><Link to="/open">开放平台</Link></li>
              <li className={`${(pathname === 'mediaReports' || pathname === 'detail') ? styles.on : ''}`}><Link
                to="/mediaReports">媒体报道</Link></li>
              <li className={`${pathname === 'aboutUs' ? styles.on : ''}`}><Link to="/aboutUs">关于我们</Link></li>
              <li className={`${pathname === 'contactUs' ? styles.on : ''}`}><Link to="/contactUs">联系我们</Link></li>
            </ul>
          </div>
        </div>
        <div className={`${styles.headerBg} ${pathname}`}>
          <div className={styles.container}>
            {
              (pathname === 'mediaReports' || pathname === 'detail') && (
                <div className={styles.pageColumn}>
                  <div className={styles.zhColumn}>媒体报道</div>
                  <div className={styles.enColumn}>Media Reports</div>
                </div>
              )
            }
            {
              pathname === 'aboutUs' && (
                <div className={styles.pageColumn}>
                  <div className={styles.zhColumn}>关于我们</div>
                  <div className={styles.enColumn}>About Us</div>
                </div>
              )
            }
            {
              pathname === 'contactUs' && (
                <div className={styles.pageColumn}>
                  <div className={styles.zhColumn}>联系我们</div>
                  <div className={styles.enColumn}>Contact Us</div>
                </div>
              )
            }
          </div>
        </div>
        <BackTop/>
      </div>
    )
  }
}


class HeaderMobile extends PureComponent {
  state = {
    showMenuSta: false,
    scrollSta: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleIndexScroll)
  }

  handleIndexScroll = (event) => {
    const scrollTop = event.target.documentElement.scrollTop || event.target.body.scrollTop
    if (scrollTop > 20) {
      this.setState({
        scrollSta: true,
      })
    } else {
      this.setState({
        scrollSta: false,
      })
    }
  }

  showMenu = () => {
    this.setState(prevState => ({
      showMenuSta: !prevState.showMenuSta,
    }))
  }

  handleNav = () => {
    this.setState({
      showMenuSta: false,
      scrollSta: false,
    })
  }

  render() {
    const { showMenuSta, scrollSta } = this.state
    const pathname = this.props?.location?.pathname?.split('/')[1]
    return (
      <div className={styles.headerMobile}>
        {/* <div className={styles.headerMobileBg} /> */}
        <div className={`${styles.headerMobileBg} ${pathname}`}>
          <div className={styles.container}>
            {
              (pathname === 'mediaReports' || pathname === 'detail') && (
                <div className={styles.pageColumn}>
                  <div className={styles.zhColumn}>媒体报道</div>
                  <div className={styles.enColumn}>Media Reports</div>
                </div>
              )
            }
            {
              pathname === 'aboutUs' && (
                <div className={styles.pageColumn}>
                  <div className={styles.zhColumn}>关于我们</div>
                  <div className={styles.enColumn}>About Us</div>
                </div>
              )
            }
            {
              pathname === 'contactUs' && (
                <div className={styles.pageColumn}>
                  <div className={styles.zhColumn}>联系我们</div>
                  <div className={styles.enColumn}>Contact Us</div>
                </div>
              )
            }
          </div>
        </div>
        <div className={`${styles.topBar} ${(showMenuSta || scrollSta) ? styles.on : ''}`}>
          <img className={styles.logo}
               src={!(showMenuSta || scrollSta) ? require('./images/logo.png') : require('./images/roll-logo.png')}
               alt=""/>
          <i className={`iconfont ${!showMenuSta ? 'icon-menu' : 'icon-close'}`} onClick={this.showMenu}/>
        </div>
        <ul className={`${styles.nav} ${showMenuSta ? styles.on : ''}`}>
          <li onClick={this.handleNav} className={`${pathname === 'index' ? styles.on : ''}`}><Link to="/">首页</Link>
          </li>
          <li onClick={this.handleNav} className={`${pathname === '' ? styles.on : ''}`}><Link to="/open">开放平台</Link>
          </li>
          <li onClick={this.handleNav}
              className={`${(pathname === 'mediaReports' || pathname === 'detail') ? styles.on : ''}`}><Link
            to="/mediaReports">媒体报道</Link></li>
          <li onClick={this.handleNav} className={`${pathname === 'aboutUs' ? styles.on : ''}`}><Link
            to="/aboutUs">关于我们</Link></li>
          <li onClick={this.handleNav} className={`${pathname === 'contactUs' ? styles.on : ''}`}><Link
            to="/contactUs">联系我们</Link></li>
        </ul>
        {
          showMenuSta && <div className={styles.shadow}/>
        }
      </div>
    )
  }
}

const Cmp = isPc ? withRouter(Header) : withRouter(HeaderMobile)

export default Cmp
