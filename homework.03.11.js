const original = {
    a: 1,
    b: 2,
  };
  function invertObject(obj) {
    const inverted = {};
    for (const key in obj) {
      inverted[obj[key]] = key;
    }
    return inverted;
  }
  
  const inverted = invertObject(original);
  console.log(inverted);