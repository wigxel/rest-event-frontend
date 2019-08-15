export const baseRoute = (str = '') => `/dashboard/${str}`;
const projectRoute = str => baseRoute(`projects/${str}`);

const routes = {
  events: projectRoute('events'),
  chatbots: projectRoute('chatbots'),
  messaging: projectRoute('messages'),
  createEvent: projectRoute('events/create'),
  planner: (id = ':id') => baseRoute(`projects/planner/${id}`)
};

export default routes;
