import React from 'react';
import { Label } from 'semantic-ui-react'

const PersonCount = (props) => (
  <Label
    aria-live="assertive"
    aria-atomic="true"
    id="person-count"
    className="person-count"
    role="status">
    Надено записей
    <Label.Detail> {props.count}</Label.Detail>
  </Label>
)

export default PersonCount