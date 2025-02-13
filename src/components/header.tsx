"use client";

import Link from "next/link";
import Image from "next/image";
import
{
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import
{
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

const Header = () =>
{
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-between py-2 px-2 md:px-0">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/LAB.png"
                        alt="Tu Imagen Lab Logo"
                        width={ 80 }
                        height={ 30 }
                        priority
                    />
                    <span className="text-2xl font-bold">Tu Imagen Lab</span>
                </Link>

                <div className="hidden md:block">
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

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground py-2 -ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="!size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                                    />
                                </svg>
                                <span className="sr-only">Toggle Menu</span>
                            </button>
                        </SheetTrigger>

                        <SheetContent
                            side="bottom"
                            className="max-h-[60svh] rounded-t-xl p-4"
                        >
                            <div className="mx-auto mt-2 mb-4 h-1.5 w-12 rounded-full bg-muted" />
                            <nav className="px-4 py-2">
                                <ul className="space-y-2 text-base">
                                    <li>
                                        <SheetClose asChild>
                                            <Link href="/" passHref>
                                                Inicio
                                            </Link>
                                        </SheetClose>
                                    </li>
                                    <li>
                                        <SheetClose asChild>
                                            <Link href="/quienes-somos" passHref>
                                                Quienes Somos
                                            </Link>
                                        </SheetClose>
                                    </li>
                                    <li>
                                        <SheetClose asChild>
                                            <Link href="/servicios" passHref>
                                                Servicios
                                            </Link>
                                        </SheetClose>
                                    </li>
                                    <li>
                                        <SheetClose asChild>
                                            <Link href="/como-trabajamos" passHref>
                                                Como Trabajamos
                                            </Link>
                                        </SheetClose>
                                    </li>
                                    <li>
                                        <SheetClose asChild>
                                            <Link href="/contacto" passHref>
                                                Contacto
                                            </Link>
                                        </SheetClose>
                                    </li>
                                </ul>
                            </nav>

                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
