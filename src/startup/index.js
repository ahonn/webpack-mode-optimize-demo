import { loadLevel1Features } from './level/level1';
import { loadLevel2Features } from './level/level2';
import { loadLevel3Features } from './level/level3';

export default class StartupService {
  async start() {
    console.log('load level1');
    loadLevel1Features();
    console.log('load level2');
    loadLevel2Features();
    console.log('load level3');
    loadLevel3Features();
  }
}
