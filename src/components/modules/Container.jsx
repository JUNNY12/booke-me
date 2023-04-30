export const Container = ({children, className}) => {
    return (
        <section className={`${className} m-8 p-10`}>
            {children}
        </section>
    )
}

export const FlexContainer = ({children, className}) => {
    return (
        <section className={`${className} flex`}>
            {children}
        </section>
    )
}

export const GridContainer = ({children, className}) => {
    return (
        <section className={`${className} grid gap-8`}>
            {children}
        </section>
    )
}

