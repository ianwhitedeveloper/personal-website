import React, {Component} from 'react';
import mui from 'material-ui';
import Sticky from 'react-sticky';

const AppBar = mui.AppBar;
const LeftNav = mui.LeftNav;
const MenuItem = mui.MenuItem;
const styles = {
	stickyHeader: {
		backgroundColor: 'rgba(2, 119, 189, 0.8)'
	}
}
const menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: '/#projects',
     text: 'Projects'
  },
  {
     type: MenuItem.Types.LINK,
     payload: '/#skills',
     text: 'Skills'
  },
  {
     type: MenuItem.Types.LINK,
     payload: '/#education',
     text: 'Education'
  },
  {
     type: MenuItem.Types.LINK,
     payload: '/#contact',
     text: 'Contact'
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
					<AppBar onLeftIconButtonTouchTap={::this.handleClick} style={styles.stickyHeader} />
				</Sticky>

				<LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
			</div>
		);
	}
}