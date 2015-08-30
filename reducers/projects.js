var initialState = [{title: 'UPS Houston', likes: 0}, {title: 'UPS Other', likes: 0}];

export function projects(state = initialState, action) {
  switch (action.type) {
    case 'RETURN_PROJECTS':
      return {
        ...state
      }
      break;
    case 'LIKE_PROJECT':
	    return state.map(project =>
	      project.title === action.title ?
	        Object.assign({}, project, { likes: project.likes + 1 }) :
	        project
	    );
    	break;
    default:
      return state
  }
}
