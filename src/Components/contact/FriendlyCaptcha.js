import { useEffect, useRef, forwardRef } from "react";
import { WidgetInstance } from "friendly-challenge";
import "../Styles/Style.css";

const FriendlyCaptcha = forwardRef(
  ({ sitekey, doneCallback, errorCallback, startMode }, widget) => {
    const container = useRef();
    const _doneCallback = (solution) => {
      if (doneCallback) doneCallback(solution);
    };

    const _errorCallback = (err) => {
      if (errorCallback) errorCallback(err);
      console.log(
        `There was an error when trying to solve the FriendlyCaptcha: ${err}`
      );
    };

    useEffect(() => {
      if (!widget.current && container.current) {
        widget.current = new WidgetInstance(container.current, {
          startMode: startMode || "focus",
          doneCallback: _doneCallback,
          errorCallback: _errorCallback,
        });
      }

      return () => {
        if (widget.current != undefined) widget.current.reset();
      };
    }, [container]);

    return (
      <div
        ref={container}
        class="frc-captcha"
        data-sitekey={process.env.REACT_APP_FRIENDLY_CAPTCHA_SITEKEY}
      ></div>
    );
  }
);

export default FriendlyCaptcha;
