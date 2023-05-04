
export const Button = ({children, className, ...rest}) => {
    return (
        <button className={`${className} outline-pink-600`} {...rest}>{children}</button>
    )

}