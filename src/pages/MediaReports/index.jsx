import React, { PureComponent } from 'react'
import styles from './style.less'

const isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)

class MediaReports extends PureComponent {
  render() {
    return (
      <div className={styles.mediaReports}>
        <ul className={styles.container}>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司,集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司,集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
        </ul>
      </div>
    )
  }
}


class MediaReportsMobile extends PureComponent {
  render() {
    return (
      <div className={styles.mediaReportsMobile}>
        <ul className={styles.container}>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司,集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司,集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
          <li>
            <img className={styles.img} src={require('./images/img01.png')} alt="" />
            <div className={styles.title}>媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题媒体报道大标题</div>
            <div className={styles.desc}>宁波狸猫网络科技有限公司注册成立于2014年，是一家致力以构建内容、
              技术创新为核心驱动，集平台运营和产品研发为一体的新型互联网公司,集平台运营和产品研发为一体的新型互联网公司
            </div>
            <div className={styles.date}>2021-7-24</div>
          </li>
        </ul>
      </div>
    )
  }
}

const Cmp = isPc ? MediaReports : MediaReportsMobile

export default Cmp
