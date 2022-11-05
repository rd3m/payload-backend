import { Access } from "payload/config"

export const isAdminOrAssigned: Access = ({ req: { user } }) => {
	if (user) {
		if (user.role === "admin") {
			return true
		}

		return {
			assignedTo: {
				equals: user.id,
			},
		}
	}

	return false
}
