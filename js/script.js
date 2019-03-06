$(document).ready(() => {
  $("#submit").on("click", () => {
    let name = $("#name").val();
    let shout = $("#shout").val();
    let date = getDate();
    let dataString = `name=${name}&shout=${shout}&date=${date}`;

    if (name == "" || shout == "") {
      alert("Please include a name and a shout");
    } else {
      $.ajax({
        type: "POST",
        url: "../jsshoutbox/shoutbox.php",
        data: dataString,
        cache: false,
        success: function(html) {
          $("#shouts ul").prepend(html);
        }
      });
    }

    return false;
  });
});

function getDate() {
  new Date()
    .toJSON()
    .slice(0, 19)
    .replace("T", " ");
}
