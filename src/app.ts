export * from './bootstrap';
import {app} from './components/config';
import {RunFn} from './run';
import {
  Notify,
  InputComponments,
  ProjectHomeActivity,
  TaskFilter
} from './components/et';
import {rootZone} from './components/bases/Utils';

angular.module('et.template')
.service('notify', Notify)
.service('InputComponments', InputComponments)
.service('ProjectHomeActivity', ProjectHomeActivity)
.service('taskFilter', TaskFilter);

angular.module('teambition')
.constant('app', app)
.constant('moment', moment)
.constant('marked', marked)
.run(RunFn);

rootZone.run(() => {
  angular.element(document).ready(() => {
    angular.bootstrap(document, ['teambition']);
  });
});

export * from './Run';
export * from './components/services';
export * from './components/directives';
export * from './components/config';
export * from './components/bases';
export * from './components/et';
