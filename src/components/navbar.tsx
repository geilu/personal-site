export default function Navbar() {
    return (
        <div className="navbar pt-[25px] pb-[25px] pl-[5px] pr-[5px] mt-[20px] bg-[#58297D]/50 fixed w-[300px] h-[20px]
        top-0 left-[40%] rounded-full flex flex-row justify-between gap-[10px]">
            <a href="#about-section">About</a>
            <a href="#projects-section">Projects</a>
            <a href="#skills-section">Skills</a>
        </div>
    )
}