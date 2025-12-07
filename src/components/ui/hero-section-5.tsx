'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden h-screen">
                <section className="h-full relative">
                    <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                    <div className="h-full flex flex-col justify-center pt-4 lg:pt-6 relative z-10">
                        <div className="relative z-10 flex max-w-7xl flex-col px-6 lg:flex-row lg:items-center lg:px-12">
                            <div className="text-left lg:ml-8 lg:max-w-2xl">
                                <h1 className="max-w-2xl text-balance text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-msung-hk">Calgary's Trusted Experts in Residential and Commercial Lighting</h1>
                                <p className="mt-6 max-w-2xl text-balance text-lg font-msung-hk">Delivering energy-efficient lighting solutions that inspire and perform.</p>

                                <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base">
                                        <Link href="#get-in-touch">
                                            <span className="text-nowrap">Start Building</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-primary/10">
                                        <Link href="#get-in-touch">
                                            <span className="text-nowrap">Request a quote</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#get-in-touch' },
    { name: 'About', href: '#services' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header className="relative">
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <button
                                onClick={() => window.location.reload()}
                                aria-label="home"
                                className="flex items-center space-x-2 cursor-pointer">
                                <Logo />
                            </button>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="group/link relative text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[color:var(--color-muted-foreground)] group-hover/link:bg-[color:var(--color-accent-foreground)] transition-all duration-300 ease-out group-hover/link:w-full" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="group/link relative inline-block text-muted-foreground hover:text-accent-foreground duration-150">
                                                <span>{item.name}</span>
                                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[color:var(--color-muted-foreground)] group-hover/link:bg-[color:var(--color-accent-foreground)] transition-all duration-300 ease-out group-hover/link:w-full" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="#get-in-touch">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/PureGlowLogo1.png"
            alt="PureGlow Electric logo"
            width={360}
            height={180}
            className={cn('h-10 w-auto', className)}
        />
    )
}
