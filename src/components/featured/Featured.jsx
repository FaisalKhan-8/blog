import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Beatrow dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src='/p1.jpeg'
            alt='fill'
            width={550}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p h1 className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            arcu nisl, auctor rutrum ex a, egestas hendrerit nisl. Aliquam erat
            volutpat. Etiam vel velit viverra, placerat leo at, imperdiet felis.
            Nulla eu ipsum eu lacus blandit auctor. Sed porta mi ac diam
            convallis
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
