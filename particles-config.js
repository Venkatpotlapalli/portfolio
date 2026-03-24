/* ===== PARTICLES.JS CONFIGURATION ===== */

particlesJS("particles-js", {
    particles: {
        number: { value: 65, density: { enable: true, value_area: 900 } },
        color: { value: ["#00E5FF", "#38BDF8", "#8B949E"] },
        shape: { type: "circle" },
        opacity: {
            value: 0.45,
            random: true,
            anim: { enable: true, speed: 0.8, opacity_min: 0.12, sync: false }
        },
        size: {
            value: 2.6,
            random: true,
            anim: { enable: true, speed: 1.5, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 170,
            color: "#00E5FF",
            opacity: 0.22,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.4,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 160, line_linked: { opacity: 0.45 } },
            push: { particles_nb: 3 }
        }
    },
    retina_detect: true
});
