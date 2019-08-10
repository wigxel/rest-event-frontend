import _ from 'lodash';

const createProject = data => ({
  title: 'Am sample One',
  event_date: '2018-03-06',
  category: 'Wedding Reception',
  ...data
});

export function generateProjects(count) {
  return _.range(count).map((e, index) => createProject({ id: index + 1 }));
}
