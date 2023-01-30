function handleOnChange(name, obs_id) {
  const obs = $(`#${obs_id}`);
  $(`#${obs_id}`).on("change blur keyup", () => {
    if (!isEmpty(obs.val())) {
      obs.css("border", "solid 1px rgb(204,204,204)");
    } else {
      obs.css("border", "solid 1px #CC3D3D");
    }
  });
}
