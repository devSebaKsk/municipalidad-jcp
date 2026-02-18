import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let initialized = false;

export const initMunicipalAnimations = () => {
  if (initialized) {
    return;
  }

  initialized = true;

  const btnAcceso = document.getElementById('btn-acceso');
  const btnAccesoTrabajador = document.getElementById('btn-acceso-trabajador');
  const accessButtons = document.getElementById('access-buttons');
  const homeView = document.getElementById('home-view');
  const loginView = document.getElementById('login-view');
  const loginEmpleadosView = document.getElementById('login-empleados-view');
  const dashboardView = document.getElementById('dashboard-view');
  const loginCard = document.getElementById('login-card');
  const loginEmpleadosCard = document.getElementById('login-empleados-card');
  const loginForm = document.getElementById('login-form');
  const loginEmpleadosForm = document.getElementById('login-empleados-form');
  const btnVolver = document.getElementById('btn-volver');
  const btnVolverEmpleados = document.getElementById('btn-volver-empleados');
  const logoBtn = document.getElementById('logo-btn');
  const publicLinks = document.getElementById('public-links');
  const userMenu = document.getElementById('user-menu');
  const btnLogout = document.getElementById('btn-logout');

  const navTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  navTl
    .to('#navbar', { y: 0, duration: 0.1 })
    .to('.logo-container', { opacity: 1, x: 0, duration: 0.8 }, '+=0.2')
    .to('.nav-links a', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')
    .to('.nav-btn', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.2');

  const heroTl = gsap.timeline({ delay: 0.5, defaults: { ease: 'power3.out' } });
  heroTl
    .to('.hero-badge', { opacity: 1, y: 0, duration: 0.6 })
    .to('.hero-title', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .to('.hero-text', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to('.hero-btns', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to('.hero-visual', { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, '-=0.8');

  gsap.to('.service-card', {
    scrollTrigger: {
      trigger: '.service-card',
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
  });

  btnAcceso.addEventListener('click', () => {
    gsap.to(homeView, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        homeView.classList.add('hidden');
        loginView.classList.remove('hidden');
        gsap.to(loginCard, { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' });
      },
    });
  });

  btnAccesoTrabajador.addEventListener('click', () => {
    gsap.to(homeView, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        homeView.classList.add('hidden');
        loginEmpleadosView.classList.remove('hidden');
        gsap.to(loginEmpleadosCard, { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' });
      },
    });
  });

  const backToHome = () => {
    if (!loginView.classList.contains('hidden')) {
      gsap.to(loginCard, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          loginView.classList.add('hidden');
          homeView.classList.remove('hidden');
          gsap.to(homeView, { opacity: 1, duration: 0.4 });
          ScrollTrigger.refresh();
        },
      });
    } else if (!loginEmpleadosView.classList.contains('hidden')) {
      gsap.to(loginEmpleadosCard, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          loginEmpleadosView.classList.add('hidden');
          homeView.classList.remove('hidden');
          gsap.to(homeView, { opacity: 1, duration: 0.4 });
          ScrollTrigger.refresh();
        },
      });
    } else if (!dashboardView.classList.contains('hidden')) {
      return;
    }
  };

btnVolver.addEventListener('click', backToHome);
btnVolverEmpleados.addEventListener('click', backToHome);

logoBtn.addEventListener('click', () => {
  if (!dashboardView.classList.contains('hidden')) {
    return;
  }
  backToHome();
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    gsap.to(loginCard, {
      scale: 0.95,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        loginView.classList.add('hidden');
        dashboardView.classList.remove('hidden');

        accessButtons.classList.add('hidden');
        publicLinks.classList.add('hidden');
        userMenu.classList.remove('hidden');

        const dashTl = gsap.timeline();
        dashTl
          .to('.dashboard-header', { opacity: 1, y: 0, duration: 0.6 })
          .to('.dashboard-card', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.3');
      },
    });
  });

  loginEmpleadosForm.addEventListener('submit', (event) => {
    event.preventDefault();

    gsap.to(loginEmpleadosCard, {
      scale: 0.95,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        loginEmpleadosView.classList.add('hidden');
        dashboardView.classList.remove('hidden');

        accessButtons.classList.add('hidden');
        publicLinks.classList.add('hidden');
        userMenu.classList.remove('hidden');

        const dashTl = gsap.timeline();
        dashTl
          .to('.dashboard-header', { opacity: 1, y: 0, duration: 0.6 })
          .to('.dashboard-card', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.3');
      },
    });
  });

  btnLogout.addEventListener('click', () => {
    gsap.to(dashboardView, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        dashboardView.classList.add('hidden');
        accessButtons.classList.remove('hidden');
        publicLinks.classList.remove('hidden');
        userMenu.classList.add('hidden');

        gsap.set('.dashboard-header', { opacity: 0, y: 20 });
        gsap.set('.dashboard-card', { opacity: 0, y: 20 });
        gsap.set(dashboardView, { opacity: 1 });

        homeView.classList.remove('hidden');
        gsap.fromTo(homeView, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        ScrollTrigger.refresh();
      },
    });
  });

  document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.02, duration: 0.3, ease: 'power1.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power1.out' });
    });
  });
};
