export const insertEnter = (str) => {
  const arr = str.split('.');
  return arr.join('.<br />');
};

export const insertDoubleEnter = (str) => {
  const arr = str.split('.');
  return arr.join('.<br /><br />');
};
