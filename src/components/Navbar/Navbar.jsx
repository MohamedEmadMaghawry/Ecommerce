import Link from "next/link"
 import styles from "./Navbar.module.css"
 import Button from "../../element/Button/Button"
 import { links } from "./data"
 import Logo from "@/element/Logo/Logo"
 import DarkModeTog from "../DarkModeTog/DarkModeTog.js"

export default function Navbar() {
  return (
<div className={styles.container}>
    <Logo/>
  <div className={styles.Links}>
    <DarkModeTog/>
    {links.map(link=><Link href={link.url} key={link.id} className={styles.Link}>{link.title}</Link>)}
  <Button/>
  </div>
</div>
  )
}

