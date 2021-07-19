import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
  
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced='right' src='https://images.freeimages.com/images/large-previews/d7e/door-to-dollars-1634105.png'/>
        <Dropdown pointing='top' text='MK'>
          <Dropdown.Menu>
            <Dropdown.Item text='My Info' icon='info'/>
            <Dropdown.Item onClick={props.signOut} text='Sign Out' icon='sign-out'/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}
