particlesJS("bg", {
    "particles": {
      "number": {
        "value": 500,
        "density": {
          "enable": true,
          "value_area": 1500
        }
      },
      "color": {
        "value": "#e1e1e1"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#e1e1e1"
        },
        "polygon": {
          "nb_sides": 10
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
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
        "color": "#e1e1e1",
        "opacity": 0.5,
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
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
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
          "distance": 250,
          "duration": 0.5
        },
        "push": {
          "particles_nb": 5
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