import PortfolioComponent from "../components/portfolio.vue";

export default {
    title: 'Components/Portfolio',
    component: PortfolioComponent,
    argTypes: {
    },
};

export const Portfolio = {
    args: {
        items: [
            {
                image: "/azure/one-pager-AzureAwareness.jpg",
                alt: "Azure Awareness",
                cloudinary: true,
                href: "/documents/onepager/gkgab-AzureAwarenessOnePager.pdf",
            },
            {
                image: "/azure/one-pager-AzureStrategy.jpg",
                alt: "Azure Awareness",
                cloudinary: true,
                href: "/documents/onepager/gkgab-AzureOfferingStrategyOnePager.pdf",
            },
        ],
    },
};

