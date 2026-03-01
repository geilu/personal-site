export default function SkillCard({text, logoPath} : Readonly<{ text: string, logoPath: string }>) {
    return (
        <div id="skill-card" className="bg-[#291838] w-[200px] h-[200px]
        flex flex-col justify-evenly items-center rounded-xl border-[#341c4a] border-[6px]">
            <img src={logoPath} alt="logo" width="100" height="100"/>
            <h1 className="text-white font-bold text-3xl">{text}</h1>
        </div>
    )
}