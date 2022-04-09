let headLogo = document.querySelector( ".header" ),
    Logo = document.querySelector( ".logo" );
let btn = document.querySelector( ".btnUp" );
let artical = document.querySelector( ".articales" ),
    articalBox = document.querySelectorAll( ".articales .box" );
let featur = document.querySelector( ".features" ),
    featurBox = document.querySelectorAll( ".features .box" );
let nums = document.querySelectorAll( ".stats .number" ),
    section = document.querySelector( ".stats" ),
    statBox = document.querySelectorAll(".stats .box"),
    started = false;
let skills = document.querySelector( ".our-skills" ),
    spans = document.querySelectorAll( ".the-progress span" ),
    image = document.querySelector( ".our-skills .container > img" );
window.onscroll = function () {
    if ( window.scrollY >= 2000 ){
        btn.style.display = "block";
    } else{
        btn.style.display = "none";
    };
    if ( window.scrollY >= artical.offsetTop - 200) {
        articalBox.forEach( ( el ) => {
            el.classList.remove( "left" );
            el.classList.remove( "right" );
            el.classList.add("artCenter");
        })
    } else{
        articalBox.forEach( ( el ) => {
            el.classList.add( "left" );
            el.classList.add( "right" );
        } )
    };
    if ( window.scrollY >= featur.offsetTop - 200 ) {
        featurBox.forEach((el) => {
            el.classList.remove( "featheadin" );
            el.classList.add( "featoop" );
        })
    } else{
        featurBox.forEach((el) => {
            el.classList.add( "featheadin" );
            el.classList.remove( "featoop" );
        })
    };
    if ( window.scrollY >= skills.offsetTop - 400 ){
        image.classList.add( "to-skills" );
        spans.forEach( ( span ) => {span.style.width = span.dataset.width;})
    }else{
        image.classList.remove( "to-skills" );
        spans.forEach( ( span ) => {span.style.width = 0;})
    };
    if ( window.scrollY >= section.offsetTop - 600 ){
        if ( window.scrollY >= section.offsetTop - 300 ){
            statBox.forEach( ( el ) =>{
                el.classList.remove( "left" );
                el.classList.remove( "right" );
                el.classList.add( "statcenter" );
            })
        } else{
            statBox.forEach( ( el ) =>
            {
                el.classList.add( "left" );
                el.classList.add( "right" );
                el.classList.remove( "statcenter" );
            })
        };
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
        el.textContent++;
        if ( el.textContent == goal ){
            clearInterval( count );
        };
    }, 1000 / goal);
};
btn.onclick = function (){
    window.scrollTo( {
        left: 0,
        top: 0,
        behavior: "smooth",
    } )
};
let tabs = document.querySelectorAll( ".tabs li" );
let tabsArray = Array.from( tabs );
let divs = document.querySelectorAll( ".preview > div" );
let divsArray = Array.from( divs );
tabsArray.forEach( ( ele ) =>{
    ele.addEventListener( "click", function ( e ){
        tabsArray.forEach( ( ele ) => {
            ele.classList.remove( "active" );
        });
        e.currentTarget.classList.add( "active" );
        divsArray.forEach( ( div ) => {
            div.style.display = 'none';
        });
        document.querySelector( e.currentTarget.dataset.cont ).style.display = "block";
    });
});