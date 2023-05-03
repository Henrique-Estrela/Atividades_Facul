
        let isChecked = false;

        function onBtnDown() {
            const tl = gsap.timeline();
            tl.to("#rope-end", { duration: 0.2, y: 160 }, "start");
            tl.to("#rope", { duration: 0.2, morphSVG: "#rope-extended" }, "start");
        }

        function onBtnUp() {
            const tl = gsap.timeline();
            tl.to(
                "#rope",
                { duration: 0.4, morphSVG: "#rope-compressed", ease: "bounce.out" },
                "up"
            );
            tl.to(
                "#rope",
                { duration: 0.2, morphSVG: "#rope-original", ease: "bounce.out" },
                "down"
            );
            tl.to("#rope-end", { duration: 0.4, y: 90, ease: "bounce.out" }, "up");
            tl.to("#rope-end", { duration: 0.2, y: 120, ease: "bounce.out" }, "down");

            isChecked = !isChecked;

            let x = 0;
            let backgroundColor = "#827D96";
            let size = "50px";

            if (isChecked) {
                x = 45;
                backgroundColor = "#FFFFFF";
                size = "120px";
            }

            tl.to(".knob", { x, duration: 1 }, "up");
            tl.to(".top", { backgroundColor, duration: 1 }, "up");
            tl.to(".light", { width: size, height: size, duration: 1 }, "up");


            var body = document.querySelector("body");
            body.classList.toggle("nigth")

        }

        const btn2 = document.getElementById("btn2");
        btn2.addEventListener("mousedown", onBtnDown);
        btn2.addEventListener("mouseup", onBtnUp);

