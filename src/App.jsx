import "./App.css";
import casual_headshot from "/src/img/casual_headshot_square.jpg"
import githublogo from "/src/img/github.svg";
import instalogo from "/src/img/instagram.svg";
import figmalogo from "/src/img/figma.svg";
import location from "/src/img/location.svg";
import linkedinlogo from "/src/img/linkedin.svg";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <section className="h-screen w-[80%] flex mx-auto items-center">
        <div className="h-auto flex flex-row sm:flex-col-reverse space-x-10 sm:space-x-0 ">
          <div className="flex flex-col justify-center space-y-5 text-base w-full">
            {/* TODO 1: Edit the content of these tags!*/}
            <h1>Hi! I'm Gloria</h1>
            <p>
              I am a junior at Cornell University, pursuing a degree in Computer Science and a Business Minor. I am currently a TA for the Machine Learning course, but I have worked as a TA at Cornell for the introductory Python course and the computer systems organization course in the past. Last summer, I pursued machine learning research at Professor Yoav Artzi's lab at Cornell Tech, which I will be continuing during the year. In my free time, I have also dedicated my time to volunteering with Girls Who Code through Women in Computing at Cornell (WICC). I am a self-motivated and curious student seeking to apply my skills toward an internship in software engineering. I hope to use my skills to contribute to solving some of today's most important issues--climate change, social injustice, and economic inequality.
            </p>
            <p>
              Outside of computing, you can find me crocheting my latest project or going for a walk around Cornell's beautiful campus. If you have any questions or are interested in my work, feel free to email me at <a href="mailto:gcg46@cornell.edu">gcg46@cornell.edu</a>
            </p>
            <div className="flex flex-row items-center space-x-2">
              <img src={location} />
              <p>Philadelphia, Pennsylvania</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <p>Avaliable for new projects</p>
            </div>
          
            <div className="flex flex-row h-10 space-x-2">
              <a href="https://github.com/Gloria-Geng">
                <img src={githublogo} />
              </a>
              <a href="https://www.instagram.com/gloria_2021/?hl=en">
                <img src={instalogo} />
              </a>
              <a href="https://www.linkedin.com/in/gloria-geng/">
                <img src={linkedinlogo} />
              </a>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <img
              src={casual_headshot}
              alt="Casual headshot"
              className="object-contain sm:p-10"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#E5D0FF] min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium">Experience</div>
          {/* TODO 4: Add your work experience here by editing the json files in src/data/experiences.json */}
          <div className="text-base">
            Here is a quick summary of my most recent experiences:
          </div>
          <Experience className="w-full" />
        </div>
      </section>
      <section className="min-h-screen w-screen flex justify-center rounded-t-3xl p-10 ">
        <div className="flex flex-col items-center space-y-5 w-full">
          <div className="flex text-3xl font-medium">Selected Projects</div>
          {/* TODO 5: Add your projects here by editing the json files in src/data/projects.json */}
          <div className="text-base">Here are some projects I have built:</div>
          <Project className="w-full" />
        </div>
      </section>
      {/* TODO 6: Change the email and phone number to your own in the footer component */}
      <Footer />
    </>
  );
}

export default App;
