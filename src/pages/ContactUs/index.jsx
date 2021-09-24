import React, { PureComponent } from 'react'
import styles from './style.less'

const { BMap } = window

const isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)

class ContactUs extends PureComponent {
  componentDidMount() {
    this.initMap()
  }

  initMap = () => {
    const map = new BMap.Map(this.container)
    // const { location, enterpriseName } = this.props.aboutData
    const location = '浙江省宁波市慈溪市博洋智谷生活方式中心'
    const enterpriseName = '8楼804 狸猫网络'
    const info_html = enterpriseName || '暂无企业名称'
    const infoWindow = new BMap.InfoWindow(info_html)

    const reg = /.+?(省|市|自治区|自治州|县|区)/g
    const temp = location.match(reg) || []
    const currentCity = temp.join('')
    const defaultLocation = currentCity || '安徽省铜陵市'
    const myGeo = new BMap.Geocoder()

    myGeo.getPoint(location, (point) => {
      if (point) {
        const marker = new BMap.Marker(point)
        map.centerAndZoom(point, 18)
        map.disableDoubleClickZoom()
        map.disableDragging()
        // map.enableScrollWheelZoom(false)
        map.addControl(new BMap.NavigationControl())
        map.addControl(new BMap.ScaleControl())
        map.addControl(new BMap.OverviewMapControl())
        map.addOverlay(marker)
        marker.openInfoWindow(infoWindow)
      }
    }, defaultLocation)
  }

  render() {
    return (
      <div className={styles.contactUs}>
        <ul className={styles.container}>
          <li>
            <img src={require('./images/img01.png')} alt=""/>
            <div className={styles.rightInfo}>
              <div className={styles.column}>市场合作</div>
              <div className={styles.name}>李先生</div>
              <div className={styles.email}>14785478@qq.com</div>
            </div>
          </li>
          <li>
            <img src={require('./images/img02.png')} alt=""/>
            <div className={styles.rightInfo}>
              <div className={styles.column}>投诉举报</div>
              <div className={styles.name}>李先生</div>
              <div className={styles.email}>14785478@qq.com</div>
            </div>
          </li>
        </ul>
        <div
          ref={(c) => {
            this.container = c
          }}
          style={{
            // margin: '0 auto',
            // width: '1200px',
            height: '500px',
          }}
        />
      </div>
    )
  }
}

class ContactUsMobile extends PureComponent {
  componentDidMount() {
    this.initMap()
  }

  initMap = () => {
    const map = new BMap.Map(this.container)
    // const { location, enterpriseName } = this.props.aboutData
    const location = '浙江省宁波市慈溪市博洋智谷生活方式中心'
    const enterpriseName = '8楼804 狸猫网络'
    const info_html = enterpriseName || '暂无企业名称'
    const infoWindow = new BMap.InfoWindow(info_html)

    const reg = /.+?(省|市|自治区|自治州|县|区)/g
    const temp = location.match(reg) || []
    const currentCity = temp.join('')
    const defaultLocation = currentCity || '安徽省铜陵市'
    const myGeo = new BMap.Geocoder()
    myGeo.getPoint(location, (point) => {
      if (point) {
        const marker = new BMap.Marker(point)
        map.centerAndZoom(point, 18)
        map.disableDoubleClickZoom()
        map.disableDragging()
        // map.enableScrollWheelZoom(false)
        map.addControl(new BMap.NavigationControl())
        map.addControl(new BMap.ScaleControl())
        map.addControl(new BMap.OverviewMapControl())
        map.addOverlay(marker)
        marker.openInfoWindow(infoWindow)
      }
    }, defaultLocation)
  }

  render() {
    return (
      <div className={styles.contactUsMobile}>
        <ul className={styles.container}>
          <li>
            <img src={require('./images/img01.png')} alt=""/>
            <div className={styles.rightInfo}>
              <div className={styles.column}>市场合作</div>
              <div className={styles.name}>李先生</div>
              <div className={styles.email}>14785478@qq.com</div>
            </div>
          </li>
          <li>
            <img src={require('./images/img02.png')} alt=""/>
            <div className={styles.rightInfo}>
              <div className={styles.column}>投诉举报</div>
              <div className={styles.name}>李先生</div>
              <div className={styles.email}>14785478@qq.com</div>
            </div>
          </li>
        </ul>
        <div
          ref={(c) => {
            this.container = c
          }}
          style={{
            width: '100%',
            height: '500px',
          }}
        />
      </div>
    )
  }
}

const Cmp = isPc ? ContactUs : ContactUsMobile

export default Cmp
