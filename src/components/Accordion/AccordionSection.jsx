import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Accordion.scss'
import { NavLink } from 'react-router-dom'

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    this.props.onClick(this.props.label)
  }

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this

    return (
      <div className="accordion_section">
        <div onClick={onClick} className="accordion_label">
          {label}

          <div className="accordion_label_text">
            {!isOpen && <span>&#43;</span>}
            {isOpen && <span>&#8722;</span>}
          </div>
        </div>
        {isOpen && (
          <div className="accordion_section_open">{this.props.children}</div>
        )}
      </div>
    )
  }
}

export default AccordionSection
