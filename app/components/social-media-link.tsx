export default function SocialMediaLink({
    Icon,
    url,
}: {
    Icon: React.ElementType;
    url: string;
}) {
    return (
        <a href={url} target="_blank">
            <div className="flex w-fit p-3 items-center rounded-xl outline border-solid">
                <Icon color="white" size={20} />
            </div>
        </a>
    );
}
