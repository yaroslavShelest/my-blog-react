import React from "react";

export default class ProgressBar extends React.Component {   // TODO

  componentDidMount() {
    this.$el = $(this.el);
    $el.on("scroll", function() {
      $(".bar span").each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var myVal = $(this).attr("data-width");
        if (bottom_of_window > bottom_of_object) {
          $(this).css({
            width: myVal
          });
        }
      });
    });
  }

  componentWillUnmount() {
    $el.off("scroll", function() {
      $(".bar span").each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var myVal = $(this).attr("data-width");
        if (bottom_of_window > bottom_of_object) {
          $(this).css({
            width: myVal
          });
        }
      });
    });
  }

  render() {
    return (
      <div ref={el => (this.el = el)}>
        <h6>{this.props.children} this.props.children</h6>
        <div className="bar">
          <span className="fill" data-width="85%"></span>
        </div>
        <div className="tip"></div>
      </div>
    );
  }
}
