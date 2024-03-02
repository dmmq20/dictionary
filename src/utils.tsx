function parse(definition) {
  const result: string[] = [];
  let i = 0;
  while (i < definition.length) {
    let s = "";
    while (/[a-zA-Z]/.test(definition[i])) {
      s += definition[i++];
    }
    if (s.length > 0) result.push(s);
    else result.push(definition[i++]);
  }
  return result;
}
