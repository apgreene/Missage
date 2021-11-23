import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from './product.module.css';

const Named = () => {
  return (
    <div>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Missage</title>
      </Head>
      <div className={styles.page}>
        <Navbar></Navbar>
        <div className={styles.title}>
          <div className={styles.col}>
            <p className={styles.xl}>Don't Miss A Word!🤞</p>
            <p className={styles.m}>
              An assistant in your hand who improved your work ability and
              quality of life! 
            <br />
            Finally, 
              Your AI recording record manager is
              here. 🚀
            </p>
            <div className={styles.buttonOverlay}>
              <Link href='/api/login'>
                <a className={styles.try}> ➡️ Try Missage Free ⬅️ </a>
              </Link>
            </div>
          </div>
          <img
            className={styles.titleimg}
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0cdd6d87-f37f-460f-bd88-b6034206a853%2Fdocs.png?table=block&id=d09e70d6-a625-46ab-9fb0-8d3c204bf711&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
            alt=''
          />
        </div>
      </div>
      <div className={styles.wave}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          fill='#ffffff'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'
          ></path>
        </svg>
      </div>
      <div className={styles.features}>
        <p className={styles.l}>✨See what you can do✨</p>
        <p className={styles.feature}>
          <div className={styles.content}>
            <p className={styles.featureTitle}>
              Make a note from your own audio 🎤
            </p>
            <p>
              You can use your recorded audio, or also can record it directly!
            </p>
          </div>
          <img
            className={styles.featureImg}
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8863ec15-769d-437a-a0e2-170936b0e586%2Fadd_files.png?table=block&id=d9a40983-862a-493e-b122-25cef5500026&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
            alt=''
          />
        </p>
        <p className={styles.feature}>
          <div className={styles.content}>
            <p className={styles.featureTitle}>
              Easy login with your google account 🍰
            </p>
            <p>I hate forms, just click your google ID and done!</p>
          </div>
          <img
            className={styles.featureImg}
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F469e7dd4-ff57-4c32-b2db-ccdb3b52f299%2Fuser.png?table=block&id=13072b46-4e4f-4b8b-a0f2-b87308154525&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
            alt=''
          />
        </p>
        <p className={styles.feature}>
          <div className={styles.content}>
            <p className={styles.featureTitle}>
              Label your notes with cute emogi 💗
            </p>
            <p>
              Labelling with colorful emoji helps to you read your note list.
            </p>
          </div>
          <img
            className={styles.featureImg}
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0048cbb3-a790-4206-af5d-3624715906a6%2Fheart.png?table=block&id=4d76d2f5-11db-477e-a379-8a9c86849050&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
            alt=''
          />
        </p>
        <p className={styles.feature}>
          <div className={styles.content}>
            <p className={styles.featureTitle}>
              Recap with both audio and text 📝
            </p>
            <p>
              Want to check audio file and text?! You can edit the generated
              text!
            </p>
          </div>
          <img
            className={styles.featureImg}
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0252958-5b26-46ec-bf9e-151c5ab7377e%2Faudio.png?table=block&id=e7292108-58cd-4990-a0cf-f618b9ce6bdf&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
            alt=''
          />
        </p>
      </div>
      <p className={styles.goals}>
        <p className={styles.l}>✨When do I use it?✨</p>
        <p className={styles.feature}>
          <div className={styles.goalContent}>
            <p className={styles.featureTitle}>
              Imagine your life with Missage!
            </p>
            <img
              className={styles.featureImg}
              src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F75887726-59b6-46c4-9526-07af5fdadb81%2Fmeeting.png?table=block&id=d92fc98c-460e-42eb-bf1e-df0af20519d7&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
              alt=''
            />
            <p className={styles.pText}>
              Instead of dictating the conversation by hand or using another
              recording app at the interview site, I used Missage to record the
              conversation!
            </p>
            <img
              className={styles.featureImg}
              src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd5139108-a1b2-4cd5-87a7-388f09429df6%2Fvideo.png?table=block&id=87ea7cef-a043-4535-8762-880c206893ad&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
              alt=''
            />
            <p className={styles.pText}>
              Writing down subtitle by repeating the video several times was a
              time-consuming task. Now, I just extract voice files from videos,
              convert them into text, and refine them while listening again!
            </p>
            <img
              className={styles.featureImg}
              src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6dbef193-80fc-496d-8fef-5071d6b165cd%2Finterview.png?table=block&id=6b7e7958-0c72-4e3c-8545-d6fa375d8a57&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
              alt=''
            />
            <p className={styles.pText}>
              It is useful for one-on-one meetings or business interviews.
              Usually, I felt sorry and burdened with the person in front of me
              taking notes or typing with my head down, but now I can focus on
              the conversation comfortably making eye contact with the other
              person.
            </p>
            <img
              className={styles.featureImg}
              src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f0566af-8f3d-4b6c-b63b-bc5e548850cd%2Flecture.png?table=block&id=5ec5d42e-27e2-4791-9cbf-4cc75e44d5b1&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=2000&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
              alt=''
            />
            <p className={styles.pText}>
              I recorded the class and organized the contents of the day's class
              through voice records converted into text. I focused more on the
              class, and naturally reviewed the class by organizing lecture
              records.
            </p>
          </div>
        </p>
      </p>
      <div className={styles.bottom}>
        <img
          className={styles.logo}
          src={
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fadadf789-61b7-46b3-842c-15ea664efab4%2Flogo_crop.png?table=block&id=89d15df5-c523-42a0-962a-4fd639448767&spaceId=d6c7f512-633e-4709-ac5f-bc0979392ab1&width=1920&userId=862b32cc-9b45-426d-b64b-9590ffe306bf&cache=v2'
          }
          alt=''
        />
        <Link href='/api/login'>
          <a className={styles.try}> ➡️ Try Missage Free ⬅️ </a>
        </Link>
      </div>
      <div className={styles.features}>
        <Link href='https://www.buymeacoffee.com/jihyojeon'>
          <img
            className={styles.buymeacoffee}
            src='https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP25hbWU9amloeW9qZW9uJnNpemU9MzAwJmJnLWltYWdlPWJtYyZiYWNrZ3JvdW5kPUY0NzFGRg==&creator=jihyojeon&design_code=1&design_color=%23F471FF&slug=jihyojeon'
            alt=''
          />
        </Link>
      </div>
    </div>
  );
};

export default Named;
