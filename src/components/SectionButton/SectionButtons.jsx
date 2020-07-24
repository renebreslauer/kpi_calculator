import React from 'react'
import PropTypes from 'prop-types'
import SectionButton from './SectionButton'

class SectionButtons extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      activeSectionButton: this.props.children[0].props.label,
    }
  }

  onClickSectionButtonItem = (SectionButton) => {
    this.setState({ activeSectionButton: SectionButton })
  }

  render() {
    const {
      onClickSectionButtonItem,
      props: { children },
      state: { activeSectionButton },
    } = this

    return (
      <div className="SectionButtons">
        <div className="SectionButton-list">
          {children.map((child) => {
            const { label } = child.props

            return (
              <SectionButton
                activeSectionButton={activeSectionButton}
                key={label}
                label={label}
                onClick={onClickSectionButtonItem}
              />
            )
          })}
        </div>
        <div className="SectionButton-content">
          {children.map((child) => {
            if (child.props.label !== activeSectionButton) return undefined
            return child.props.children
          })}
        </div>
      </div>
    )
  }
}

export default SectionButtons
