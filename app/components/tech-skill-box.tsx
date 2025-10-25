export default function TechSkillBox({
    Icon,
    name,
}: {
    Icon: React.ElementType;
    name: string;
}) {
    return (
        <div className="flex gap-2 w-fit p-3 items-center rounded-xl outline border-solid">
            <Icon color="white" size={20} />
            <p>{name}</p>
        </div>
    );
}
