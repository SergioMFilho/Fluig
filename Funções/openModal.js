function handleOpenModal(id_button, id_modal) {
  $(`#${id_button}`).on("click", (e) => {
    $(`#${id_modal}`).show(500);
    $("#formulario").addClass("modal_parent");
    e.stopPropagation();
  });

  $(`#${id_modal}`).on("click", (e) => {
    e.stopPropagation();
  });
}
