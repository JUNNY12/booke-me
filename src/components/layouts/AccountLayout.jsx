import { Footer, Header } from "../modules"
import { Profile } from "../templates/account"
import { DefaultLayout } from "./DefaultLayout"


export const AccountLayout = ({ children }) => {
    return (
        <section className=" bg-white-100">
            <Header />
            <section className=" pt-32 bg-white-100 mx-8 tabletS:mx-4 flex tabletM:flex-col tabletM:items-center tabletM:justify-center">
                <div className="w-1/5 tabletM:w-full">
                    <Profile />
                </div>

                <div className="w-4/5 tabletM:w-full ms-8 h-max
                 tabletM:ms-0 tabletM:mt-8
                 p-4 rounded-sm shadow-sm shadow-black-300 mb-6 bg-white-50
                 ">
                    {children}
                </div>

            </section>
            <Footer />
        </ section>
    )
}