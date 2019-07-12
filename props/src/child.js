import React from 'react'
import PropTypes from 'prop-types'

class Child extends React.Component {
  
  render() {
    const renderTestArray = arrayProps => {
      return arrayProps.map((unit, idx) => {
        return (<div key={idx}>
                  {unit}
                </div>)
      })
    }

    return (<div>
      {renderTestArray(this.props.testArray)}
    </div>);
  }
}

Child.propTypes = {
  testArray: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
}

Child.defaultProps = {
  // 배열의 원소는 String 타입으로 들어감 
  testArray : []
}

export default Child
