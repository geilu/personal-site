import ProjectTag from "./projectTag.tsx";

interface Content {
    title: string;
    desc: string;
    repo: string;
    tags: string[];
}

export default function ProjectCard(props: Readonly<Content>) {
    const handleClick = () => {
        globalThis.location.href = props.repo;
    }

    return (
        <div className="project-card flex flex-col justify-between bg-[#291838] w-[350px] h-[450px] p-[40px] rounded-2xl">
            <div>
                <h1 className="text-[26px] text-white font-bold">{props.title}</h1>
                <hr className="rounded-full h-[4px] bg-[#762ab0] w-[200px] mt-[10px]"/>

                <div className="flex flex-row justify-start gap-2 mt-[10px]">
                    {props.tags.map((tag) => (
                        <ProjectTag tag={tag} key={tag} />
                    ))}
                </div>

                <p className="text-[18px] mt-[10px] justify-left text-white">{props.desc}</p>
            </div>
            <button className="bg-[#8137b9] rounded-[15px] w-[100px] h-[40px] font-bold text-white"
                    onClick={handleClick}>repo</button>
        </div>
    )
}