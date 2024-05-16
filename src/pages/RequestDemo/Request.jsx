import { Helmet } from "react-helmet";
import { Contact } from "../../components";

export const Request = () => {
  return (
    <>
      <Helmet>
        <title>Request a Demo</title>
        <meta name="description" content="Personal AI Trainer" />
        <meta
          name="keywords"
          content="AI,FitAI, AI FIT, GYM AI, Pose Detection, Ai Trainer, Ai Nutrtion"
        />
      </Helmet>
      <Contact />
    </>
  );
};
