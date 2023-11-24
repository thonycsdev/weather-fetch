import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Link from "next/link";

type NavbarProps = {
    onClick: () => void;
};

function Navbar({ onClick }: NavbarProps) {
    const menuItens = [
        {
            name: "Home",
            icon: <HomeIcon />,
            onClick: () => {
                <Link href={"/"} />;
            },
            ariaLabel: "home-item",
        },
        {
            name: "Search",
            icon: <SearchIcon />,
            onClick: onClick,
            ariaLabel: "search-item",
        },
        {
            name: "Profile",
            icon: <PersonPinIcon />,
            ariaLabel: "profile-item",
        },
    ];
    return (
        <>
            <div className="h-16 w-screen fixed bottom-0 flex justify-around items-center rounded-t-full bg-blue-300 text-white animate-slide-bottom">
                {menuItens.map((item) => (
                    <div
                        aria-label={item.ariaLabel}
                        key={item.name}
                        onClick={item.onClick}
                        className="scale-125 hover:border hover:border-blue-200 hover:scale-150 p-1 rounded-full hover:bg-blue-200 hover:shadow-xl transition-all duration-300"
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Navbar;
