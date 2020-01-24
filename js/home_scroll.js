// var last_offset = 0

// window.onscroll = function scrollDiv(e) {
//   window.scrollTo(0, div * screen.availHeight);
//   console.log(" DIV " + div + " Offset " + window.pageYOffset);
//   window.clearTimeout(isScrolling);
//   isScrolling = setTimeout(function() {
//     if (window.pageYOffset == last_offset & last_offset != 0) {
//       div -= 1;
//     } else {
//       div += 1;
//     }
//     if (div < 0 ) {
//       div = 0;
//     } else if (div > 4){
//       div = 4;
//     }
//   }, 66);
// }
// var isScrolling;
// var count = 0;
// var last_value = 0;
// var div = 0
//
// window.onscroll = function scrollDeiv() {
  // window.scrollTo(0, div * screen.availHeight);
  // if (last_value < window.pageYOffset) {
  //   count += 1;
  // } else if (last_value > window.pageYOffset){
  //   count -= 1;
  // }
  //
  // if (count == 5) {
  //   div += 1;
  //   if (div > 4) {
  //     div = 4;
  //   }
  // } else if (count == -5) {
  //   div -= 1;
  //   if (div < 0) {
  //     div = 0;
  //   }
  // } else {
  //   last_value = window.pageYOffset;
  // }
  // window.clearTimeout(isScrolling);
  // isScrolling = setTimeout(function() {
  //   count = 0;
  // }, 36);
  //}

// var div_id = ["home_div", "sig_div", "event_div", "team_div", "footer_div"];
// var div = 0;
// var count = 0;
// var last_value = 0;
// var changeView = false;
// var isScrolling;
//
// window.onscroll = function changeView() {
//   if (last_value < window.pageYOffset) {
//     count += 1;
//   } else if (last_value > window.pageYOffset){
//     count -= 1;
//   }
//
//   if (count == 5) {
//     document.getElementById(div_id[div]).setAttribute("style","display:none");
//     div += 1;
//     if (div > 4) {
//       div = 4;
//     }
//     changeView = true;
//   } else if (count == -5) {
//     document.getElementById(div_id[div]).setAttribute("style","display:none");
//     div -= 1;
//     if (div < 0) {
//       div = 0;
//     }
//     changeView = true;
//   } else {
//     last_value = window.pageYOffset;
//   }
//   if (changeView) {
//     document.getElementById(div_id[div]).setAttribute("style","display:flow-root");
//     changeView = false;
//   }
//   window.clearTimeout(isScrolling);
//   isScrolling = setTimeout(function() {
//     count = 0;
//   }, 66);
// }
