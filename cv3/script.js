window.addEventListener("resize", AutoScale); // zoom/resize page !!!
    function AutoScale() {
        let width = window.innerWidth;
            if(width > 1280) {
                ChangeScale("big");
            } else if(width <= 1280 && width >= 720) {
                ChangeScale("normal");
                } else if(width < 720) {
                    ChangeScale("small");
            }
    }
//не прокатило((