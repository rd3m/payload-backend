import { CollectionConfig } from "payload/types"
import { isAdminOrAssigned } from "../access/isAdminOrAssigned"

const Invoices: CollectionConfig = {
	slug: "invoices",
	admin: {
		useAsTitle: "invoiceNumber",
	},
	access: {
		read: isAdminOrAssigned,
	},
	fields: [
		{
			name: "invoiceNumber",
			type: "text",
			required: true,
		},
		{
			name: "invoiceDate",
			type: "date",
			required: true,
			admin: {
				date: {
					pickerAppearance: "dayOnly",
				},
			},
		},
		{
			name: "invoiceDueDate",
			type: "date",
			required: true,
			admin: {
				date: {
					pickerAppearance: "dayOnly",
				},
			},
		},
		{
			name: "invoiceAmount",
			type: "number",
			required: true,
		},
		{
			name: "invoiceStatus",
			type: "radio",
			required: true,
			defaultValue: "unpaid",
			options: [
				{
					label: "Unpaid",
					value: "unpaid",
				},
				{
					label: "Paid",
					value: "paid",
				},
			],
			admin: {
				layout: "horizontal",
				position: "sidebar",
			},
		},
		{
			name: "assignedTo",
			type: "relationship",
			required: true,
			relationTo: "users",
			hasMany: false,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "supplier",
			type: "relationship",
			required: true,
			relationTo: "suppliers",
			hasMany: false,
		},
	],
	timestamps: true,
}

export default Invoices
