import React, { PureComponent } from 'react'
import styles from './style.less'

const Swiper = window.Swiper

const isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)

class About extends PureComponent {
  componentDidMount() {
    this.initBanner()
  }

  initBanner = () => {
    const swiper = new Swiper('.swiper-container-cooperate', {
      // pagination: '.swiper-pagination',
      nextButton: '.icon-previewright',
      prevButton: '.icon-previewleft',
      slidesPerView: 3, // 设置slider容器能够同时显示的slides数量(carousel模式)。
      centeredSlides: false, // 设定为true时，活动块会居中，而不是默认状态下的居左。
      paginationClickable: false, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
      spaceBetween: 47,
      loop: true,
      autoplay: 5000,
    })
  }

  render() {
    return (
      <div className={styles.aboutUs}>
        <div className={styles.who}>
          <div className={styles.leftPart}>
            <div className={styles.chWho}>我们是谁</div>
            <div className={styles.usWho}>WHO</div>
            <span className={styles.mark}>/</span>
          </div>
          <div className={styles.rightPart}>
            这里是简介，宁波狸猫网络科技有限公司（www.limao.com）注册 成立于 2014 年，是一家
            致力以构建内容、技术创新为 核心驱动，集平台运营和产品研发为一体的新型互联 网公司。
            公司基于大数据、内容以及移动端覆盖量，构建互 联网用户集群的产品矩阵，为 BAT、电商、
            大型门户 网站、网络广告联盟等各大厂商及各行业品牌客户提 供大数据移动互联网综合服务。
          </div>
        </div>
        <div className={styles.columnWrap}>
          <img src={require('./images/title-left.png')} alt="" />
          <span className={styles.column}>管理团队</span>
          <img src={require('./images/title-right.png')} alt="" />
        </div>
        <ul className={styles.team}>
          <li>
            <img className={styles.ava} src={require('./images/ava.png')} alt="" />
            <div className={styles.info}>
              <span className={styles.name}>狸小猫</span>
              <span className={styles.job}>/ CEO</span>
            </div>
            <div className={styles.desc}>这里是个人简介，宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。</div>
            <div className={styles.logoWrap}><img src={require('./images/compony-logo.png')} alt="" /></div>
          </li>
          <li>
            <img className={styles.ava} src={require('./images/ava.png')} alt="" />
            <div className={styles.info}>
              <span className={styles.name}>狸小猫</span>
              <span className={styles.job}>/ CEO</span>
            </div>
            <div className={styles.desc}>这里是个人简介，宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。</div>
            <div className={styles.logoWrap}><img src={require('./images/compony-logo.png')} alt="" /></div>
          </li>
          <li>
            <img className={styles.ava} src={require('./images/ava.png')} alt="" />
            <div className={styles.info}>
              <span className={styles.name}>狸小猫</span>
              <span className={styles.job}>/ CEO</span>
            </div>
            <div className={styles.desc}>这里是个人简介，宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。</div>
            <div className={styles.logoWrap}><img src={require('./images/compony-logo.png')} alt="" /></div>
          </li>
        </ul>
        <div className={styles.culture}>
          <div className={styles.title}>企业文化 /</div>
          <div className={styles.cont}>
            <img src={require('./images/qywh.png')} alt="" />
            <div className={styles.rightPart}>
              <div className={styles.column}>企业愿景</div>
              <div className={styles.desc}>做最具规模的互联网流量整合专家</div>
              <div className={styles.column} style={{ marginTop: 28 }}>人文理念</div>
              <div className={styles.columnSub}>诚信 /</div>
              <div className={styles.desc}>诚实正直，信守承诺</div>
              <div className={styles.columnSub}>使命 /</div>
              <div className={styles.desc}>链接所有合作伙伴 创造价值</div>
              <div className={styles.columnSub}>激情 /</div>
              <div className={styles.desc}>永不言弃，乐观向上 </div>

              <div className={styles.columnSub}>敬业 /</div>
              <div className={styles.desc}>以专业的态度和平常的心态做非凡的事情</div>
              <div className={styles.columnSub}>责任 /</div>
              <div className={styles.desc}>不患无策，只怕无心</div>
            </div>
          </div>
        </div>
        <div className={styles.columnWrap}>
          <img src={require('./images/title-left.png')} alt="" />
          <span className={styles.column}>团队风采</span>
          <img src={require('./images/title-right.png')} alt="" />
        </div>
        <div className={styles.cooperate}>
          <i className="iconfont icon-previewleft" />
          <div className="swiper-container-cooperate">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={require('./images/tdfc01.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./images/tdfc02.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./images/tdfc03.png')} alt="" /></div>
            </div>
          </div>
          <i className="iconfont icon-previewright" />
        </div>
      </div>
    )
  }
}

class AboutMobile extends PureComponent {
  render() {
    return (
      <div className={styles.aboutUsMobile}>
        <div className={styles.who}>
          <div className={styles.topPart}>
            <div className={styles.chWho}>我们是谁</div>
            <div className={styles.usWho}>WHO</div>
            <span className={styles.mark}>/</span>
          </div>
          <div className={styles.bottomPart}>
            这里是简介，宁波狸猫网络科技有限公司（www.limao.com）注册 成立于 2014 年，是一家
            致力以构建内容、技术创新为 核心驱动，集平台运营和产品研发为一体的新型互联 网公司。
            公司基于大数据、内容以及移动端覆盖量，构建互 联网用户集群的产品矩阵，为 BAT、电商、
            大型门户 网站、网络广告联盟等各大厂商及各行业品牌客户提 供大数据移动互联网综合服务。
          </div>
        </div>
        <div className={styles.columnWrap}>
          <img src={require('./images/title-left.png')} alt="" />
          <span className={styles.column}>管理团队</span>
          <img src={require('./images/title-right.png')} alt="" />
        </div>
        <ul className={styles.team}>
          <li>
            <img className={styles.ava} src={require('./images/ava.png')} alt="" />
            <div className={styles.info}>
              <span className={styles.name}>狸小猫</span>
              <span className={styles.job}>/ CEO</span>
            </div>
            <div className={styles.desc}>这里是个人简介，宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。</div>
            <div className={styles.logoWrap}><img src={require('./images/compony-logo.png')} alt="" /></div>
          </li>
          <li>
            <img className={styles.ava} src={require('./images/ava.png')} alt="" />
            <div className={styles.info}>
              <span className={styles.name}>狸小猫</span>
              <span className={styles.job}>/ CEO</span>
            </div>
            <div className={styles.desc}>这里是个人简介，宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。</div>
            <div className={styles.logoWrap}><img src={require('./images/compony-logo.png')} alt="" /></div>
          </li>
          <li>
            <img className={styles.ava} src={require('./images/ava.png')} alt="" />
            <div className={styles.info}>
              <span className={styles.name}>狸小猫</span>
              <span className={styles.job}>/ CEO</span>
            </div>
            <div className={styles.desc}>这里是个人简介，宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。</div>
            <div className={styles.logoWrap}><img src={require('./images/compony-logo.png')} alt="" /></div>
          </li>
        </ul>
        <div className={styles.culture}>
          <div className={styles.title}>企业文化 /</div>
          <div className={styles.cont}>
            <div className={styles.rightPart}>
              <div className={styles.column}>企业愿景</div>
              <div className={styles.desc}>做最具规模的互联网流量整合专家</div>
              <div className={styles.column} style={{ marginTop: 14 }}>人文理念</div>
              <div className={styles.columnSub}>诚信 /</div>
              <div className={styles.desc}>诚实正直，信守承诺</div>
              <div className={styles.columnSub}>使命 /</div>
              <div className={styles.desc}>链接所有合作伙伴 创造价值</div>
              <div className={styles.columnSub}>激情 /</div>
              <div className={styles.desc}>永不言弃，乐观向上 </div>
              <div className={styles.columnSub}>敬业 /</div>
              <div className={styles.desc}>以专业的态度和平常的心态做非凡的事情</div>
              <div className={styles.columnSub}>责任 /</div>
              <div className={styles.desc}>不患无策，只怕无心</div>
            </div>
          </div>
        </div>
        <div className={styles.columnWrap}>
          <img src={require('./images/title-left.png')} alt="" />
          <span className={styles.column}>团队风采</span>
          <img src={require('./images/title-right.png')} alt="" />
        </div>
        <ul className={styles.cooperate}>
          <li><img src={require('./images/tdfc01.png')} alt="" /></li>
          <li><img src={require('./images/tdfc02.png')} alt="" /></li>
          <li><img src={require('./images/tdfc03.png')} alt="" /></li>
        </ul>
      </div>
    )
  }
}

const Cmp = isPc ? About : AboutMobile

export default Cmp
