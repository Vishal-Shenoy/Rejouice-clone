function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveAnimation();

const splashScreenTL = gsap.timeline();
splashScreenTL.from("#splashscreen>span", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.05
}).to("#splashscreen>span", {
    x: -50,
    opacity: 0,
    duration: .5,
    stagger: 0.1
}).to("#splashscreen", {
    opacity: 0,
    duration: .5,
}).to("#splashscreen", {
    display: "none"
})


gsap.from("#page1 > #topLayerContainer > #letterContainer> span", {
    y: "100%",
    opacity: 0,
    delay: 2,
    duration: 0.5,
    stagger: 0.03
})

gsap.from("#topLayerContainer > #navbar > #navbarLeftPart", {
    x: 50,
    delay: 2,
    duration: 0.5
})

gsap.from("#topLayerContainer > #playReelCursor", {
    scale: 0,
    delay: 2,
    duration: 0.3
})

function cursorAnimation() {
    const page1Cursor = document.querySelector("#playReelCursor");
    const page1 = document.querySelector("#page1");
    console.log(page1, page1Cursor)


    page1.addEventListener("mouseenter", (dets) => {
        gsap.to(page1Cursor, {
            scale: 1,
            top: dets.y,
            left: dets.x,
        });
    });


    page1.addEventListener("mousemove", (dets) => {
        console.log("came");
        gsap.to(page1Cursor, {
            top: dets.y,
            left: dets.x,
        });
    })

    page1.addEventListener("mouseleave", (dets) => {
        gsap.to(page1Cursor, {
            scale: 0
        });
    })
}
cursorAnimation();

gsap.from("#page2 > #topSection > span", {
    y: 100,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})

gsap.from("#page2>h1>div>span", {
    y: 100,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})


gsap.from("#page2Footer>div>h1", {
    y: 100,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 0%",
        end: "top -10%",
        scrub: 2,
    }
})


const videos = Array.from(document.querySelectorAll('.page3Video'));
const videoCon = Array.from(document.querySelectorAll(".imageHolder"));
console.log(typeof videoCon)

videoCon.map((item, index) => {
    console.log(item)
    item.addEventListener("mouseenter", () => {
        videos[index].play();
    });
    item.addEventListener("mouseleave", () => {
        videos[index].pause();
        videos[index].currentTime = 0;
    });
});


gsap.from("#page4topSection>div>span", {
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 80%",
        end: "top 70%",
        scrub: 2,
    }
})

gsap.from("#page4>h1>div>span", {
    y: 100,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 80%",
        end: "top 70%",
        scrub: 2,
    }
})

gsap.from("#page6topSection>div>span", {
    y: 100,
    background: "red",
    duration: 5,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})

gsap.from("#page6>h1>div>span", {
    y: 100,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 50%",
        end: "top 40%",
        scrub: 2,
    }
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    freeMode: true, // Disable snapping
    autoplay: {
        delay: 0, // Continuous autoplay (no delay)
        disableOnInteraction: false, // Keeps autoplay running
    },
    speed: 4000, // Controls scrolling speed (slower for smooth effect)
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },
});


gsap.from("#page7footer>div>h1", {
    y: 100,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 10%",
        end: "top 0%",
        scrub: 2,
    }
})



gsap.from("#pagefooterAnimatedText>span", {
    y: "-100%",
    stagger: 0.03,
    scrollTrigger: {
        trigger: "#page8",
        scroller: "#main",
        start: "top 10%",
        end: "top 0%",
        scrub: 2,
    }
})
