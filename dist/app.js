(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const socialLogoHover = () => {
    $(".email").mouseover(() => {
        $(".email").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".email").removeClass("animated pulse");
        });
    });

    $(".github").mouseover(() => {
        $(".github").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".github").removeClass("animated pulse");
        });
    });

    $(".linkedin").mouseover(() => {
        $(".linkedin").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".linkedin").removeClass("animated pulse");
        });
    });

    $(".twitter").mouseover(() => {
        $(".twitter").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".twitter").removeClass("animated pulse");
        });
    });
};

const techIconHover = () => {
    $(".js").mouseover(() => {
        $(".js").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".js").removeClass("animated pulse");
        });
    });

    $(".angular").mouseover(() => {
        $(".angular").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".angular").removeClass("animated pulse");
        });
    });

    $(".jquery").mouseover(() => {
        $(".jquery").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".jquery").removeClass("animated pulse");
        });
    });

    $(".bootstrap").mouseover(() => {
        $(".bootstrap").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".bootstrap").removeClass("animated pulse");
        });
    });

    $(".css").mouseover(() => {
        $(".css").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".css").removeClass("animated pulse");
        });
    });

    $(".node").mouseover(() => {
        $(".node").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".node").removeClass("animated pulse");
        });
    });

    $(".csharp").mouseover(() => {
        $(".csharp").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".csharp").removeClass("animated pulse");
        });
    });

    $(".dotnet").mouseover(() => {
        $(".dotnet").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".dotnet").removeClass("animated pulse");
        });
    });

    $(".python").mouseover(() => {
        $(".python").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".python").removeClass("animated pulse");
        });
    });

    $(".erlang").mouseover(() => {
        $(".erlang").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".erlang").removeClass("animated pulse");
        });
    });

    $(".git").mouseover(() => {
        $(".git").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".git").removeClass("animated pulse");
        });
    });

    $(".grunt").mouseover(() => {
        $(".grunt").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".grunt").removeClass("animated pulse");
        });
    });

    $(".html").mouseover(() => {
        $(".html").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".html").removeClass("animated pulse");
        });
    });

    $(".docker").mouseover(() => {
        $(".docker").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".docker").removeClass("animated pulse");
        });
    });

    $(".redis").mouseover(() => {
        $(".redis").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".redis").removeClass("animated pulse");
        });
    });

    $(".sql").mouseover(() => {
        $(".sql").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".sql").removeClass("animated pulse");
        });
    });
};

const projectButtonHover = () => {
    $(".projects").mouseover(() => {
        $(".projects").addClass("animated pulse").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".projects").removeClass("animated pulse");
        });
    });
};

const techAnimation = () => {
        $(".tech").addClass("animated slideInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            $(".tech").removeClass("animated slideInUp");
        });
};


const init = () => {
    socialLogoHover();
    projectButtonHover();
    techAnimation();
    techIconHover();
};

module.exports = {init};
},{}],2:[function(require,module,exports){
'use strict';

const events = require("./events");

events.init();
},{"./events":1}]},{},[2]);
