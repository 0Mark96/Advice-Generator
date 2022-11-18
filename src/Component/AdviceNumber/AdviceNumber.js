import style from './adviceNumber.module.scss';


const AdviceNumber = ({num}) => {
    const {num_of_advice} = style
  
  return (
    <p className={num_of_advice}>ADVICE #{num}</p>
  )
}

export default AdviceNumber