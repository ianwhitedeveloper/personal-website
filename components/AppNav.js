import React, {Component} from 'react';
import mui from 'material-ui';
import Sticky from 'react-sticky';

const AppBar = mui.AppBar;
const LeftNav = mui.LeftNav;
const MenuItem = mui.MenuItem;
const styles = {
	stickyHeader: {
		backgroundColor: 'rgba(255, 255, 255, 0.5)'
	}
}
const menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/callemall/material-ui',
     text: 'GitHub'
  },
  {
     text: 'Disabled',
     disabled: true
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://www.google.com',
     text: 'Disabled Link',
     disabled: true
  },
];

export default class AppNav extends Component {
	handleClick(e) {
		this.refs.leftNav.toggle();
	}

	render() {
		return(
			<div>
				<Sticky>
					<AppBar onLeftIconButtonTouchTap={::this.handleClick} style={styles.stickyHeader} title="Title" />
				</Sticky>

				<LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
			</div>
		);
	}
}