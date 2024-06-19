
export default (routes) => {
  $('#nav').on('click', 'a', function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    history.pushState({}, "", href);
    console.log(e.target.pathname);
    navigate(e.target.pathname);
  });

  function navigate(route="/") {
    // Render component
    console.log(route)
    $("#app").html(routes[route] ? routes[route].content : 'Page not found'); // Use content from routes or show 'Page not found'
  }

};

