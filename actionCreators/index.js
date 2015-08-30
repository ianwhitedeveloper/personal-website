export const RETURN_PROJECTS = 'RETURN_PROJECTS';

export function returnProjects() {
	return {
		type: RETURN_PROJECTS,
	}
}

export const LIKE_PROJECT = 'LIKE_PROJECT';
export function likeProject(id) {
	return {
		type: LIKE_PROJECT,
		id
	}
}