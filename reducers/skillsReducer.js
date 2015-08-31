export default function skills(state = [], action) {
	switch (action.type) {
		case 'FILTER_SKILLS':
			let regex = new RegExp(action.q, 'i');
			return state.map(skill => 
				skill.title.match(regex) ? Object.assign({}, skill, { show: true }) : Object.assign({}, skill, { show: false })
			);
			break;
		default:
			return state
			break;
	}
}