import styles from './PriceList.module.css'

function Pricelist({category, index}) {

  return (
    <div className={styles.listItem}>
          <h3 style={{marginBottom: '1rem'}}>{category.catName}</h3>
          <ul>
            {category.products && category.products.map((product, idx) => (
                <li key={idx} className={styles.priceLi}>
                    <div className={styles.treatment}>
                        <p>{product.treatment}</p>
                        {product.description && <p className={styles.desc}>{product.description}</p>}
                    </div>
                    <div >
                      <p  className={styles.price}>{product.price}</p>
                    </div>
                  
                </li>
            ))}
          </ul>
        </div>
  )
}

export default Pricelist