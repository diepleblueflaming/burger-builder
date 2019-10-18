export const classname = (classes) => {
  let strClasses = '';
  for (let cls in classes) {
    if (classes.hasOwnProperty(cls) && classes[cls] && typeof classes[cls] === "boolean") {
      strClasses += ` ${cls}`;
    }
  }
  return strClasses;
};
