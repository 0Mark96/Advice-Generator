import style from './quotes.module.scss';


const Quotes = ({advice}) => {
    const {quote_wrapper} = style
 
    return (
      <div className={quote_wrapper}>
         <h1>{advice ? `"${advice}"`: ''}</h1>
      </div>
  )
}

export default Quotes  