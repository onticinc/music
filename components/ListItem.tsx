"use client"

import { useRouter } from "next/navigation";

interface ListItemsProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemsProps> = ({
    image,
    name,
    href,
}) => {

    const router = useRouter();

    const onClick = () => {
    
    }
    return(
        <div className="text-white">
            List Item!
        </div>
    )
}

export default ListItem