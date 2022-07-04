export default class StartupService {
  async start() {
    // eslint-disable-next-line
    const [{ loadLevel1Features }, { loadLevel2Features }] = await Promise.all([
      import(/* webpackChunkName: "features-level1" */ './level/level1'),
      import(/* webpackChunkName: "features-level2" */ './level/level2'),
    ]);
    console.log('load level1');
    loadLevel1Features();
    console.log('load level2');
    loadLevel2Features();

    const { loadLevel3Features } = await import(/* webpackChunkName: "features-level3" */ './level/level3');
    console.log('load level3');
    loadLevel3Features();
  }
}
