import router from 'umi/router'

export default class Tools {
  static ua = window.navigator.userAgent.toLowerCase()

  static isIos() {
    return /iphone|ipad|ipod/i.test(this.ua)
  }

  static isAndroid() {
    return !/iphone|ipad|ipod/i.test(this.ua)
  }

  static isLogin() {
    return localStorage.getItem('userId') !== null && localStorage.getItem('userId') !== 'null'
      && localStorage.getItem('userCode') !== null && localStorage.getItem('userCode') !== 'null'
  }

  static loginOut() {
    localStorage.removeItem('userId')
    localStorage.removeItem('userCode')
    localStorage.clear()
  }

  static isMobile(phone) {
    if (/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(phone)) {
      return true
    }
    return false
  }

  static isEmptyObj(data) {
    if (JSON.stringify(data) === '{}') {
      return false // 如果为空,返回false
    }
    return true // 如果不为空，则会执行到这一步，返回true
  }

  static getUrlParams = (name) => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
    const r = window.location.href.slice(window.location.href.indexOf('?') + 1)
      .match(reg)
    if (r != null) {
      return decodeURI(r[2])
    }
    return null
  }

  // static format = (timestamp, word, div = '-') => {
  //   const time = new Date(timestamp * 1000)
  //   const year = time.getFullYear()
  //   const month = time.getMonth() + 1
  //   const date = time.getDate()
  //   if (word) {
  //     return `${year}年${month > 10 ? month : `0${month}`}月${date >= 10 ? date : `0${date}`}日`
  //   }
  //   return year + div + (month > 10 ? month : `0${month}`) + div + (date >= 10 ? date : `0${date}`)
  // }

  static format =(str) => {
    const oDate = new Date(str)
    const oYear = oDate.getFullYear()
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    // const oHour = oDate.getHours()
    // const oMin = oDate.getMinutes()
    // const oSen = oDate.getSeconds()
    const oTime = `${oYear}-${addZero(oMonth)}-${addZero(oDay)}`
    // ${addZero(oHour)}:${addZero(oMin)}:${addZero(oSen)}
    return oTime

    function addZero(num) {
      if (parseInt(num, 10) < 10) {
        num = `0${num}`
      }
      return num
    }
  }

  static intactFormatTime =(str) => {
    const oDate = new Date(str)
    const oYear = oDate.getFullYear()
    const oMonth = oDate.getMonth() + 1
    const oDay = oDate.getDate()
    const oHour = oDate.getHours()
    const oMin = oDate.getMinutes()
    const oSen = oDate.getSeconds()
    const oTime = `${oYear}-${addZero(oMonth)}-${addZero(oDay)} ${addZero(oHour)}:${addZero(oMin)}:${addZero(oSen)}`
    return oTime

    function addZero(num) {
      if (parseInt(num, 10) < 10) {
        num = `0${num}`
      }
      return num
    }
  }

  static jumpUrl({
    url = '/', openNew = false, needReplace, params,
  }) {
    if (needReplace) {
      router.replace(url)
      return
    }

    if (openNew) {
      const handleUrl = window.location + url
      window.open(handleUrl)
      return
    }
    router.push(url)
  }
}
