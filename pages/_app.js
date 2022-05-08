import '../styles/globals.css'
import '../assets/fonts/gilroy/stylesheet.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'reactstrap';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  const navigate = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      let n;
      let a = document.querySelector('[data-cubie].active');
      if (a?.nextElementSibling) {
        n = a.nextElementSibling;
      } else {
        n = document.querySelector('[data-cubie="1"]');
      }
      a?.classList.remove('active');
      n?.classList.add('active');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App '>
      <div className="containers">
        <div className='Header'>
          <img src={"https://www.cubie.art/images/dfbc31dada3586107a843274f52ab736.svg"} alt='Cubie Logo' />

          <Button className='btn-primary' onClick={() => navigate.push('/my-cubies')}>
            My Cubies
          </Button>
        </div>

        <Component {...pageProps} />

      </div>
      <div>
      <Col className='footbanner'>
        <Row>
        <Col md={6} className='left'>
              <h1>
                Explore a set of <strong>cubic universes!</strong>
              </h1>
            <div className="p">
              <p>
                <b>Cubie is a community-driven NFT & GameFi Platform.</b>
                <br />
                Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games.
              </p>
            </div>
        </Col>
        <Col md={6} className='right'>
          <img src='/ix/cubie-1.png'  data-cubie="1" alt='Cubie Img' className='active'/>
          <img src='/ix/cubie-2.png'  data-cubie="2" alt='Cubie Img' />
          <img src='/ix/cubie-3.png'  data-cubie="3" alt='Cubie Img' />
          <img src='/ix/cubie-4.png'  data-cubie="4" alt='Cubie Img' />
          <img src='/ix/cubie-5.png'  data-cubie="5" alt='Cubie Img' />
        </Col>
        </Row>
      </Col>
      </div>
      <div className='containers'>
        <div className='Footer'>
          <div className='socials'>
            <a href='https://twitter.com/Cubie3DNFT' target='_blank' rel="noopener noreferrer">
              <img src='/icons8-twitter.gif' alt='Twitter' />
            </a>
            <a href='https://www.cubie.art' target='_blank' rel="noopener noreferrer">
              <img src='/icons8-geography.gif' alt='Website' />
            </a>
            <a href='https://t.me/CubieNFT' target='_blank' rel="noopener noreferrer">
              <img src='/icons8-telegram-app.gif' alt='Telegram' />
            </a>
          </div>
          <div className='copyright'>Copyright</div>
        </div>
      </div>
    </div>
  )
}

export default MyApp
