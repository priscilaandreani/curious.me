import ReactModal from 'react-modal';
import { ModalStyle, OverlayStyle } from './Modal.style';

export function ModalComponent(props: ReactModal.Props) {
  return (
    <ReactModal
      {...props}
      shouldCloseOnOverlayClick
      className="Modal"
      overlayClassName="Overlay"
      appElement={document.getElementById('root') as HTMLElement}
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
    />
  );
}
