import style from './Input.module.css'

export const Input = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div className={hasError ? style.error : ''}>
               <input {...input}{...props}/>
            </div>
            <div>
                {hasError && <span className={style.errorSpan}>{meta.error}</span>}
            </div>
        </div>
    )
}