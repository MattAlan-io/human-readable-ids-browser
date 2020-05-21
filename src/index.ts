import { animals, adjectives } from './values';

/**
 * Gets a random item from an array
 * @param arr Array to get item from
 */
function getRandomItem<T>(arr: T[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

/**
 * Gets an human readable ID in the format adjective<DELIMITER>animal
 * @param delimiter Defaults to a hyphen (-), or pass in a custom delimiter
 */
export function getID(delimiter = '-') {
  const adjective = getRandomItem<string>(adjectives);
  const animal = getRandomItem<string>(animals);

  return [adjective, animal].join(delimiter);
}
