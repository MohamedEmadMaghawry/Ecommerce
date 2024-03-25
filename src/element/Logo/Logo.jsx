import Link from "next/link"
import styles from "./Logo.module.css"
import { Montserrat } from "next/font/google";
 const LogoFont = Montserrat({ subsets: ["latin"] });
export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${LogoFont.className}`}>MMR Store</Link>
  )
}
