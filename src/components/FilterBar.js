import React from 'react'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton, Col} from 'react-bootstrap/lib/'

const FilterBar = ({toggleFilter, defaultFilter}) => {

  let handleChange = (event) => {
    toggleFilter(event.target.value)
  }

  return (
    <div>
      <Col className="buttonGroup" md={10} mdOffset={1}>
        <ButtonToolbar>
          <ToggleButtonGroup  justified
                              type="radio"
                              name="filter"
                              defaultValue="all">
            <ToggleButton onChange={handleChange} value="all">All Students</ToggleButton>
            <ToggleButton onChange={handleChange} value="absent">Absent</ToggleButton>
            <ToggleButton onChange={handleChange} value="present">Present</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </Col>
    </div>
  )
}

export default FilterBar
