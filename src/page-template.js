module.exports = templateData => {
    console.log(templateData);
    const { title, discription, ...header } = templateData;

    return`
    # ${title}
    ============================================================

    ## ${discription}
    ============================================================

    ## Table of Contents
    ============================================================

    ## Installation
    ============================================================

    ## Usage
    ============================================================

    ## Licensing
    ============================================================

    ## Contribution
    ============================================================

    ## Test
    ============================================================

    ## Questions
    ============================================================


    `;
};