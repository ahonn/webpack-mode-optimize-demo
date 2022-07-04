const FEATURES = [
  import(/* webpackMode: "eager" */ '../../../features/feature-e'),
  import(/* webpackMode: "eager" */ '../../../features/feature-f'),
];

export function loadLevel3Features() {
  // eslint-disable-next-line
  return Promise.all(FEATURES.map(async (loadFeature) => {
    const feature = await loadFeature;
    return feature.default();
  }));
}
