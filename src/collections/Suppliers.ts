import { CollectionConfig } from "payload/types"

const Suppliers: CollectionConfig = {
	slug: "suppliers",
	admin: {
		useAsTitle: "name",
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
		},
	],
}

export default Suppliers
