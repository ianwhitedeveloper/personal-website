var initialState = [{id: 26, title: 'hi there', likes: 0}];

export function projects(state = initialState, action) {
  switch (action.type) {
    case 'RETURN_PROJECTS':
      return {
        ...state
      }
      break;
    case 'LIKE_PROJECT':
	    return state.map(project =>
	      project.id === action.id ?
	        Object.assign({}, project, { likes: project.likes + 1 }) :
	        project
	    );
    	break;
    default:
      return state
  }
}
