$(function() {

  const worksSlider = $('[data-slider="slick"]');

    /* Modal */

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function() {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)"
      });
    }, 200);

    $('#worksSlider').slick('setPosition');
  });

  modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });

    setTimeout(function() {
     modalParent.removeClass('show');
     $("body").removeClass('no-scroll');
    }, 200);
  });


  /* Slider:https://kenwheeler.github.io/slick/ */
  $("[data-slider]").slick ({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    var sliderRooms = document.getElementById("myRooms");
    var outputRooms = document.getElementById("demoRooms");
        outputRooms.innerHTML = sliderRooms.value;

    sliderRooms.oninput = function() {
      outputRooms.innerHTML = this.value;
    }

    var sliderFloor = document.getElementById("myFloor");
    var outputFloor = document.getElementById("demoFloor");
        outputFloor.innerHTML = sliderFloor.value;

    sliderFloor.oninput = function() {
      outputFloor.innerHTML = this.value;
    }









});
