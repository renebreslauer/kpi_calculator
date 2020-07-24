import React from 'react'
import './SectionButton.scss'
import PropTypes from 'prop-types'

class SectionButton extends React.Component {
  static propTypes = {
    activeSectionButton: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeSectionButton, label },
    } = this

    let className = 'SectionButton-list-item'

    if (activeSectionButton === label) {
      className += ' SectionButton-list-active'
    }

    return (
      <button id="sectionButton" className={className} onClick={onClick}>
        {label}
      </button>
    )
  }
}

export default SectionButton
