import React, { Component } from 'react'
import styles from './style.less'

const Swiper = window.Swiper

const isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)

// window.addEventListener('resize', () => {
//   isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)
//   console.log('isPc', isPc)
// })

class Index extends Component {
  state = {
    selectDevelop: 0,
  }

  componentDidMount() {
    this.initBanner()
  }

  initBanner = () => {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 5000, // 可选选项，自动滑动
      // 如果需要前进后退按钮
      nextButton: '.icon-arrow-right',
      // nextButton: '.swiper-button-next',
      prevButton: '.icon-arrow-left',
      // prevButton: '.swiper-button-prev',
    })

    const swiper = new Swiper('.swiper-container-cooperate', {
      // pagination: '.swiper-pagination',
      nextButton: '.icon-previewright',
      prevButton: '.icon-previewleft',
      slidesPerView: 6, // 设置slider容器能够同时显示的slides数量(carousel模式)。
      centeredSlides: false, // 设定为true时，活动块会居中，而不是默认状态下的居左。
      paginationClickable: false, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
      spaceBetween: 31,
      loop: true,
      autoplay: 5000,
    })
  }

  handleDevelop = (step) => {
    this.setState({
      selectDevelop: step,
    })
  }

  render() {
    const { selectDevelop } = this.state
    return (
      <div className={styles.index}>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            COMPANY PROFILE
            <span className={styles.zhColumn}>公司简介</span>
          </div>
        </div>
        <div className={styles.companyDesc}>
          宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。公司基于大数据、内容以及移动端覆盖量，构建互联网用户集群的产品矩阵，为BAT、电商、大型门户网站、网络广告联盟等各大厂商及各行业品牌客户提供大数据移动互联网综合服务。
        </div>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            DEVELOPMENT HISTORY
            <span className={styles.zhColumn}>发展历程</span>
          </div>
        </div>
        <ul className={styles.timeLine}>
          <li className={styles.on}>
            <span className={styles.time}>2021</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>获得园区重点推荐公司</span>
          </li>
          <li>
            <span className={styles.desc}>成立数字营销项目</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.time}>2020</span>
          </li>
          <li>
            <span className={styles.time}>2019</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>设立狸猫生活品牌，构建个人消费优惠理念</span>
          </li>
          <li>
            <span className={styles.desc}>设立阿里妈妈项目，成为头部合作渠道</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.time}>2017</span>
          </li>
          <li>
            <span className={styles.time}>2014</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>狸猫网络成立于宁波慈溪</span>
          </li>
        </ul>
        <div className={styles.numberData}>
          <ul className={styles.container}>
            <li>
              <span className={styles.num}>1000W+</span>
              <span className={styles.desc}>覆盖用户</span>
            </li>
            <li>
              <span className={styles.num}>7年</span>
              <span className={styles.desc}>发展历程</span>
            </li>
            <li>
              <span className={styles.num}>500+</span>
              <span className={styles.desc}>合作用户</span>
            </li>
            <li>
              <span className={styles.num}>5亿</span>
              <span className={styles.desc}>年交易额</span>
            </li>
          </ul>
        </div>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            WHAT CAN WE DO FOR YOU?
            <span className={styles.zhColumn}>我们能帮你做什么？</span>
          </div>
        </div>
        <div className={styles.develop}>
          <ul className={styles.container}>
            <li className={selectDevelop === 0 ? styles.on : ''} onClick={() => { this.handleDevelop(0) }}>
              <span className={styles.wrap}><img src={require('./image/icon01.png')} alt="" /></span>
              <span className={styles.desc}>权益商城搭建</span>
            </li>
            <li className={selectDevelop === 1 ? styles.on : ''} onClick={() => { this.handleDevelop(1) }}>
              <span className={styles.wrap}><img src={require('./image/icon02.png')} alt="" /></span>
              <span className={styles.desc}>低成本裂变引流</span>
            </li>
            <li className={selectDevelop === 2 ? styles.on : ''} onClick={() => { this.handleDevelop(2) }}>
              <span className={styles.wrap}><img src={require('./image/icon03.png')} alt="" /></span>
              <span className={styles.desc}>营销解决方案</span>
            </li>
          </ul>
        </div>
        <div className={styles.developCont}>
          <div className={styles.container}>
            {
              selectDevelop === 0 && (
                <>
                  <ul className={styles.leftDesc}>
                    <li>我们有顶级的供应链渠道 ——<span>降低品牌运维成本</span></li>
                    <li>我们有更专业的运营团队 ——<span>提供全面的服务支持</span></li>
                    <li>我们有更精准的数据支持 ——<span>提供精准详细的数据参考</span></li>
                    <li>我们有更稳定的平台系统 ——<span>提供完整稳定的平台支持</span></li>
                  </ul>
                  <img className={styles.img} src={require('./image/z01.png')} alt="" />
                </>
              )
            }
            {
              selectDevelop === 1 && (
                <>
                  <ul className={styles.leftDesc}>
                    <li>- 找出目标用户需求点</li>
                    <li>- 吸引目标用户形成圈子</li>
                    <li>- 输出价值，获得认同，成为用户</li>
                    <li>- 产生裂变复制</li>
                  </ul>
                  <img className={styles.img} src={require('./image/z02.png')} alt="" />
                </>
              )
            }
            {
              selectDevelop === 2 && (
                <>
                  <ul className={styles.leftDesc}>
                    <li>分析你的企业，找出目标客户 ——<span>分析目标客户</span></li>
                    <li>提供盈利模式分析 ——<span>快速精准定位</span></li>
                    <li>专业SEO和推广 ——<span>具有竞争力的产品</span></li>
                    <li>提升企业形象和体验度 ——<span>提高成交量和转化率</span></li>
                  </ul>
                  <img className={styles.img} src={require('./image/z03.png')} alt="" />
                </>
              )
            }
          </div>
        </div>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            ASSIST ENTERPRISES
            <span className={styles.zhColumn}>助力行业巨头/独角兽企业</span>
          </div>
        </div>

        <div className={styles.companyProfile}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="img" src={require('./image/company-img.png')} alt="" />
                <div className="desc">
                  <div className="title">xxx 企业名称</div>
                  <div className="txt">
                    企业简介AA是一款手机优化软件，立足充电节能领域，以区块链技术为支撑，开发并运营AA
                    APP及网络商城。企业简介 AA 是一款手机优化软件，立足充电节能领域，以区块链技术为支
                    撑，开发并运营AAAPP及网络商城。
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <img className="img" src={require('./image/company-img.png')} alt="" />
                <div className="desc">
                  <div className="title">xxx 企业名称222</div>
                  <div className="txt">
                    企业简介AA是一款手机优化软件，立足充电节能领域，以区块链技术为支撑，开发并运营AA
                    APP及网络商城。企业简介 AA 是一款手机优化软件，立足充电节能领域，以区块链技术为支
                    撑，开发并运营AAAPP及网络商城。22222
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-wrap">
            <i className="iconfont icon-arrow-left" />
            <i className="iconfont icon-arrow-right" />
          </div>
        </div>

        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            COOPERATIVE BRANDS
            <span className={styles.zhColumn}>部分合作品牌</span>
          </div>
        </div>

        <div className={styles.cooperate}>
          <i className="iconfont icon-previewleft" />
          <div className="swiper-container-cooperate">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={require('./image/zgyd.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/zgdx.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/zglt.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/xbk.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/kfc.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/zrt.png')} alt="" /></div>
            </div>
          </div>
          <i className="iconfont icon-previewright" />
        </div>
      </div>
    )
  }
}

class IndexMobile extends Component {
  componentDidMount() {
    const swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
    })

    const swiper2 = new Swiper('.swiper-container-cooperate', {
      // pagination: '.swiper-pagination',
      nextButton: '.icon-previewleft',
      prevButton: '.icon-previewright',
      slidesPerView: 3, // 设置slider容器能够同时显示的slides数量(carousel模式)。
      centeredSlides: false, // 设定为true时，活动块会居中，而不是默认状态下的居左。
      paginationClickable: false, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
      spaceBetween: 15,
      loop: true,
      autoplay: 5000,
    })
  }

  render() {
    return (
      <div className={styles.indexMobile}>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            COMPANY PROFILE
            <span className={styles.zhColumn}>公司简介</span>
          </div>
        </div>
        <div className={styles.companyDesc}>
          宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司。公司基于大数据、内容以及移动端覆盖量，构建互联网用户集群的产品矩阵，为BAT、电商、大型门户网站、网络广告联盟等各大厂商及各行业品牌客户提供大数据移动互联网综合服务。
        </div>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            DEVELOPMENT HISTORY
            <span className={styles.zhColumn}>发展历程</span>
          </div>
        </div>
        <ul className={styles.timeLine}>
          <li className={styles.on}>
            <span className={styles.time}>2021</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>获得园区重点推荐公司</span>
          </li>
          <li>
            <span className={styles.time}>2020</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>成立数字营销项目</span>
          </li>
          <li>
            <span className={styles.time}>2019</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>设立狸猫生活品牌，构建个人消费优惠理念</span>
          </li>
          <li>
            <span className={styles.time}>2017</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>设立阿里妈妈项目，成为头部合作渠道</span>
          </li>
          <li>
            <span className={styles.time}>2014</span>
            <i className="iconfont icon-radiopress" />
            <span className={styles.desc}>狸猫网络成立于宁波慈溪</span>
          </li>
        </ul>
        <ul className={styles.numberData}>
          <li>
            <span className={styles.num}>1000W+</span>
            <span className={styles.desc}>覆盖用户</span>
          </li>
          <li>
            <span className={styles.num}>7年</span>
            <span className={styles.desc}>发展历程</span>
          </li>
          <li>
            <span className={styles.num}>500+</span>
            <span className={styles.desc}>合作用户</span>
          </li>
          <li>
            <span className={styles.num}>5亿</span>
            <span className={styles.desc}>年交易额</span>
          </li>
        </ul>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            WHAT CAN WE DO FOR YOU?
            <span className={styles.zhColumn}>我们能帮你做什么？</span>
          </div>
        </div>
        <ul className={styles.whatWrap}>
          <li>
            <div className={styles.leftPart}>
              <span className={styles.wrap}><img className={styles.img} src={require('./image/icon01.png')} alt="" /></span>
              <span className={styles.desc}>权益商城搭建</span>
            </div>
            <ul className={styles.rightPart}>
              <li>
                我们有顶级的供应链渠道
                <div className={styles.note}>——<span>降低品牌运维成本</span></div>
              </li>
              <li>
                我们有更专业的运营团队
                <div className={styles.note}>——<span>提供全面的服务支持</span></div>
              </li>
              <li>
                我们有更精准的数据支持
                <div className={styles.note}>——<span>提供精准详细的数据参考</span></div>
              </li>
              <li>
                我们有更稳定的平台系统
                <div className={styles.note}>——<span>提供完整稳定的平台支持</span></div>
              </li>
            </ul>
          </li>
          <li>
            <div className={styles.leftPart}>
              <span className={styles.wrap}><img className={styles.img} src={require('./image/icon02.png')} alt="" /></span>
              <span className={styles.desc}>低成本裂变引流</span>
            </div>
            <ul className={styles.rightPart2}>
              <li>- 找出目标用户需求点</li>
              <li>- 吸引目标用户形成圈子</li>
              <li>- 输出价值，获得认同，成为用户</li>
              <li>- 产生裂变复制</li>
            </ul>
          </li>
          <li>
            <div className={styles.leftPart}>
              <span className={styles.wrap}><img className={styles.img} src={require('./image/icon03.png')} alt="" /></span>
              <span className={styles.desc}>营销解决方案</span>
            </div>
            <ul className={styles.rightPart}>
              <li>
                分析你的企业，找出目标客户
                <div className={styles.note}>——<span>分析目标客户</span></div>
              </li>
              <li>
                提供盈利模式分析
                <div className={styles.note}>——<span>快速精准定位</span></div>
              </li>
              <li>
                专业SEO和推广
                <div className={styles.note}>——<span>具有竞争力的产品</span></div>
              </li>
              <li>
                提升企业形象和体验度
                <div className={styles.note}>——<span>提高成交量和转化率</span></div>
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            ASSIST ENTERPRISES
            <span className={styles.zhColumn}>助力行业巨头/独角兽企业</span>
          </div>
        </div>
        <div className={styles.companyProfile}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="img" src={require('./image/company-img.png')} alt="" />
                <div className="title">xxx 企业名称</div>
                <div className="txt">
                  企业简介AA是一款手机优化软件，立足充电节能领域，以区块链技术为支撑，开发并运营AA
                  APP及网络商城。企业简介 AA 是一款手机优化软件，立足充电节能领域，以区块链技术为支
                  撑，开发并运营AAAPP及网络商城。
                </div>
              </div>
              <div className="swiper-slide">
                <img className="img" src={require('./image/company-img.png')} alt="" />
                <div className="title">xxx 企业名称</div>
                <div className="txt">
                  企业简介AA是一款手机优化软件，立足充电节能领域，以区块链技术为支撑，开发并运营AA
                  APP及网络商城。企业简介 AA 是一款手机优化软件，立足充电节能领域，以区块链技术为支
                  撑，开发并运营AAAPP及网络商城。
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        <div className={styles.columnWrap}>
          <div className={styles.enColumn}>
            COOPERATIVE BRANDS
            <span className={styles.zhColumn}>部分合作品牌</span>
          </div>
        </div>
        <div className={styles.cooperate}>
          <i className="iconfont icon-previewleft" />
          <div className="swiper-container-cooperate">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={require('./image/zgyd.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/zgdx.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/zglt.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/xbk.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/kfc.png')} alt="" /></div>
              <div className="swiper-slide"><img src={require('./image/zrt.png')} alt="" /></div>
            </div>
          </div>
          <i className="iconfont icon-previewright" />
        </div>
      </div>
    )
  }
}

const Cmp = isPc ? Index : IndexMobile

export default Cmp
