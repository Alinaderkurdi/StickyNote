//all the behaviour for this specific tag
//object to return the number of leters between open and close 


const div = {
    validLetter: 3,
    opentAndClose: true,
    tag: '<div>',
    end: '</div>'
}


const tags = [
    {
        hasACloseTag: true,
        tagShape: `<span></sapn`
    },
    {
        hasACloseTag: true,
        tagShape: `<div></div>`
    },
    {
        hasACloseTag: true,
        tagShape: `<p></p>`
    },
    {
        hasACloseTag: true,
        tagShape: `<button></button>`
    },
    {
        hasACloseTag: true,
        tagShape: `<h1></h1>`
    },
    {
        hasACloseTag: true,
        tagShape: `<h2></h2>`
    },
    {
        hasACloseTag: true,
        tagShape: `<h3></h3>`
    },
    {
        hasACloseTag: true,
        tagShape: `<h4></h4>`
    },
    {
        hasACloseTag: true,
        tagShape: `<h5></h5>`
    },
    {
        hasACloseTag: true,
        tagShape: `<h6></h6>`
    },
    {
        hasACloseTag: true,
        tagShape: `<header></header>`
    },
    {
        hasACloseTag: true,
        tagShape: `<footer></<footer>`
    },
    
]

export default tags