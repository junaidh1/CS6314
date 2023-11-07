$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

document.getElementById("specialsLink").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  $('#exampleModal').modal('show'); // Show the modal
});
