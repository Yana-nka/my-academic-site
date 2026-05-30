// Headroom disabled - anchors would hide header
(function(){
  var header = document.querySelector('.page-header');
  if(header) { header.style.position = 'fixed'; }
})();
