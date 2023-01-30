let teste = $("input").toArray();
$.each(teste, (i, item) => {
  if (item.name.length > 30) {
    console.error("AQ  " + item.name);
  }
});
