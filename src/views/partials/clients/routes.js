export const baseRoute = (str = '') => `/dashboard/${str}`;
const projectRoute = str => baseRoute(`projects/${str}`);

const routes = {
  projects: baseRoute('projects'),
  overview: baseRoute('overview'),
  settings: baseRoute('settings'),

  // projects
  events: projectRoute('events'),
  chatbots: projectRoute('chatbots'),
  messaging: projectRoute('messages'),
  createEvent: projectRoute('events/create'),
  planner: (id = ':id') => baseRoute(`projects/planner/${id}`),

  // settings
  general: baseRoute('settings/general'),
};

export default routes;
