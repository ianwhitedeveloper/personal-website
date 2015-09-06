import React, {Component} from 'react';
import mui from 'material-ui';
import LeftNav from './custom-ui-components/left-nav';
import MenuItem from './custom-ui-components/left-nav';
import Sticky from 'react-sticky';

const AppBar = mui.AppBar;
// const MenuItem = mui.LeftNav;
// const MenuItem = mui.MenuItem;
const styles = {
	stickyHeader: {
		backgroundColor: 'rgba(2, 119, 189, 0.8)'
	}
}
const menuItems = [
  { href: '/#skills', text: 'skills' },

  
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