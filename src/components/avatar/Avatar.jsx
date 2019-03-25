import * as React from 'react';
import { Iconfont, } from '../index';
import PropTypes from 'prop-types';
import './Avatar.scss';

export const Avatar = (props) => {
    const { className: extraClassName='', style: extraStyle={}, icon, shape, size, src, alt } = props;
    const className = `avatar ${extraClassName} avatar-size-${size}`

    return (
        <span className={className} style={{...extraStyle}}>
            <AvatarContent icon={icon} src={src} alt={alt} />
        </span>
    );
};

Avatar.propTypes = {
    icon: PropTypes.string,
    shape: PropTypes.oneOf(['square', 'circle']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['small', 'default', 'large'])]),
    src: PropTypes.string,
    alt: PropTypes.string,
}

Avatar.defaultProps = {
    icon: 'zhanghu',
    shape: 'square',
    size: 'default',
    alt: '图片加载失败',
}

const AvatarContent = (props) => {
    const {icon, src, alt } = props;

    if (!!src) {
        return (
            <img className="avatar-img" src={src} alt={alt} />
        )
    } else {
        return (<Iconfont className="avatar-icon" type={icon} />)
    }
}

AvatarContent.propTypes = {
    icon: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
}