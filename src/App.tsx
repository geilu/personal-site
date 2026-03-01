import Navbar from "./components/navbar.tsx";
import ProjectCard from "./components/projectCard.tsx";
import SkillCard from "./components/skillCard.tsx";
import aboutCatSvg from "./assets/aboutcat.svg";
import projectCatSvg from "./assets/projectcat.svg";
import skillCatSvg from './assets/skillcat.svg';

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                {/* about section */}
                <div id="about-section" className="p-[150px] pb-[300px] pt-[300px] flex flex-row gap-[100px] justify-between w-[100%]">
                    <div className="max-w-[550px] min-w-0 mr-[50px]">
                        <h1 className="text-6xl font-bold mb-[20px] text-[#9C3EE4]">About</h1>
                        <p className="text-white text-3xl text-wrap break-normal">Lorem ipsum <b>dolor sit</b> amet, consectetur adipiscing elit, <b>sed do</b> eiusmod tempor incididunt ut labore et <b>dolore magna</b> aliqua. Ut enim ad</p>

                        <div className="mt-[32px]">
                            <a className="p-[12px] pl-[16px] pr-[16px] bg-[#8137b9] rounded-[16px] font-bold text-white text-[18px]" href="https://github.com/geilu">my github</a>
                        </div>
                    </div>
                    <div className="p-[50px] w-[100%] max-w-[630px]">
                        <img src={aboutCatSvg} alt="cat" />
                    </div>
                </div>

                <hr className="bg-[#9C3EE4] h-[4px] w-[80%]"/>
                {/* projects section */}
                <div id="projects-section" className="flex flex-row gap-[130px] justify-center p-[80px] pt-[200px] pb-[200px] w-[100%]">
                    <div>
                        <img src={projectCatSvg} alt="cat" />
                    </div>
                    <div className="flex flex-row gap-[80px]">
                        <ProjectCard
                            title="title1"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                            repo="https://github.com/geilu/personal-site"
                            tags={["Java", "React"]}/>
                        <ProjectCard
                            title="title2"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            repo="https://github.com/geilu/personal-site"
                            tags={["tag1", "verylongtesttag2"]}/>
                    </div>
                </div>

                <hr className="bg-[#9C3EE4] h-[4px] w-[80%]"/>
                {/* skills section */}
                <div id="skills-section" className="flex flex-row justify-center p-[150px] w-[100%] pt-[200px] pb-[200px] gap-[20px]">
                    <div className="flex flex-row gap-[50px] justify-center max-w-[800px] flex-wrap ">
                        <SkillCard text="React" logoPath="../src/assets/skill_icons/reacticon.svg"/>
                        <SkillCard text="Java" logoPath="../src/assets/skill_icons/javaicon.svg" />
                        <SkillCard text="skill3" logoPath=".." />
                        <SkillCard text="skill4" logoPath=".." />
                        <SkillCard text="skill5" logoPath=".." />
                    </div>
                    <div>
                        <img src={skillCatSvg} alt="cat" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
