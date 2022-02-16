module.exports = {
    siteMetadata: {
        siteUrl: "https://kmpworldwide.com",
        title: "Kalandanya Distribution.",
        description:
            "KMP Distribution is a service for musicians that puts your music into online stores & streaming services. ",
        author: "Melvin chipimo",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "Kalandanya",
        twitterUsername: "@Kmp_Worldwide",
        getform_url:
            "https://getform.io",
        socials: [
            {
                id: 1,
                title: "facebook",
                path: "https://web.facebook.com/Kmpworldwide",
                icon: "Facebook",
            },
            {
                id: 2,
                title: "twitter",
                path: "https://twitter.com/Kmp_Worldwide",
                icon: "Twitter",
            },
            {
                id: 3,
                title: "Youtube",
                path: "https://www.youtube.com/channel/UCZIhgUIs0Jhcy9tdzKEnbSA",
                icon: "Youtube",
            },
        ],
        contact: {
            phone: "+260973168440",
            email: "kalandanyamusicpromotions@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "KMP Distribution",
                short_name: "KMP",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
