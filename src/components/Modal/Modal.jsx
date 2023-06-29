import { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClick);
  }

  handleEscapeClick = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children, className } = this.props;

    return (
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent className={className}>{children}</ModalContent>
      </ModalBackdrop>
    );
  }
}
