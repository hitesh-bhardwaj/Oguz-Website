gsap.registerPlugin(ScrollTrigger);


let bodyScrollBar = Scrollbar.init(document.body, { damping: 0.05, delegateTo: document, alwaysShowTracks: true, speed: 2 });
 
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);


$( document ).ready(function() {

    heroTransition();

});

  // Hero-Home

  function heroTransition() {
    let tl= gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            scroller: document.body,
            start: "top top",
            scrub: 2,
            pin: true,
            pinType:'transform'
            // markers: true,
        }
    });
    
    tl.fromTo("#e", {
            y: -220,
            x: -60,
            scale: 3.5,
        },
        {    
            scale: .6,
            y: 8,
            x: 200,
            ease: "power3.out",
            duration: 3
    });
    
    tl.fromTo("#n", {
        y: -350,
        x: 100,
        opacity: 0
    },
    {    
        x: 130,
        scale: .6,
        y: 8,
        opacity: 1,
        ease: "power3.out",
        duration: 2,
        delay: -2
    });
    
    tl.fromTo("#i", {
        y: 350,
        x: 150, 
        opacity: 0
    },
    {    
        scale: .6,
        y: 25,
        x: 70,
        opacity: 1,
        ease: "power3.out",
        duration: 2,
        delay: -1
    });
    
    tl.fromTo("#g", {
        y: -350,
        x: 100,
        opacity: 0,
    },
    {    
        scale: .6,
        x: 25,
        y: 25,
        opacity: 1,
        ease: "power3.out",
        duration: 2,
        delay: -1
    });
    
    tl.fromTo("#m", {
        y: -350,
        opacity: 0,
    },
    {    
        scale: .6,
        x: -45,
        y: 8,
        opacity: 1,
        ease: "power3.out",
        duration: 2,
        delay: -1.5
    });
    
    tl.fromTo("#a", {
        x: 20,
        opacity: 0,
        scale: 2,
        y: 350
    },
    {    
        scale: .6,
        y: 8,
        x: -154,
        opacity: 1,
        ease: "power3.out",
        duration: 2
    });
    
    
    tl.fromTo(".main-line",{
        y: 170,
        opacity: 0
    },
    {   
        y: 160,
        opacity: 1,
        duration: 3,
        delay: -1.1
    }, 9);
    
    tl.fromTo(".second-scroll", {
        opacity: 0
    },{
        opacity: 1,
        ease: "circ.in",
        duration: 4
    });
    
    tl.to(".concept-1", {
        opacity: 1,
        duration: 2
    }, 15);
    
    tl.to(".concept-2", {
        opacity: 1,
        duration: 2
    });
    
    tl.to(".concept-3", {
        opacity: 1,
        duration: 2
    });
    
    tl.to(".concept-4", {
        opacity: 1,
        duration: 2
    });
    
    tl.fromTo(".main-concept", {
        scale: 1
    },{
        scale: 2.3, duration: 3,
        ease: "circ.in" 
    });
    
    tl.fromTo(".change-1", {
        opacity: 0
    }, 
    {
        opacity: 1,
        duration: .1
    });
    
    tl.fromTo(".change-2", {
        opacity: 0,
        scale: 2.3
    },
    {
        opacity: 1,
        scale: 1,
        duration: 4, 
        delay: -0.1
    });
    
    tl.fromTo(".lapi", {
        y: 200,
        opacity: 0,
        filter: "blur(8px)",
        scale: 1.2
    },  
    {   
        y: -100,
        opacity: 1,
        scale: .8,
        filter: "blur(0px)",
        duration: 4,
        delay: -2
    }, 30);
    
    tl.to(".change-2" , {
        opacity: 0,
        duration: 3, 
        delay: -2
    });
    
    tl.to(".lapi", {
        opacity: 0,
        scale: 1.3, 
        ease: "power1.Out",
        duration: 3
    }, 35);
    
    tl.to(".split-div", {
        opacity: 1,
        duration: 2
    });
    
    tl.fromTo(".split-1", {
        gridTemplateColumns: "50% 0% 50%" 
    }, 
    {
        gridTemplateColumns: "20% 60% 20%",   
        duration: 15,
        ease: "slow(0.7, 0.7, false)"
    }, 50);
    
    tl.to(".split-text", {
        scale: 1.2,
        duration: 5,
        ease: 'power3.inOut',
        delay: -2,
    });    
  }

//   function workTransition() {

//     workTrans.from(".work h1", {
//         y: -20,
//         opacity: 0,
//         ease: "power1.out",
//         duration: 1
//     })

//     workTrans.from(".work1", {
//         y: -20,
//         opacity: 0,
//         ease: "power1.out",
//         stagger: 0.1,
//         duration: 1
//     })

//   }

document.getElementById("lightMode-js").addEventListener("click", function() {
    if(document.getElementById("lightMode-js").innerText == "Light Mode"){
        document.getElementById("lightMode-js").innerHTML = "Dark Mode"
        // document.body.querySelectorAll(".dark").classList.toggle("light")
    } else {
        document.getElementById("lightMode-js").innerHTML = "Light Mode"
        // document.body.querySelectorAll(".light").classList.toggle("dark")
    }
});

// for (i = 0; i < document.querySelectorAll(".light").length; i++) {
//     document.querySelectorAll(".light").className = "dark";

function myFunction() {
    let element = document.body;
    element.classList.toggle("light");

 }

 window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function preLoader() {
    setTimeout(function(){        
        $('#loading').fadeOut();
        $('#loading').delay(150).fadeOut('slow'); 
    }, 2000);
}

function pageTransitionOut() {
    var pageTransOut = gsap.timeline();

    pageTransOut.to('ul.transition li', {
        duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.05});
    }

function pageTransitionIn() {
    var pageTransIn = gsap.timeline();

    pageTransIn.to('ul.transition li', {
        duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.05});
}


delay = (n) => {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(()=> {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [
        {
            async once(data){
                preLoader();
            },

            async leave(data){
                const done = this.async();

                pageTransitionOut();
                await delay(1500);
                done(); 
            },

            async enter(data){
                pageTransitionIn();
                $(window).scrollTop(0);
                heroTransition();
                gsap.from(".work", {
                    y: 50,
                    opacity: 0,
                    ease: "power1.out",
                    duration: 1,
                });
                gsap.from(".work1", {
                    y: 50,
                    opacity: 0,
                    ease: "power1.out",
                    stagger: 0.5,
                    duration: 1,
                    delay: .5,
                });
            },
        }
    ]
});