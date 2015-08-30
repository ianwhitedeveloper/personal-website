export default function skills(state = [], action) {
	switch (action.type) {
		case 'SORT_SKILLS_ASC':
			return state.sort();
		case 'SORT_SKILLS_DESC':
			return state.sort((a, b) => { return a < b });
		default:
			return state
			break;
	}
}