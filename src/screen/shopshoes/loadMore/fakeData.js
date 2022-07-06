let lastItem = '';

export const fakeServer = (qty, arr) => {
  let newArr;
  const lastItemIndex = arr.indexOf(lastItem);
  if (lastItemIndex === arr.length - 1) return;

  if (!lastItem) {
    newArr = [...arr].slice(0, qty);
    lastItem = [...newArr].pop();
  } else {
    const newIndex = arr.indexOf(lastItem) + 1;
    newArr = [...arr].slice(newIndex, qty + newIndex);
    lastItem = [...newArr].pop();
  }

  return newArr;
};
