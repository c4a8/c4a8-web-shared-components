import ProductBlocksComponent from '../components/product-blocks.vue';

export default {
    title: 'Components/Product Blocks',
    component: ProductBlocksComponent,
};

export const Default = {
    args: {
        productBlocks: {
            items: [
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png',
                    headline: 'Ready for The Day After It Actually Happens?',
                    copy: 'AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.',
                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png',
                    headline: 'Cloud Strategy as Fast as Your Coffee Intake',
                    copy: 'Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.',


                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png',
                    headline: 'Say Goodbye to Tech Headaches',
                    copy: 'Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.',

                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png',
                    headline: 'Cloud Chaos? Will AMM Be Your Azure GPS?',
                    copy: 'AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.',

                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png',
                    headline: "Your Cloud's New Brain Trust!",
                    copy: "Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing",

                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png',
                    headline: "Safe, or Playing Security Roulette?",
                    copy: "Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship.",
                },
            ],
            cloudinary: true,
        },


    },
};

export const WithLinks = {
    args: {
        productBlocks: {
            items: [
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzERE.png',
                    headline: 'Ready for The Day After It Actually Happens?',
                    copy: 'AzERE, the Azure Emergency Response Environment, is your line of defense against IT disasters. It creates a secure environment for the fast recovery of your mission-critical services. With a deployment and infrastructure that are fully automated and based on Infrastructure as Code, AzERE ensures that your organization remains resilient in the face of emergencies.',
                    list: [
                        {
                            ctaText: 'Read more',
                            ctaHref: '/azure/azure-emergency-response-environment',
                            link: true
                        },
                        {
                            ctaText: 'Download PDF',
                            ctaHref: '/documents/onepager/gk-OnePager-AzERE.pdf',
                            link: true,
                        },
                    ],
                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AzureFoundation.png',
                    headline: 'Cloud Strategy as Fast as Your Coffee Intake',
                    copy: 'Imagine being able to automatically and flawlessly roll out your cloud environments with predefined standards, easily meet your compliance requirements, and benefit from the flexibility and scalability of the cloud - all while keeping costs under control. Azure Foundation makes this possible by creating a solid foundation for your cloud strategy that optimizes security, compliance and performance.', list: [
                        {
                            ctaText: 'Read more',
                            ctaHref: '/azure/azure-foundation',
                            link: true
                        },
                        {
                            ctaText: 'Download PDF',
                            ctaHref: '/documents/onepager/gk-OnePager-AzureFoundation.pdf',
                            link: true,
                        },
                    ],
                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AVDFoundation.png',
                    headline: 'Say Goodbye to Tech Headaches',
                    copy: 'Our AVD Foundation harnesses cutting-edge best practices and Infrastructure as Code (IaC) to deliver swift deployment perfectly tailored to your unique requirements. Armed with over 1,000 pre-configured software packages via RealmJoin and seamlessly integrated with Entra ID and Intune, we present a platform thats not just powerful, but supremely adaptable.', list: [
                        {
                            ctaText: 'Read more',
                            ctaHref: '/azure/avd-foundation',
                            link: true
                        },
                        {
                            ctaText: 'Download PDF',
                            ctaHref: '/documents/onepager/gk-OnePager-AvDFoundation.pdf',
                            link: true,
                            skin: 'secondary',
                        },
                    ],
                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-AMM.png',
                    headline: 'Cloud Chaos? Will AMM Be Your Azure GPS?',
                    copy: 'AMM provides a comprehensive solution assessment, facilitating rapid migration by analyzing your entire IT infrastructure—both physical and virtual. This assessment considers your plans, current deployment, usage, processes, and data, ensuring a tailored approach to migration.', list: [
                        {
                            ctaText: 'Read more',
                            ctaHref: 'https://www.glueckkanja.com/',
                            link: true
                        },
                        {
                            ctaText: 'Download PDF',
                            ctaHref: '/documents/onepager/gk-OnePager-AMM.pdf',
                            link: true,
                            skin: 'secondary',
                        },

                    ],
                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CloudCompetenceCenter.png',
                    headline: "Your Cloud's New Brain Trust!",
                    copy: "Why establish a Cloud Competence Center? In today's rapidly evolving digital landscape, staying ahead requires constant adoption. Our Cloud Competence Center as a Service provides expert guidance and methodologies for your cloud initiatives, helping you overcome common obstacles and harness the full power of cloud computing",
                    list: [{
                        ctaText: 'Read more',
                        ctaHref: '/azure/cloud-competence-center',
                        link: true
                    },
                    {
                        ctaText: 'Download PDF',
                        ctaHref: '/documents/onepager/gk-OnePager-CloudCompetenceCenter.pdf',
                        link: true,
                        skin: 'secondary',
                    },
                    ],
                },
                {
                    image: 'https://res.cloudinary.com/c4a8/image/upload/q_auto:best/expertise/thumb-onepager-CSOC.png',
                    headline: "Safe, or Playing Security Roulette?",
                    copy: "Located in Germany, our Cloud Security Operations Center (CSOC), offers a fortress of digital security, 24/7. Merging Microsoft's cutting-edge technology with the finesse of human expertise, we deliver unmatched vigilance for your IT infrastructure. Trust in our certified engineers to shield every aspect of your enterprise, from OnPrem to Cloud to OT/IoT, with unparalleled precision. Discover our standardized cybersecurity solution, where technology meets expert craftsmanship.", list: [{
                        ctaText: 'Read more',
                        ctaHref: '/security/cloud-security-operations-center',
                        link: true
                    },
                    {
                        ctaText: 'Download PDF',
                        ctaHref: '/documents/onepager/gk-OnePager-CSOC.pdf',
                        link: true,
                        skin: 'secondary',
                    },
                    ],

                },
            ],
            cloudinary: true
        },


    },
};
