export const Container = ({ children, className }) => {
    return (
        <section
            className={`${className} m-8 tabletS:mx-0 tabletS:px-4 tabletS:my-0  p-10`}
        >
            {children}
        </section>
    );
};

export const FlexContainer = ({ children, className }) => {
    return <section className={`${className} flex`}>{children}</section>;
};

export const GridContainer = ({ children, className }) => {
    return <section className={`${className} grid`}>{children}</section>;
};
