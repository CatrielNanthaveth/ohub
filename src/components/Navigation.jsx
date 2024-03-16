"use client";
import { useRouter } from "next/navigation";
import { LeftOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export default function Navigation() {
    const router = useRouter();

    const [isHome, setIsHome] = useState(false);

    // useEffect(() => {
    //     const currentPath = window.location.pathname;
    //     console.log(currentPath)
    //     if(currentPath === '/') setIsHome(true);
    // }, [handleClick])
    

    const handleClick = () => {
        const currentUrl = window.location.href;
        const newPath = currentUrl.split("/").slice(0, -1).join("/");
        router.replace(newPath);
        setIsHome(window.location.pathname === '/');
    };

    if(isHome) return null;

    return (
        <div onClick={handleClick}>
            <LeftOutlined />
        </div>
    );
}
