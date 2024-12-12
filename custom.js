particlesJS("bg", {
    "particles": {
      "number": {
        "value": 1000,
        "density": {
          "enable": true,
          "value_area": 3000
        }
      },
      "color": {
        "value": "#FAC500"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 1,
          "color": "#FAC500"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 2.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 50,
          "size_min": 0.1,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#FAC500",
        "opacity": 0.25,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": true,
          "rotateX": 750,
          "rotateY": 1250
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 500,
          "size": 50,
          "duration": 2.5,
          "opacity": 7.5,
          "speed": 5
        },
        "repulse": {
          "distance": 100,
          "duration": 0.5
        },
        "push": {
          "particles_nb": 10
        },
        "remove": {
          "particles_nb": 2.5
        }
      }
    },
    "retina_detect": true
  });
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);