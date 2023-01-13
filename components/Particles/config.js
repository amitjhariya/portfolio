const config ={
  background: {
    color: "#000", // this sets a background color for the canvas
  },
  fullScreen: {
    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
  },
  interactivity: {
    events: {
      onClick: {
        enable: true, // enables the click event
        mode: "push", // adds the particles on click
      },
      onHover: {
        enable: true, // enables the hover event
        mode: "repulse", // make the particles run away from the cursor
      },
    },
    modes: {
      push: {
        quantity: 25, // number of particles to add on click
      },
      repulse: {
        distance: 100, // distance of the particles from the cursor
      },
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      }
    },
    collisions: {
      absorb: {
        speed: 2
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      enable: false,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: "#82160c",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true
        }
      }
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000
        }
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0
      },
      decay: 0.05,
      distance: {},
      direction: "top",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: true,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: "destroy",
        bottom: "destroy",
        left: "destroy",
        right: "destroy",
        top: "none"
      },
      random: false,
      size: false,
      speed: {
        min: 10,
        max: 50
      },
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000"
        }
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: false,
        width: 1920,
        height: 1080
      },
      limit: 0,
      value: 0
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1
      },
      value: 1,
      animation: {
        count: 0,
        enable: false,
        speed: 2,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random"
      }
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: "#000"
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {},
      type: "triangle"
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1
      },
      value: {
        min: 0,
        max: 2
      },
      animation: {
        count: 1,
        enable: true,
        speed: 16,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "min"
      }
    },
    stroke: {
      width: 0
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 30,
        decay: 0,
        sync: false
      },
      direction: "random",
      path: false
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 3
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true,
        particles: {}
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      enlighten: {
        enable: false,
        value: 0
      },
      mode: "vertical",
      speed: {
        min: 5,
        max: 15
      }
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 30,
        decay: 0,
        sync: false
      },
      direction: "random",
      enable: true
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      speed: {
        angle: {
          min: -7,
          max: 7
        },
        move: 10
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    links: {
      blink: false,
      color: {
        value: "#fff"
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000"
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    }
  },
  emitters:[
    {
      autoPlay: true,
      fill: true,
      life: {
        wait: false
      },
      rate: {
        quantity: 5,
        delay: 0.15
      },
      shape: "square",
      startCount: 0,
      particles: {
        move: {
          direction: "top-right",
          outModes: {
            top: "none",
            left: "none",
            default: "destroy"
          }
        }
      },
      position: {
        x: 0,
        y: 30
      }
    },
    {
      autoPlay: true,
      fill: true,
      life: {
        wait: false
      },
      rate: {
        quantity: 5,
        delay: 0.15
      },
      shape: "square",
      startCount: 0,
      particles: {
        move: {
          direction: "top-left",
          outModes: {
            top: "none",
            right: "none",
            default: "destroy"
          }
        }
      },
      position: {
        x: 100,
        y: 30
      }
    }
  ]
}
export default config