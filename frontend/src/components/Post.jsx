import React from 'react'
import styles from './Post.module.css'
import { Link, useLoaderData } from 'react-router-dom';

const Post = ({id, author, body}) => {
  return (
    <li className={styles.post}>
      <Link to={id}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;