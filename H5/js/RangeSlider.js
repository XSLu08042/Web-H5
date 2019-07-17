var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
  var max = elem.getAttribute("max");
  var width = (0.88 / max * newValue) +"%";    //这里的91.3是用了整个滑块的宽度300减去拖动的那个圆形滑块的宽度30再加上圆形滑块的边框宽度4然后再除以300得来的，因为显示拖动距离的rang_width在绝对定位后在滑动过程中会遮挡住圆形滑块，导致圆形滑块无法被拖动，所以要适当的减少rang_width在滑动时的宽度，当然rang_width的宽度是根据你自己的实际需求来计算出来的，并不是一成不变的91.3%
  document.querySelector('.rang_width').style.width = width;
};

elem.addEventListener("input", rangeValue);
