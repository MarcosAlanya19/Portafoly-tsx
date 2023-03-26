export const config = {
  // STATE_KEY: "_state_v1",
  // MINUTES_INACTIVE: import.meta.env.VITE_MINUTES_INACTIVE || 15,
  ROUTES: {
    INDEX: '/',
    ABOUT_ME: '/sobre-mi',
    CONTACT: '/contacto',
    EDUCATION: '/educacion',
    EMPLOYEMENT: '/trabajos',
    PORTAFOLY: '/portafolio',
    SKILLS: '/habilidades',
  },
  API: {
    URL_BASE:
      import.meta.env.VITE_API_URL ||
      'https://lionfish-app-hxqcb.ondigitalocean.app',
  },
};
