import Link from "next/link"
import { useRouter } from "next/router"
import { Typography } from "../elements"

const TopHeader = () => {
  const router = useRouter()
  const { asPath } = router
//   console.log(asPath)
  const segments = asPath.split('/')
//   console.log(segments)
  const currentRoute = segments[segments.length - 1] || "Home";

  const links = segments.map((segment, index) => {
    const path = index === 0 ? `/${segment}` : `${segments.slice(0, index + 1).join('/')}`;
    const text = segment || 'Home';
    // console.log(path)
    // console.log(text)
  
    return (
      <Link key={path} href={path}>
        <div className="inline-flex gap-6 text-black-900">
          {index === 0 ? text : ` / ${text}`} 
          &nbsp;
        </div>
      </Link>
    );
  });

  return (
<div className="pt-16 tabletS:pt-8" >
<nav className="bg-white-100 py-12">
      <Typography variants={1} className={`text-7xl text-center tabletS:text-4xl`}>
        {currentRoute}
      </Typography>
      <div className="flex text-lg justify-center items-center mt-3 italic">
        {links}
      </div>
    </nav>
</div>  )
}

export default TopHeader
