export default function ProjectTag({tag}: Readonly<{ tag: string }>) {
    return (
        <div className="bg-[#251533] text-white p-[5px] pl-[10px] pr-[10px] rounded-full border-solid border-[#60258d] border-[2px] font-bold">
            {tag}
        </div>
    )
}