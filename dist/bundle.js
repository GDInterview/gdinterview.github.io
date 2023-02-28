/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./common/enums/enumconverter.ts":
/*!***************************************!*\
  !*** ./common/enums/enumconverter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESOURCE_TYPE_TO_NODE_MAP": () => (/* binding */ RESOURCE_TYPE_TO_NODE_MAP),
/* harmony export */   "RESOURCE_TYPE_TO_STRING": () => (/* binding */ RESOURCE_TYPE_TO_STRING)
/* harmony export */ });
/* harmony import */ var _resource_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource_type_enum */ "./common/enums/resource_type_enum.ts");

var RESOURCE_TYPE_TO_STRING = new Map([
    [_resource_type_enum__WEBPACK_IMPORTED_MODULE_0__.ResourceType.COURSE, 'courses'],
    [_resource_type_enum__WEBPACK_IMPORTED_MODULE_0__.ResourceType.BOOK, 'books'],
    [_resource_type_enum__WEBPACK_IMPORTED_MODULE_0__.ResourceType.MOCK, 'mocks'],
]);
var RESOURCE_TYPE_TO_NODE_MAP = new Map([
    [_resource_type_enum__WEBPACK_IMPORTED_MODULE_0__.ResourceType.COURSE, document.getElementById('gdi-courses-li-header')],
    [_resource_type_enum__WEBPACK_IMPORTED_MODULE_0__.ResourceType.BOOK, document.getElementById('gdi-books-li-header')],
    [_resource_type_enum__WEBPACK_IMPORTED_MODULE_0__.ResourceType.MOCK, document.getElementById('gdi-mock-interview-li-header')],
]);


/***/ }),

/***/ "./common/enums/resource_type_enum.ts":
/*!********************************************!*\
  !*** ./common/enums/resource_type_enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceType": () => (/* binding */ ResourceType)
/* harmony export */ });
var ResourceType = Object.freeze({
    BOOK: Symbol(1),
    COURSE: Symbol(2),
    MOCK: Symbol(3),
});


/***/ }),

/***/ "./common/utils/dom_utils.ts":
/*!***********************************!*\
  !*** ./common/utils/dom_utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeNodeChildren": () => (/* binding */ removeNodeChildren)
/* harmony export */ });
var removeNodeChildren = function (node) {
    while (node === null || node === void 0 ? void 0 : node.firstChild) {
        node.removeChild(node.firstChild);
    }
};


/***/ }),

/***/ "./components/questions/questions_controller.ts":
/*!******************************************************!*\
  !*** ./components/questions/questions_controller.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "questionsController": () => (/* binding */ questionsController)
/* harmony export */ });
/* harmony import */ var _questions_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions_model */ "./components/questions/questions_model.ts");
/* harmony import */ var _common_utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils/dom_utils */ "./common/utils/dom_utils.ts");


var QuestionsController = /** @class */ (function () {
    function QuestionsController() {
        this.questionsModel = new _questions_model__WEBPACK_IMPORTED_MODULE_0__.QuestionsModel();
    }
    QuestionsController.prototype.updateQuestionView = function () {
        var mainContentEl = document.getElementById('gdi-main-content');
        // Clear main content
        _common_utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__.removeNodeChildren(mainContentEl);
        mainContentEl === null || mainContentEl === void 0 ? void 0 : mainContentEl.appendChild(this._questionWrapper(this.questionsModel.getRandQuestionNode()));
    };
    QuestionsController.prototype.initPageLoad = function () {
        this._attachEventListeners();
    };
    QuestionsController.prototype._attachEventListeners = function () {
        var _this = this;
        var els = [
            document.getElementById('gdi-main-content'),
            document.getElementById('gdi-main-content-spacer')
        ];
        document
            .addEventListener('keydown', function (event) {
            var key = event.key || String.fromCharCode(event.keyCode);
            switch (key) {
                case "Enter":
                    _this.updateQuestionView();
                    break;
            }
        }, false);
        els.forEach(function (el) { return _this._addUpdateQuestionViewListeners(el); });
    };
    QuestionsController.prototype._questionWrapper = function (node) {
        var p = document.createElement('p');
        p.classList.add('gdi-question-text');
        p.appendChild(node);
        return p;
    };
    QuestionsController.prototype._addUpdateQuestionViewListeners = function (el) {
        var _this = this;
        el.addEventListener('ontouchstart', function () {
            _this.updateQuestionView();
        }, false);
        el.addEventListener('click', function () {
            _this.updateQuestionView();
        }, false);
        el.addEventListener('mouseup', function () {
            var userSelection = window === null || window === void 0 ? void 0 : window.getSelection();
            window.getSelection().removeAllRanges();
        });
    };
    return QuestionsController;
}());
var questionsController = new QuestionsController();


/***/ }),

/***/ "./components/questions/questions_model.ts":
/*!*************************************************!*\
  !*** ./components/questions/questions_model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsModel": () => (/* binding */ QuestionsModel)
/* harmony export */ });
/* harmony import */ var _datastore_questions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../datastore/questions */ "./datastore/questions.ts");

var QuestionsModel = /** @class */ (function () {
    function QuestionsModel() {
        this.questions = _datastore_questions__WEBPACK_IMPORTED_MODULE_0__.Questions;
    }
    QuestionsModel.prototype.getRandQuestionNode = function () {
        return document.createTextNode(this._getRandQuestion());
    };
    QuestionsModel.prototype._getRandQuestion = function () {
        var _a;
        return (_a = this.questions[this._getRandomInt(0, this.questions.length)]) === null || _a === void 0 ? void 0 : _a.text;
    };
    QuestionsModel.prototype._getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return QuestionsModel;
}());



/***/ }),

/***/ "./components/resources/resources_controller.ts":
/*!******************************************************!*\
  !*** ./components/resources/resources_controller.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resourcesController": () => (/* binding */ resourcesController)
/* harmony export */ });
/* harmony import */ var _resources_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources_model */ "./components/resources/resources_model.ts");
/* harmony import */ var _common_utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils/dom_utils */ "./common/utils/dom_utils.ts");
/* harmony import */ var _common_enums_resource_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/enums/resource_type_enum */ "./common/enums/resource_type_enum.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state */ "./state.ts");
/* harmony import */ var _common_enums_enumconverter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/enums/enumconverter */ "./common/enums/enumconverter.ts");





var ResourcesController = /** @class */ (function () {
    function ResourcesController() {
        this.resourcesModel = new _resources_model__WEBPACK_IMPORTED_MODULE_0__.ResourcesModel();
    }
    ResourcesController.prototype.initPageLoad = function () {
        this._setInitialState();
        this._attachEventListeners();
    };
    ResourcesController.prototype._setInitialState = function () {
        var _this = this;
        _common_enums_enumconverter__WEBPACK_IMPORTED_MODULE_4__.RESOURCE_TYPE_TO_STRING.forEach(function (name, resourceType) {
            var _a;
            return _state__WEBPACK_IMPORTED_MODULE_3__.State.update((_a = {}, _a[name] = _this.resourcesModel.getResources(resourceType), _a));
        });
    };
    ResourcesController.prototype._createLinkEl = function (params) {
        var a = document.createElement('a');
        a.setAttribute('href', params.url);
        a.appendChild(document.createTextNode(params.title));
        return a;
    };
    ResourcesController.prototype._attachEventListeners = function () {
        var _this = this;
        _common_enums_enumconverter__WEBPACK_IMPORTED_MODULE_4__.RESOURCE_TYPE_TO_NODE_MAP.forEach(function (node, resourceType) {
            node.addEventListener('click', function () {
                _this._updateActiveResource(resourceType);
                switch (resourceType) {
                    case _common_enums_resource_type_enum__WEBPACK_IMPORTED_MODULE_2__.ResourceType.BOOK:
                        _this._renderBooks();
                        break;
                    case _common_enums_resource_type_enum__WEBPACK_IMPORTED_MODULE_2__.ResourceType.COURSE:
                    case _common_enums_resource_type_enum__WEBPACK_IMPORTED_MODULE_2__.ResourceType.MOCK:
                        _this._renderGeneralResource(resourceType);
                        break;
                }
            });
        });
    };
    ResourcesController.prototype._renderBooks = function () {
        var resourceList = document.getElementById('gdi-resource-list');
        // Clear resources list
        _common_utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__.removeNodeChildren(resourceList);
        for (var _i = 0, _a = Object.entries(_state__WEBPACK_IMPORTED_MODULE_3__.State.get().books); _i < _a.length; _i++) {
            var _b = _a[_i], category = _b[0], books = _b[1];
            var booksUl = document.createElement('ul');
            var categoryEl = document.createElement('li');
            categoryEl.classList.add('gdi-book-category-title');
            categoryEl.appendChild(document.createTextNode(category));
            booksUl.appendChild(categoryEl);
            this._renderResourcesList({
                parentNode: resourceList,
                listNode: booksUl,
                resourceData: books
            });
        }
    };
    ResourcesController.prototype._renderGeneralResource = function (resourceType) {
        var resourceList = document.getElementById('gdi-resource-list');
        var resourceStr = _common_enums_enumconverter__WEBPACK_IMPORTED_MODULE_4__.RESOURCE_TYPE_TO_STRING.get(resourceType);
        var resourceData = _state__WEBPACK_IMPORTED_MODULE_3__.State.get()[resourceStr];
        var ul = document.createElement('ul');
        // Clear resources list
        _common_utils_dom_utils__WEBPACK_IMPORTED_MODULE_1__.removeNodeChildren(resourceList);
        this._renderResourcesList({
            parentNode: resourceList,
            listNode: ul,
            resourceData: resourceData,
        });
    };
    ResourcesController.prototype._updateActiveResource = function (activeResource) {
        _state__WEBPACK_IMPORTED_MODULE_3__.State.update({ activeResource: activeResource });
    };
    ResourcesController.prototype._renderResourcesList = function (params) {
        var _this = this;
        var resourceData = params.resourceData, parentNode = params.parentNode, listNode = params.listNode;
        // Add resource titles w/ url link.
        resourceData.slice(0, 3).forEach(function (resource) {
            var li = document.createElement('li');
            li.appendChild(_this._createLinkEl(resource));
            listNode.appendChild(li);
        });
        parentNode.appendChild(listNode);
    };
    return ResourcesController;
}());
var resourcesController = new ResourcesController();


/***/ }),

/***/ "./components/resources/resources_model.ts":
/*!*************************************************!*\
  !*** ./components/resources/resources_model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesModel": () => (/* binding */ ResourcesModel)
/* harmony export */ });
/* harmony import */ var _datastore_books__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../datastore/books */ "./datastore/books.ts");
/* harmony import */ var _datastore_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../datastore/courses */ "./datastore/courses.ts");
/* harmony import */ var _datastore_mock_interviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datastore/mock_interviews */ "./datastore/mock_interviews.ts");
/* harmony import */ var _common_enums_resource_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/enums/resource_type_enum */ "./common/enums/resource_type_enum.ts");




var ResourcesModel = /** @class */ (function () {
    function ResourcesModel() {
    }
    ResourcesModel.prototype.getResources = function (type) {
        return (type === _common_enums_resource_type_enum__WEBPACK_IMPORTED_MODULE_3__.ResourceType.BOOK) ? _datastore_books__WEBPACK_IMPORTED_MODULE_0__.Books :
            (type === _common_enums_resource_type_enum__WEBPACK_IMPORTED_MODULE_3__.ResourceType.COURSE) ? _datastore_courses__WEBPACK_IMPORTED_MODULE_1__.Courses : _datastore_mock_interviews__WEBPACK_IMPORTED_MODULE_2__.MockInterviews;
    };
    return ResourcesModel;
}());



/***/ }),

/***/ "./datastore/books.ts":
/*!****************************!*\
  !*** ./datastore/books.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Books": () => (/* binding */ Books)
/* harmony export */ });
var Books = Object.freeze({
    dev: [
        {
            title: 'Game Engine Architecture',
            author: 'Jason Gregory',
            url: 'https://www.amazon.com/Engine-Architecture-Third-Jason-Gregory/dp/1138035459?crid=3SAFKTXDB7EKZ&keywords=game+engine+architecture+by+jason+gregory&qid=1677298470&sprefix=Game+Engine+Architecture%2Caps%2C872&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=e819857d3c23a53fd96521373ef065eb&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Real-Time Collision Detection',
            author: 'Christer Ericson',
            url: 'https://www.amazon.com/Real-Time-Collision-Detection-Christer-Ericson-ebook/dp/B00CLZIKC2?crid=3NR0MM2N1JOVQ&keywords=Real-Time+Collision+Detection&qid=1677298736&sprefix=real-time+collision+detection%2Caps%2C180&sr=8-3&linkCode=ll1&tag=gdinterview-20&linkId=e2ed4d5b45f5e2f6495d37b2951f127d&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Effective Modern C++',
            author: 'Scott Meyer',
            url: 'https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996?crid=2WWTOSTUXYTMC&keywords=Effective+Modern+C%2B%2B&qid=1677298866&sprefix=effective+modern+c%2B%2B%2Caps%2C202&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=adc61864210ae3db98c1574d7bc71c95&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Rules of Play: Game Design Fundamentals',
            author: 'Katie Salen Tekinbas and Eric Zimmerman',
            url: 'https://www.amazon.com/Rules-Play-Game-Design-Fundamentals-ebook/dp/B08BT1BKZV?_encoding=UTF8&qid=1677298931&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=6c7c4dd4042c6a2712a1ca8a4fd53a03&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Game Programming Patterns',
            author: 'Robert Nystrom',
            url: 'https://www.amazon.com/Game-Programming-Patterns-Robert-Nystrom-ebook/dp/B00P5URD96?_encoding=UTF8&qid=1677299017&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=f4d4c91a2f4e5829dd4bc7247ce285ba&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Programming Game AI by Example',
            author: 'Mat Buckland',
            url: 'https://www.amazon.com/Programming-Example-Wordware-Developers-Library-ebook/dp/B0029LCJXE?_encoding=UTF8&qid=1677299282&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=7737a6ecb525b0d8abe3bb4e0a8698f4&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
            author: 'Robert C. Martin',
            url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882?crid=269HLHZXI90FK&keywords=clean+code&qid=1677299129&sprefix=clean+cod%2Caps%2C200&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=9930722ad02e6c692bf3ea350f522b77&language=en_US&ref_=as_li_ss_tl',
        },
    ],
    design: [
        {
            title: 'Rules of Play: Game Design Fundamentals',
            author: 'Katie Salen Tekinbas and Eric Zimmerman',
            url: 'https://www.amazon.com/Rules-Play-Game-Design-Fundamentals-ebook/dp/B08BT1BKZV?_encoding=UTF8&qid=1677298931&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=6c7c4dd4042c6a2712a1ca8a4fd53a03&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Flow: The Psychology of Optimal Experience',
            author: 'Mihaly Csikszentmihalyi',
            url: 'https://www.amazon.com/Flow-Psychology-Experience-Perennial-Classics/dp/0061339202?crid=QRDO22NDEJIA&keywords=flow+mihaly+csikszentmihalyi&qid=1677299223&sprefix=Flow+miha%2Caps%2C179&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=cb32de3503f0fff641537b857c171f14&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'The Art of Game Design',
            author: 'Jesse Schell',
            url: 'https://www.amazon.com/Art-Game-Design-Lenses-Third-ebook/dp/B07X59RN6N?_encoding=UTF8&qid=1677299330&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=c708f8f962d8075946470cfec142c795&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'A Theory of Fun for Game Design',
            author: 'Raph Koster',
            url: 'https://www.amazon.com/Theory-Game-Design-Raph-Koster-ebook/dp/B00GK5SRFY?_encoding=UTF8&qid=1677299421&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=3fa157b8d8b266ecad74923a11d58fa3&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Level Up! The Guide to Great Video Game Design - 2nd Edition',
            author: 'Scott Rogers ',
            url: 'https://www.amazon.com/Level-Guide-Great-Video-Design-ebook/dp/B00JRYDCEQ?_encoding=UTF8&qid=1677299456&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=88f3a57f05ff3390a4f591ae206870d7&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Game Mechanics: Advanced Game Design',
            author: 'Ernest Adams and Joris Dormans',
            url: 'https://www.amazon.com/Game-Mechanics-Advanced-Design-Voices-ebook/dp/B008CG8E8Y?crid=13Q3HICRZUO69&keywords=Game+Mechanics%3A+Advanced+Game+Design&qid=1677299568&sprefix=game+mechanics+advanced+game+design%2Caps%2C277&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=67ae1fc3a4d1cc45f924718bd84b1d96&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Game Feel',
            author: 'Steve Swink',
            url: 'https://www.amazon.com/Game-Feel-Designers-Sensation-Kaufmann-ebook/dp/B07FDBQKF6?_encoding=UTF8&qid=1677299614&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=a82af0e2d8e67dcf503128b088401ba0&language=en_US&ref_=as_li_ss_tl',
        },
        {
            title: 'Game Design Workshop',
            author: 'Tracy Fullerton',
            url: 'https://www.amazon.com/Game-Design-Workshop-Playcentric-Innovative/dp/1138098779?crid=S5FO90D0G8I4&keywords=Game+Design+Workshop&qid=1677299678&sprefix=game+design+workshop%2Caps%2C281&sr=8-1&ufe=app_do%3Aamzn1.fos.c1e7b9a2-53cf-44f5-ab39-5386af17669d&linkCode=ll1&tag=gdinterview-20&linkId=60dc1c7d6659ba08f5389bf6bdfa45c7&language=en_US&ref_=as_li_ss_tl',
        },
    ],
    math: [
        {
            title: ' Foundations of Game Engine Development',
            author: 'Eric Lengyel',
            url: 'https://www.amazon.com/Foundations-Game-Engine-Development-Mathematics-ebook/dp/B084CT8H46?_encoding=UTF8&qid=1677299374&sr=8-1&linkCode=ll1&tag=gdinterview-20&linkId=9a0c2909235533a6e89b68f194019ee7&language=en_US&ref_=as_li_ss_tl',
        },
    ],
});


/***/ }),

/***/ "./datastore/courses.ts":
/*!******************************!*\
  !*** ./datastore/courses.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseTag": () => (/* binding */ CourseTag),
/* harmony export */   "Courses": () => (/* binding */ Courses)
/* harmony export */ });
var CourseTag = Object.freeze({
    MATH: Symbol(1),
    MOCK: Symbol(2),
    PROG: Symbol(3),
    ENGINE: Symbol(4),
    CPP: Symbol(5),
    OPENGL: Symbol(6),
    RAYTRACE: Symbol(7),
});
var Courses = [
    {
        title: '3Blue1Brown',
        author: 'Grant Sanderson',
        tags: [
            CourseTag.MATH
        ],
        url: 'https://www.3blue1brown.com/topics/linear-algebra',
    },
    {
        title: 'Pramp',
        author: 'Rafi Zikavashvili & David Glauber',
        tags: [
            CourseTag.MOCK
        ],
        url: 'https://www.pramp.com/',
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
    }
];


/***/ }),

/***/ "./datastore/mock_interviews.ts":
/*!**************************************!*\
  !*** ./datastore/mock_interviews.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockInterviews": () => (/* binding */ MockInterviews)
/* harmony export */ });
var MockInterviews = Object.freeze([
    {
        title: 'Pramp',
        author: 'Rafi Zikavashvili & David Glauber',
        url: 'https://www.pramp.com/',
    },
]);


/***/ }),

/***/ "./datastore/questions.ts":
/*!********************************!*\
  !*** ./datastore/questions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Questions": () => (/* binding */ Questions)
/* harmony export */ });
var Questions = Object.freeze([
    { text: "How would you add and subtract two vectors A and B?" },
    { text: "How would you find the length of a vector?" },
    { text: "What does normalizing a vector mean?" },
    { text: "How would you normalize a vector?" },
    { text: "You are developing the next Halo game. The game begins with Master Chief's ship traveling in space with velocity V. How would you calculate how far the ship would go in time t?" },
    { text: "A ship lands on an uncharted planet and the captain steps out (at position M) only to be greeted by an unknown creature (at position G). How would you figure out the direction and distance the captain would need to travel to reach the creature? " },
    { text: "What part of a matrix represents rotation, translation and scale?" },
    { text: "Does the order of multiplying transformation matrices matter? If so, why?" },
    { text: "You are given a 4x4 matrix C, that represents position and orientation of a camera, 4x4 matrix O that represents position and orientation of an object. Point P is given in the local space of the object. How would calculate Pcam = point P in the camera space?" },
    { text: "What is the inverse of an orthonormal matrix equal to?" },
    { text: "Suppose there is an object centered on the origin. Show how you would rotate it around any axis about a point P." },
    { text: "Given an arbitrary axis A, how would you identify the two other axes (B, C) and create a matrix that represents the three axes?" },
    { text: "What are Euler angles?" },
    { text: "What are some pros and cons of Euler angles?" },
    { text: "How would you build an equation for a plane form a triangle?" },
    { text: "How would you find the point at which a line intersects a plane?" },
    { text: "How would you test if a point is inside a triangle?" },
    { text: "Can you show how to derive the 2D rotation matrix?  [ cos cos theta - sin sin theta sin sin theta cos cos theta ]" },
    { text: "What is a frustum?" },
    { text: "What does LOD mean?" },
    { text: "What are mipmaps?" },
    { text: "Name some components of a game engine?" },
    { text: "What is a game engine?" },
    { text: "What is a shader?" },
    { text: "What is a vertex shader?" },
    { text: "What is a compute shader?" },
    { text: "What are example of shader programming languages?" },
    { text: "What is a fragment shader?" },
    { text: "What are pixel shader?" },
    { text: "Give an example of a game loop?" },
    { text: "What does FPS mean?" },
    { text: "Tell me about a game you worked on that you are proud of?" },
    { text: "What is source control and provide some examples?" },
    { text: "For game design, what are pros and cons of different source controls?" },
]);


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_questions_questions_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/questions/questions_controller */ "./components/questions/questions_controller.ts");
/* harmony import */ var _components_resources_resources_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/resources/resources_controller */ "./components/resources/resources_controller.ts");
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./index.html");


_components_questions_questions_controller__WEBPACK_IMPORTED_MODULE_0__.questionsController.initPageLoad();
_components_resources_resources_controller__WEBPACK_IMPORTED_MODULE_1__.resourcesController.initPageLoad();


/***/ }),

/***/ "./state.ts":
/*!******************!*\
  !*** ./state.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var State = /** @class */ (function () {
    function State() {
    }
    State.get = function () {
        return this.state;
    };
    State.update = function (prop) {
        if (prop === void 0) { prop = {}; }
        this.state = __assign(__assign({}, this.state), prop);
    };
    return State;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./index.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map