import React from 'react';

export default React.createClass({


  getDefaultProps() {
    return {
      prefixCls: 'rc-progress',
      strokeWidth: 1,
      strokeColor: '#2db7f5',
      trailWidth: 1,
      trailColor: '#D9D9D9',
      strokeLinecap: 'round',
      className: '',
    };
  },
  componentDidUpdate() {
    const now = Date.now();
    this.refs.path.style.transitionDuration = '0.3s, 0.3s';
    if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
      this.refs.path.style.transitionDuration = '0s, 0s';
    }
    this.prevTimeStamp = Date.now();
  },

  render() {
    const {
      prefixCls, strokeWidth, trailWidth, strokeColor,
      trailColor, strokeLinecap, percent, style, className,
      ...restProps,
    } = this.props;

    const radius = (50 - strokeWidth / 2);
    const pathString = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
    const len = Math.PI * 2 * radius;
    const pathStyle = {
      strokeDasharray: `${len}px ${len}px`,
      strokeDashoffset: `${((100 - percent) / 100 * len)}px`,
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease',
    };

    return (
      <svg
        className={`${prefixCls}-circle ${className}`}
        viewBox="0 0 100 100"
        style={style}
        {...restProps}
      >
        <path
          className={`${prefixCls}-circle-trail`}
          d={pathString}
          stroke={trailColor}
          strokeWidth={trailWidth || strokeWidth}
          fillOpacity="0"
        />
        <path
          className={`${prefixCls}-circle-path`}
          d={pathString}
          strokeLinecap={strokeLinecap}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fillOpacity="0"
          ref="path"
          style={pathStyle}
        />
        <text dominantBaseline="middle" textAnchor="middle" x="50" y="50">{percent}%</text>
      </svg>
    );
  },
});