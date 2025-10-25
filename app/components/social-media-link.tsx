export default function SocialMediaLink({
    Icon,
    title,
}: {
    Icon: React.ElementType;
    title: string;
}) {
    return (
        <div className="flex items-center">
            <Icon color="white" width={50} height={50} />
            <p>{title}</p>
        </div>
    );
}
