let inputs = $("input select").toArray();
let enableFields = "";
$.each(teste, (i, item) => {
  if (!$(item).hasClass("hide")) {
    enableFields += `form.setEnabled("${item.name}", false) \n`;
  }
});

console.error(enableFields);
