const FEATURES = [
  import(/* webpackMode: "eager" */ '../../../features/feature-c'),
  import(/* webpackMode: "eager" */ '../../../features/feature-d'),
];

export function loadLevel2Features() {
  // eslint-disable-next-line
  return Promise.all(FEATURES.map(async (loadFeature) => {
    const feature = await loadFeature;
    return feature.default();
  }));
}
