import dividerMobile from '../../img/pattern-divider-mobile.svg'
import dividerDesktop from '../../img/pattern-divider-desktop.svg'
import style from './img.module.scss'

const Img = () => {
  return (
    <picture style={{width:'100%'}}>
      <source media="(min-width: 768px)" srcSet={dividerDesktop}/>
      <img className={style.divider} src={dividerMobile} alt="divider"/>
    </picture>
  )
}

export default Img