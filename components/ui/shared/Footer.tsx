import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t  ">
      
      <div className="p-4  flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row ">
      <Link href="/" className="w-36"> <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38}/>

        
        </Link>

        <p>2024 EventTek. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer