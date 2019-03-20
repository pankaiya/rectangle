/* global Rectangle:true */
$(function(){
  var $length = $('#length'),
      $width = $('#width'),
      $btnCal = $('#btncal'),
      $perimeter = $('#perimeter'),
      $area=$('#area');
  $btnCal.click(function(){
    var w = Number($length.val()),
        h = Number($width.val());

    var r = new Rectangle(w,h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
