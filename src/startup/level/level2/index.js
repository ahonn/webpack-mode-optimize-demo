const FEATURES = [
  import('../../../features/feature-c'),
  import('../../../features/feature-d'),
];

export function loadLevel2Features() {
  // eslint-disable-next-line
  return Promise.all(FEATURES.map(async (loadFeature) => {
    const feature = await loadFeature;
    return feature.default();
  }));
}
