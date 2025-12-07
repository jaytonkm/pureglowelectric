'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What services does PureGlow Electric offer?',
            answer: 'We specialize in residential and commercial electrical services with a focus on lighting solutions. Our services include lighting design and installation, electrical upgrades, safety inspections, code compliance work, and custom lighting projects. We deliver solutions that are both functional and beautiful for homes and businesses.',
        },
        {
            id: 'item-2',
            question: 'Do you service my area?',
            answer: 'Yes, we proudly serve Calgary and surrounding areas. Contact us to confirm we cover your specific location.',
        },
        {
            id: 'item-3',
            question: 'How much do your services cost?',
            answer: 'Pricing varies depending on the scope and complexity of each project. We provide customized quotes after understanding your specific requirements. Contact us for a free consultation and tailored quote.',
        },
        {
            id: 'item-4',
            question: 'Are you licensed and insured?',
            answer: 'Absolutely. PureGlow Electric is fully licensed and insured, and all our work meets Alberta electrical codes and safety standards.',
        },
        {
            id: 'item-5',
            question: 'I don\'t know what lighting would work best for my space.\nCan you help?',
            answer: 'That\'s exactly what we\'re here for. We provide expert guidance to help you turn your ideas into a practical, beautiful lighting solution. We\'ll help you design lighting that enhances your space and fits your lifestyle.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Your questions answered</p>
                        <div className="mt-4 flex md:mt-6">
                            <Button asChild>
                                <Link href="#get-in-touch">Reach Out Now</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

            </div>
        </section>
    )
}
