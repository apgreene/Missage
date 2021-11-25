import React from 'react';
import styles from './pricing.module.css';
import Link from 'next/link';

const Named = () => {
  return (
    
  <div className={styles.page}>
  
    <div className={styles.container}>
      <img
          className={styles.logo}
          src={
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fadadf789-61b7-46b3-842c-15ea664efab4%2Flogo_crop.png?table=block&id=89d15df5-c523-42a0-962a-4fd639448767&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=1920&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
          }
          alt=""
        />
      <h1>Missage <span className={styles.pro}> Pro </span> Coming soon!</h1>
      <h3>Don't Miss out! </h3>
      <img
          className={styles.featureImg}
          src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0048cbb3-a790-4206-af5d-3624715906a6%2Fheart.png?table=block&id=4d76d2f5-11db-477e-a379-8a9c86849050&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
          alt=''
        />
      <Link href="/product">
        <span className={styles.button}>
          <a className={styles.link}>
            <h4 className={styles.buttonHeader}>Back to Home page..</h4>
          </a>
        </span>
      </Link>
    </div>

  </div>
  )
};



export default Named;
