import { SlLink } from "react-icons/sl";

export default function ProjectBox({
    name,
    startDate,
    endDate,
    description,
    link,
}: {
    name: string;
    startDate: string;
    endDate?: string;
    description: string;
    link: string;
}) {
    return (
        <div className="border-solid border p-4 rounded-lg w-full overflow-hidden ">
            <a
                href={link}
                className="text-xl hover:underline flex items-center gap-2"
                target="_blank"
            >
                <p>{name}</p>
                <SlLink size={15} />
            </a>
            {endDate ? (
                <p className="text-sm">
                    {startDate} - {endDate}
                </p>
            ) : (
                <p className="text-sm">{startDate}</p>
            )}
            <p>{description}</p>
        </div>
    );
}
