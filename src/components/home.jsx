import parallaxLeft from '@/assets/images/paralaxLeft.svg';
import parallaxCenter from '@/assets/images/paralaxCenter.svg';
import parallaxRight from '@/assets/images/paralaxRight.svg';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import MySlider from './slider';
import { RiSendPlaneLine } from 'react-icons/ri';

const Home = () => {
  return (
    <main className="home_page">
      <section>
        <MouseParallaxContainer
          className="paralax-box"
          globalFactorX={0.2}
          globalFactorY={0}
          resetOnLeave
          style={{
            height: '100vh',
          }}
        >
          <MouseParallaxChild
            style={{
              position: 'absolute',
              // right: "0px",
              height: '100%',
              top: 0,
              // height: "100%",
              width: '100%',
              left: '100px',
            }}
            factorX={0.5}
            factorY={0}
          >
            <img src={parallaxLeft} alt="parallaxLeft" />
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{
              position: 'absolute',
              right: '0px',
              height: '100%',
              top: 0,
              height: '100%',
              width: '100%',
              left: '200px',
            }}
            factorX={0.4}
            factorY={0}
          >
            <img src={parallaxCenter} alt="parallax" />
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{
              position: 'absolute',
              right: 0,
              height: '100%',
              left: '500px',
              // left: "20%",
              // top: "-100px",
              height: '100%',
              width: '100%',
            }}
            factorX={0.2}
            factorY={0}
          >
            <img src={parallaxRight} alt="parallaxRight" />
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <div className="content">
          <h1 className="title">
            Süni İntellekt ilə Məhkəmə Perspektivini öyrənin
          </h1>
          <p className="title">Qısa təlimat başlıqları:</p>
          <MySlider />
          <label htmlFor="">
            <input type="text" />
            <RiSendPlaneLine />
          </label>{' '}
        </div>
      </section>
    </main>
  );
};

export default Home;
