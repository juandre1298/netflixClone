export default function(incertElementId, list) {
  const incertElement = $(incertElementId);
  const htmlContent = Object.keys(list).map(key => {
    const navLink = $('<a>').addClass('nav-link').attr('href',key).text(list[key].linkLabel);
    return $("<li>").append(navLink).prop('outerHTML');
  }).join("");

  incertElement.html(htmlContent);
}
