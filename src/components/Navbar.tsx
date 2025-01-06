import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import React, { useState } from 'react';
import Logo from "./logo";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from 'react';
import { Input } from "./ui/input";
import { useAppSelector } from "@/store/hooks";
import { ShoppingBasketIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
function Navbar() {
    const [query, setQuery] = useState("")
    const router= useRouter()

    const authStatus = useAppSelector((state) => state.auth.status)
    const user = useAppSelector((state) => state.auth.userData)

    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' &&  query.trim() !== "")
        {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    }

    const navItems: {
        name: string;
        to?: string;
        active?: boolean;
    }[] = [
        {
            name: "Search",
        },
        {
            name: "Login",
            to: "/login",
            active: !authStatus
        },
        {
            name:"Cart",
            to:"/cart",
            active:authStatus
        },
        {
            name:"Returns & Orders",
            to:"/orders",
            active:authStatus
        },

    ]
    return (
        <Menubar className="flex flex-row justify-between items-center bg-gradient-to-r from-black to-gray-800 rounded-lg p-2 px-8 dark:from-gray-900 dark:to-gray-700 sm:h-16 h-12 w-full text-white ">
        <MenubarMenu>
            <div className="sm:mr-12 mr-8 max-w-24">
                <Link href="/" className="flex flex-shrink-0 items-center size-14">
                    <Logo />
                </Link>
            </div>
        </MenubarMenu>
            {navItems.map((item) => (
                <MenubarMenu key={item.name}>
                    {item.active && item.name !== "Search" && (
                        <Button variant="ghost" onClick={() => router.push(item.to!)} className=" text-wrap max-w-24 ">{item.name}</Button>
                    )}
                    {item.name === "Search" && (
                        <div className="divide-x divide-gray-500 hidden sm:flex flex-grow flex-row justify-center items-center max-w-5xl">
                            <Input
                                type="search"
                                placeholder="Search the channel videos"
                                autoCorrect="off"
                                spellCheck="false"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="dark:bg-off-white "
                            />
                            <Button onClick={()=>router.push(`/search?q=${encodeURIComponent(query)}`)}>{item.name}</Button>
                        </div>
                    )}
                </MenubarMenu>
            ))
            }
            {authStatus &&
                <MenubarMenu>
                   
                            <ShoppingBasketIcon/>
                            <span className="sm:text-sm text-xs font-extralight text-white text-center">Cart</span>
                </MenubarMenu>
            }
            {authStatus &&
                <MenubarMenu>
                    <MenubarTrigger>
                        <Avatar className="max-w-[120px] sm:h-14 h-10 sm:w-14 w-10">
                            <AvatarImage src={user?.data?.avatar?.secure_url} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </MenubarTrigger>
                    <MenubarContent>
                        <li className="flex flex-row justify-center items-center">
                            <Avatar>
                                <AvatarImage src={user?.data?.avatar?.secure_url} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className="p-2 flex flex-col justify-between items-center">
                                <div className="text-lg font-semibold">{user?.data?.username}</div>
                                <div className=" font-medium">{user?.data?.email}</div>
                            </div>
                        </li>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href={`/${user?.data?.username}/videos`} >View your channel</Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link href={`/channel/dashboard`} >View your dashboard</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            {/* <LogoutBtn /> */}
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            }
        </Menubar>
    );
}

export default Navbar;
