import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default forwardRef(function Modal({ children, ...props }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal-root"),
  );
});
