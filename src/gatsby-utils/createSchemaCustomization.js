const {
    homeDefs,
    loginDefs,
    signupDefs,
    contentDefs,
    generalDefs,
    siteDefs,
    articleDefs,
    featuresDefs, 
    publishingDefs, 
    pricingDefs, 
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        homeDefs,
        loginDefs,
        signupDefs,
        contentDefs,
        generalDefs,
        siteDefs,
        articleDefs,
        featuresDefs,
        publishingDefs,
        pricingDefs,
    ];

    createTypes(allTypeDefs);
};
