$(document).ready( function() {
      var w = window.innerWidth;

      stringSlice('.tickets-events-details .details h3', 93);
      stringSlice('.tickets-events-details .details p.address.one-elipses', 75);
      stringSlice('.tickets-events-details .details p.address.two-elipses', 140);
      stringSlice('.tickets-events-details .details p.event-contact', 252);
      stringSlice('.tickets-events-details .details p.space-mobile span.price-level', 30);
      stringSlice('.tickets-events-details .qr-code-img.visible-xs p.general-info', 15);
      stringSlice('.tickets-events-details .qr-code-img.hidden-xs p.general-info', 20);
      
      if (w < 600) {
        stringSlice('.tickets-events-details .details p.address.one-elipses', 50);
        stringSlice('.tickets-events-details .details p.address.two-elipses', 90);
        stringSlice('.tickets-events-details .details p.space-mobile span.price-level', 18);
      }

      function stringSlice(element, length) {
        var ele = document.querySelector(element).innerHTML;
        if (ele.length > length) {
          var res = ele.slice(0, length);
          document.querySelector(element).innerHTML = res+'...';
        }
      }

    });
