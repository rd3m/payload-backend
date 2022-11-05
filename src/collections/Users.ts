import { CollectionConfig } from "payload/types"

const Users: CollectionConfig = {
	slug: "users",
	auth: true,
	admin: {
		useAsTitle: "email",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
		},
		{
			name: "role",
			type: "radio",
			defaultValue: "user",
			admin: {
				position: "sidebar",
			},
			options: [
				{
					label: "User",
					value: "user",
				},
				{
					label: "Admin",
					value: "admin",
				},
			],
		},
	],
}

export default Users
