import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let initialized = false;

export const initMunicipalAnimations = () => {
  if (initialized) {
    return;
  }

  initialized = true;

  // Animaciones de la navbar
  const navTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  navTl
    .to('#navbar', { y: 0, duration: 0.1 })
    .to('.logo-container', { opacity: 1, x: 0, duration: 0.8 }, '+=0.2')
    .to('.nav-links a', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')
    .to('.nav-btn', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.2');

  // Animaciones del hero (solo en la home)
  const heroTl = gsap.timeline({ delay: 0.5, defaults: { ease: 'power3.out' } });
  heroTl
    .to('.hero-badge', { opacity: 1, y: 0, duration: 0.6 })
    .to('.hero-title', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    .to('.hero-text', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to('.hero-btns', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
    .to('.hero-visual', { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, '-=0.8');

  // Animaciones de las tarjetas de servicios en scroll
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

  // Animaciones hover en botones
  document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.02, duration: 0.3, ease: 'power1.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power1.out' });
    });
  });

  // Reset de ScrollTrigger cuando cambian las rutas
  window.addEventListener('popstate', () => {
    ScrollTrigger.refresh();
  });
};
