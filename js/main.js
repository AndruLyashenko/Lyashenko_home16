$(".accordion-button").on("click",function(){var t=$(this).attr("data-id");$(".accordion-text.active").removeClass("active"),$('.accordion-text[data-id="'+t+'"]').toggleClass("active")}),$(".tooltip").on("hover",function(){var t=$(this).offsetLeft,o=$(this).offsetTop;$(".tooltip-text").addClass("active").css({left:t+"px",top:o+30+"px"})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiaWQiLCJ0aGlzIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsInRvcCIsIm9mZnNldFRvcCIsImFkZENsYXNzIiwiY3NzIl0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRSxxQkFBcUJDLEdBQUcsUUFBUSxXQUM5QixHQUFJQyxHQUFLRixFQUFFRyxNQUFNQyxLQUFLLFVBQ3RCSixHQUFFLDBCQUEwQkssWUFBWSxVQUN4Q0wsRUFBRSw0QkFBOEJFLEVBQU0sTUFBTUksWUFBWSxZQUU1RE4sRUFBRSxZQUFZQyxHQUFHLFFBQVMsV0FDdEIsR0FBSU0sR0FBT1AsRUFBRUcsTUFBTUssV0FDZkMsRUFBTVQsRUFBRUcsTUFBTU8sU0FDbEJWLEdBQUUsaUJBQWlCVyxTQUFTLFVBQVVDLEtBQ2xDTCxLQUFNQSxFQUFPLEtBQ2JFLElBQUtBLEVBQU0sR0FBSyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLmFjY29yZGlvbi1idXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAkKCcuYWNjb3JkaW9uLXRleHQuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmFjY29yZGlvbi10ZXh0W2RhdGEtaWQ9XCInICsgaWQgICsgJ1wiXScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcbiQoJy50b29sdGlwJykub24oJ2hvdmVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbGVmdCA9ICQodGhpcykub2Zmc2V0TGVmdDtcclxuICAgIHZhciB0b3AgPSAkKHRoaXMpLm9mZnNldFRvcDtcclxuICAgICQoJy50b29sdGlwLXRleHQnKS5hZGRDbGFzcygnYWN0aXZlJykuY3NzKHtcclxuICAgICAgICBsZWZ0OiBsZWZ0ICsgJ3B4JyxcclxuICAgICAgICB0b3A6IHRvcCArIDMwICsgJ3B4J1xyXG4gICAgfSlcclxufSk7Il19