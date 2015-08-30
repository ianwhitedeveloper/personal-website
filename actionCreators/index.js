export const RETURN_PROJECTS = 'RETURN_PROJECTS';

export function returnProjects() {
	return {
		type: RETURN_PROJECTS,
	}
}

export const LIKE_PROJECT = 'LIKE_PROJECT';
export function likeProject(title) {
	return {
		type: LIKE_PROJECT,
		title
	}
}

export const SORT_SKILLS_ASC = 'SORT_SKILLS_ASC';
export function sortSkillsAsc() {
	return {
		type: SORT_SKILLS_ASC
	}
}

export const SORT_SKILLS_DESC = 'SORT_SKILLS_DESC';
export function sortSkillsDesc() {
	return {
		type: SORT_SKILLS_DESC
	}
}