import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'








async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
  throw new Error('Failed to fetch data')
  }
  return res.json()
}


export async function generateMetadata({ params}) {
const id = params.id
const product =await getData(params.id)
 return {
    title: product.title,
    description: product.description
    }
  }

 






export default async function post({params}) {
  const product = await getData(params.id)
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
          className={styles.image}
          src={product.thumbnail}
          alt={product.title}
          fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map(image=>(
          <Image key={product.id}
          src={image}
          alt={product.title}
          width={150}
          height={150}
          
          
          
          />
          )
          )}
        </div>
        <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore obcaecati vel minima sequi, ipsa, alias ad illum nobis molestiae velit quod numquam accusantium quas, quibusdam vitae a laborum corrupti repellat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus illo blanditiis aliquam quis? Accusantium, odio, itaque non, velit nesciunt molestias totam quasi amet maiores quia quas quibusdam nam esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa atque consectetur architecto tempora magni voluptatem officiis qui ea, consequuntur, molestias quam nisi hic voluptatum fugit molestiae. Sint consequuntur eligendi est.  molestiae, quia nisi vitae et! Aliquid.</p>
      </div>



    </div>
  )
}

