import Link from 'next/link';
import { useRouter } from 'next/router';
import { Typography } from '../elements';

const TopHeader = () => {
    const router = useRouter();
    const { asPath } = router;
    //   console.log(asPath)
    const decodedPath = decodeURIComponent(asPath); // Decode the URL-encoded asPath
    const segments = decodedPath.split('/');
    //   console.log(segments)
    const currentRoute = segments[segments.length - 1] || 'Home';

    const links = segments.map((segment, index) => {
        const path =
            index === 0
                ? `/${segment}`
                : `${segments.slice(0, index + 1).join('/')}`;
        const text = segment || 'Home';
        // console.log(path)
        // console.log(text)

        return (
            <Link key={path} href={path}>
                <div className="inline-flex text-[16px] mobileM:text-[12px] flex-wrap justify-center items-center text-black-900">
                    {index === 0 ? text : ` / ${text}`}
                    &nbsp;
                </div>
            </Link>
        );
    });

    return (
        <div className=" bg-white-100 mt-20 mb-8 h-[200px] px-4 tabletS:mt-10 tabletS:-mb-8 flex flex-col justify-center items-center">
            <nav className="">
                <Typography
                    variants={1}
                    className={`text-4xl text-center tabletS:text-2xl mobileXL:text-xl`}
                >
                    {currentRoute}
                </Typography>
                <div className="flex text-lg justify-center items-center mt-3 italic">
                    {links}
                </div>
            </nav>
        </div>
    );
};

export default TopHeader;
