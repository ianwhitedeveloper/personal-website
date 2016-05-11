export default function openSourceProjects(state = [], action) {
  switch (action.type) {
    case 'RETURN_PROJECTS':
      return {
        ...state
      }
      break;
    default:
      return state
  }
}
