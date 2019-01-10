// jQuery used for page scroll anchoring and highlighting current section with blue underline.
// Add smooth scrolling to all links
$(document).ready(function() {
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault()
      var hash = this.hash
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash
        }
      )
    }
  })
})

// highlight current section blue in case studies
$(document).ready(function() {
  var aChildren = $('span li').children()
  var aArray = []
  for (var i = 0; i < aChildren.length; i++) {
    var aChild = aChildren[i]
    var ahref = $(aChild).attr('href')
    aArray.push(ahref)
  }
  $(window).scroll(function() {
    var windowPos = $(window).scrollTop()
    var windowHeight = $(window).height()
    var docHeight = $(document).height()

    for (var i = 0; i < aArray.length; i++) {
      var theID = aArray[i]
      var divPos = $(theID).offset().top
      var divHeight = $(theID).height()
      if (windowPos >= divPos && windowPos < divPos + divHeight) {
        $("a[href='" + theID + "']").addClass('span-active')
      } else {
        $("a[href='" + theID + "']").removeClass('span-active')
      }
    }
    if (windowPos + windowHeight == docHeight) {
      if (!$('span li:last-child a').hasClass('span-active')) {
        var navActiveCurrent = $('.span-active').attr('href')
        $("a[href='" + navActiveCurrent + "']").removeClass('span-active')
        $('span li:last-child a').addClass('span-active')
      }
    }
  })
})

// End jQuery
