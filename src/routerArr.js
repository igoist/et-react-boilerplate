import HelloWorld from './usecase/helloWorld/';
import Another from './usecase/another/';

const currentUrl = '/';


const routerArr = [
  {
    path: currentUrl,
    title: 'App: HelloWorld',
    component: HelloWorld,
    exact: true
  },
  {
    path: currentUrl + 'another',
    title: 'App: Another',
    component: Another
  },
];

export default routerArr;
