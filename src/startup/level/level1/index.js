
const FEATURES = [
  import('../../../features/feature-a'),
  import('../../../features/feature-b'),
];

export function loadLevel1Features() {
  // eslint-disable-next-line
  return Promise.all(FEATURES.map(async (loadFeature) => {
    const feature = await loadFeature;
    return feature.default();
  }));
}
