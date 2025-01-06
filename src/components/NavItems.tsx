import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import navItems from "@/helpers/data/catagoris";

function NavItems() {
  return (
    <Menubar>
      {navItems.map((item) => (
        <MenubarMenu key={item?.name}>
          <MenubarTrigger>{item?.name}</MenubarTrigger>
          <MenubarContent>
            {item?.subItems?.map((subItem) => (
              <MenubarSub key={subItem?.name}>
                <MenubarSubTrigger>
                  <Link href={subItem?.to}>{subItem?.name}</Link>
                </MenubarSubTrigger>
                <MenubarSubContent>
                  {
                    subItem?.subSubItems?.map((subSubItem) => (
                      <MenubarItem key={subSubItem?.name}>
                        <Link href={subSubItem?.to}>{subSubItem?.name}</Link>
                        </MenubarItem>
                    ))
                  }
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}

export default NavItems;
