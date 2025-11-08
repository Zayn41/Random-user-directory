export const makeSocialLinks = (username) => {
    if(!username) {
        username = "user";
    }

    const u = username.replace(/\s+/g, "").toLowerCase();

    const links = {
        twitter: `https://twitter.com/${u}`,
        instagram: `https://instagram.com/${u}`,
        facebook: `https://facebook.com/${u}`,
        snapchat: `https://www.snapchat.com/add/${u}`,
        github: `https://github.com/${u}`,
    };

    return links;

};