export const BookTag = Object.freeze({
    MATH: Symbol(1),
    MOCK: Symbol(2),
    PROG: Symbol(3),
    ENGINE: Symbol(4),
    CPP: Symbol(5),
    OPENGL: Symbol(6),
    RAYTRACE: Symbol(7),
});

export const Courses = [
    {
        title: '3Blue1Brown',
        author: 'Grant Sanderson',
        tags: [
            BookTag.MATH
        ],
        url: 'https://www.3blue1brown.com/topics/linear-algebra',
    },
    {
        title: 'Pramp',
        author: 'Rafi Zikavashvili & David Glauber',
        tags: [
            BookTag.MOCK
        ],
        url: 'https://www.pramp.com/',
    },
    {
        title: 'Khan Academy',
        author: 'Sal Khan',
        tags: [
            BookTag.MATH,
            BookTag.PROG,
        ],
        url: 'https://www.khanacademy.org/',
    },
    {
        title: 'The Cherno',
        author: 'Yan Chernikov',
        tags: [
            BookTag.MATH,
            BookTag.ENGINE,
            BookTag.CPP,
            BookTag.RAYTRACE,
            BookTag.PROG,
        ],
        url: 'https://thecherno.com/',
    }
];