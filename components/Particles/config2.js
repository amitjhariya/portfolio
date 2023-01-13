const config ={
  
  fullScreen: {
    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
  },
  particles: {
    number: {
      value: 50,
      limit: 200,
      density: {
        enable: true,
        value_area: 2000
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type:["character",'polygon','circle'],
      stroke: {
        width: 0,
        color: "#000"
      },
      polygon: {
        sides: 4,
        inset: 5,
      },
      character:{
        value:["Node","React","JS","NEXT","MongoDB","AWS","GIT"],
        inset: 5,
      },
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: true
      }
    },
    size: {
      value: 1,
      limit:10,
      random: false,
      anim: {
        enable: true,
        speed: 5,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 1,
        speed: 2
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: {
        value: {
          r: 0,
          g: 0,
          b: 0
        }
      }
    }
  },
  retina_detect: true,
  fps_limit: 60,
  background: {
    // image: "url('https://particles.js.org/images/background3.jpg')"
    image: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
  }
}
export default config