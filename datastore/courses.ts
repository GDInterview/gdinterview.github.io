export const CourseTag = Object.freeze({
    MATH: Symbol(1),
    MOCK: Symbol(2),
    PROG: Symbol(3),
    ENGINE: Symbol(4),
    CPP: Symbol(5),
    OPENGL: Symbol(6),
    RAYTRACE: Symbol(7),
});

export const Courses = [
    {   title: 'Coursera Game Development',
        author: 'Coursera',
        url: 'https://www.coursera.org/search?query=game%20development',
    },
    {
        title: '3Blue1Brown',
        author: 'Grant Sanderson',
        tags: [
            CourseTag.MATH
        ],
        url: 'https://www.3blue1brown.com/topics/linear-algebra',
    },
    {
        title: 'Khan Academy',
        author: 'Sal Khan',
        tags: [
            CourseTag.MATH,
            CourseTag.PROG,
        ],
        url: 'https://www.khanacademy.org/',
    },
    {
        title: 'The Cherno',
        author: 'Yan Chernikov',
        tags: [
            CourseTag.MATH,
            CourseTag.ENGINE,
            CourseTag.CPP,
            CourseTag.RAYTRACE,
            CourseTag.PROG,
        ],
        url: 'https://thecherno.com/',
    },
    {
        title: 'Pramp',
        author: 'Rafi Zikavashvili & David Glauber',
        tags: [
            CourseTag.MOCK
        ],
        url: 'https://www.pramp.com/',
    },
];