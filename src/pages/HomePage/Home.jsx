import { Helmet } from "react-helmet";
import {
  Contact,
  Course,
  MainAcademy,
  Map,
  Numbers,
  Partners,
} from "../../components";

import { MainCours } from "../../components/MainCourse/MainCours";

export const Home = () => {
  return (
    <>
      <div className="nk-mask bg-pattern-dot-white-sm"></div>
      <Helmet>
        <title>FitAI - be healthy with personal AI trainer.</title>
        <meta name="description" content="Personal AI Trainer" />

        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection"
        />
      </Helmet>

      <main className="nk-pages">
        <MainAcademy />
        <Course />
        <Map />
        <MainCours />
        <Partners />
        <br />
        <br />
        <Numbers />
        <br />
        <br />
        <br />
        <Contact />
      </main>
    </>
  );
};
