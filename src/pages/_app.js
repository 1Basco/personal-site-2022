import ParticleArea from "../components/ParticlesArea/ParticlesArea";
import Theme from "../styles/theme";
import Particles from "react-tsparticles";

export default function App({ Component, pageProps }) {
  return (
    <div className="memes">
      <Theme>
        {/* <ParticleArea /> */}
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}
