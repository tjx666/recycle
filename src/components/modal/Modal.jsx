import * as React from 'react';
import { Button } from '../index';
import PropTypes from 'prop-types';
import './Modal.scss';

export const Modal = (props) => {
    const { isOpen: initialOpenState, title, children, onOk, onCancel } = props;
    const [ isOpen, setIsOpen ] = React.useState(initialOpenState);

    const handleOk = () => {
        onOk();
        isOpen && setIsOpen(false);
    }

    const handleCancel = () => {
        onCancel();
        isOpen && setIsOpen(false);
    }

    return (
        <div className="modal" style={{ display: isOpen ? 'block' : 'none', }}>
            <div className="modal-content">
                <div className="modal-header">{title}</div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    <Button onTap={handleCancel}>Cancel</Button>
                    <Button type="primary" onTap={handleOk}>Ok</Button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isOpen: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
}

Modal.defaultProps = {
    isOpen: false
}