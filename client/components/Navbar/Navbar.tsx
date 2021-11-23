import Link from 'next/link';
import styles from './Navbar.module.css';
import { useFetchUser } from '../../utils/user';

const Named = () => {
  const { user, loading } = useFetchUser();

  return (
    <div className={styles.navbar}>
      <div className="logo">
        <img src="../styles/logoremovebg.png" alt="" />
        <Link href="/product">
          <a>
            <img
              className={styles.logo}
              src={
                'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fadadf789-61b7-46b3-842c-15ea664efab4%2Flogo_crop.png?table=block&id=89d15df5-c523-42a0-962a-4fd639448767&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=1920&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
              }
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className={styles.menu}>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <Link href="/download">
          <a>Download</a>
        </Link>
        <Link href="/pricing">
          <a>Pricing</a>
        </Link>
      </div>
      <div className={styles.auth}>
        {user && !loading ? (
          <>
            <Link href="/note">
              <a>My Note</a>
            </Link>
            <Link href="/api/logout">
              <a>Logout</a>
            </Link>
          </>
        ) : null}
        {!user && !loading ? (
          <>
            <Link href="/api/login">
              <a>Login</a>
            </Link>
            <Link href="/api/login">
              <a>Try Missage Free</a>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Named;
