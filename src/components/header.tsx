"use client";

import Link from "next/link";
import
{
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () =>
{
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4">
                <Link href="/" legacyBehavior passHref>
                    <a className="text-2xl font-bold">Tu Imagen Lab</a>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-4">
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
                                    Inicio
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/quienes-somos" legacyBehavior passHref>
                                <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
                                    Quienes Somos
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/servicios" legacyBehavior passHref>
                                <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
                                    Servicios
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/como-trabajamos" legacyBehavior passHref>
                                <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
                                    Como Trabajamos
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contacto" legacyBehavior passHref>
                                <NavigationMenuLink className={ navigationMenuTriggerStyle() }>
                                    Contacto
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};

export default Header;
