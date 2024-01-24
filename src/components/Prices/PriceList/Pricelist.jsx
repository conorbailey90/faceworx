import styles from './PriceList.module.css'

function Pricelist({category, index}) {

  return (
    <div className={index % 2 == 0 ? styles.even : styles.odd}>
          <h3 style={{marginBottom: '1rem'}}>{category.name}</h3>
          <ul>
            {category.products && category.products.map(product => (
                <li key={product._id} className={styles.priceLi}>
                    <div>
                        <p>{product.name}</p>
                        {product.description && <p className={styles.desc}>{product.description}</p>}
                    </div>
                    <p className={styles.price}>£{product.price}</p>
                </li>
            ))}
          </ul>
        </div>
  )
}

export default Pricelist