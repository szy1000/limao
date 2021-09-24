import React, {PureComponent} from 'react'
import styles from './style.less'

const isPc = !navigator.userAgent.match(/AppleWebKit.*Mobile.*/)

class Detail extends PureComponent {
  render() {
    return (
      <div className={styles.detail}>
        <div className={styles.crumb}>
          <span className={styles.column}>媒体报道</span> > <span className={styles.txt}>正文</span>
        </div>
        <div className={styles.title}>
          这里是标题这里是标题这里是标题
        </div>
        <div className={styles.time}>发布于: 2021-12-10</div>
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, cumque fugiat illum neque quasi. Adipisci, eligendi est explicabo fuga, impedit ipsa, ipsam modi nam nobis quas repellat sed tenetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores id, labore libero molestiae nesciunt nostrum quos reprehenderit? Beatae delectus ea eos nemo nesciunt perferendis placeat sapiente tempore velit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consectetur cumque cupiditate, debitis deserunt, dolorum eius eum ex excepturi impedit, in iusto molestias omnis provident sequi similique ut voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, cumque fugiat illum neque quasi. Adipisci, eligendi est explicabo fuga, impedit ipsa, ipsam modi nam nobis quas repellat sed tenetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores id, labore libero molestiae nesciunt nostrum quos reprehenderit? Beatae delectus ea eos nemo nesciunt perferendis placeat sapiente tempore velit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consectetur cumque cupiditate, debitis deserunt, dolorum eius eum ex excepturi impedit, in iusto molestias omnis provident sequi similique ut voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, cumque fugiat illum neque quasi. Adipisci, eligendi est explicabo fuga, impedit ipsa, ipsam modi nam nobis quas repellat sed tenetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores id, labore libero molestiae nesciunt nostrum quos reprehenderit? Beatae delectus ea eos nemo nesciunt perferendis placeat sapiente tempore velit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consectetur cumque cupiditate, debitis deserunt, dolorum eius eum ex excepturi impedit, in iusto molestias omnis provident sequi similique ut voluptatum.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.prev}>上一篇：<a>上一篇的标题上一篇的标题上一篇的标题</a></div>
          <div className={styles.next}>下一篇：<a>下一篇的标题下一篇的标题下一篇的标题</a></div>
        </div>
      </div>
    )
  }
}

class DetailMobile extends PureComponent {
  render() {
    return (
      <div className={styles.detailMobile}>
        <div className={styles.crumb}>
          <span className={styles.column}>媒体报道</span> > <span className={styles.txt}>正文</span>
        </div>
        <div className={styles.title}>
          这里是标题这里是标题这里是标题这里是标题
        </div>
        <div className={styles.time}>发布于: 2021-12-10</div>
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, cumque fugiat illum neque quasi. Adipisci, eligendi est explicabo fuga, impedit ipsa, ipsam modi nam nobis quas repellat sed tenetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores id, labore libero molestiae nesciunt nostrum quos reprehenderit? Beatae delectus ea eos nemo nesciunt perferendis placeat sapiente tempore velit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consectetur cumque cupiditate, debitis deserunt, dolorum eius eum ex excepturi impedit, in iusto molestias omnis provident sequi similique ut voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, cumque fugiat illum neque quasi. Adipisci, eligendi est explicabo fuga, impedit ipsa, ipsam modi nam nobis quas repellat sed tenetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores id, labore libero molestiae nesciunt nostrum quos reprehenderit? Beatae delectus ea eos nemo nesciunt perferendis placeat sapiente tempore velit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consectetur cumque cupiditate, debitis deserunt, dolorum eius eum ex excepturi impedit, in iusto molestias omnis provident sequi similique ut voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at, cumque fugiat illum neque quasi. Adipisci, eligendi est explicabo fuga, impedit ipsa, ipsam modi nam nobis quas repellat sed tenetur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolores id, labore libero molestiae nesciunt nostrum quos reprehenderit? Beatae delectus ea eos nemo nesciunt perferendis placeat sapiente tempore velit veritatis?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis consectetur cumque cupiditate, debitis deserunt, dolorum eius eum ex excepturi impedit, in iusto molestias omnis provident sequi similique ut voluptatum.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.prev}>上一篇：<a>上一篇的标题上一篇的标题上一篇的标题</a></div>
          <div className={styles.next}>下一篇：<a>下一篇的标题下一篇的标题下一篇的标题</a></div>
        </div>
      </div>
    )
  }
}


const Cmp = isPc ? Detail : DetailMobile

export default Cmp
