import style from './generateBtn.module.scss'
import btnImg from '../../img/icon-dice.svg'

const GenerateBtn = ({fetchOnClick,isLoading}) => {
  const {generate_btn,loading_img} = style

  return (
    <button className={generate_btn} onClick={fetchOnClick} disabled={isLoading && true}><img className={isLoading ? loading_img : undefined} src={btnImg} alt='+'/></button>
  )
}
 
export default GenerateBtn