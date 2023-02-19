export const canReconfigure = (from, other) => {
  //   if (from === undefined || from === null) throw new Error();
  //   if (to === undefined || to === null) throw new Error();
  if (typeof from !== "string") throw new Error("from is not a string");
  if (typeof other !== "string") throw new Error("other is not a string");
  if (from.length !== other.length) return false;
  if (new Set(from).size !== new Set(other).size) return false;

  const tranformations = {};

  for (let index = 0; index < from.length; index++) {
    const fromLetter = from[index];
    const otherLetter = other[index];

    const storedLetter = tranformations[fromLetter];
    if (storedLetter && storedLetter !== otherLetter) return false;
    tranformations[fromLetter] = otherLetter;
  }
  return true;
};
