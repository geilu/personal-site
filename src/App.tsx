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
            <div className="p-[150px] pb-[300px] pt-[300px] flex flex-row gap-[100px] justify-between w-[100%]">
                <div className="max-w-[550px] min-w-0 mr-[50px]">
                    <h1 className="text-6xl font-bold mb-[20px] text-[#9C3EE4]">About</h1>
                    <p className="text-white text-3xl text-wrap break-all">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <button className="mt-[30px] p-[10px] bg-[#9C3EE4]">link</button>
                </div>
                <div className="p-[50px] w-[100%] max-w-[630px]">
                    <img src={aboutCatSvg} alt="cat" />
                </div>
            </div>

            <hr className="bg-[#9C3EE4] h-[4px] w-[80%]"/>
            {/* projects section */}
            <div className="flex flex-row gap-[130px] justify-center p-[80px] pt-[200px] pb-[200px] w-[100%]">
                <div>
                    <img src={projectCatSvg} alt="cat" />
                </div>
                <div className="flex flex-row gap-[80px]">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            <hr className="bg-[#9C3EE4] h-[4px] w-[80%]"/>
            {/* skills section */}
            <div className="flex flex-row justify-center p-[150px] w-[100%] pt-[200px] pb-[200px] gap-[20px]">
                <div className="flex flex-row gap-[50px] justify-center max-w-[800px] flex-wrap ">
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
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
