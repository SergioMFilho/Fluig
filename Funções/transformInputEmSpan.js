function transformInputsEmSpans(div) {
  let inputs = $(`#${div} input`).toArray();
  $.each(inputs, (i, item) => {
    item.value = "TESTESTESTESTE"; //retirar isso
    $(item).replaceWith($("<br><span>" + item.value + "</span>"));
  });
}
