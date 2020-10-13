frappe.provide('frappe.ui.form');

frappe.ui.form.CustomerQuickEntryForm = frappe.ui.form.QuickEntryForm.extend({
	init: function(doctype, after_insert) {
		this.skip_redirect_on_error = true;
		this._super(doctype, after_insert);
	},

	render_dialog: function() {
		this.mandatory.splice(3, 0, { fieldtype: "Column Break" });
		this.mandatory = this.mandatory.concat(this.get_variant_fields());
		this._super();
		$(this.dialog.body).find('.edit-full').addClass("hide");
	},

	get_variant_fields: function() {
		var variant_fields = [{
			fieldtype: "Section Break",
			label: __("Primary Contact Details"),
			collapsible: 0
		},
		{
			label: __("Email Id"),
			fieldname: "email_id",
			fieldtype: "Data",
			reqd: 1
		},
		{
			fieldtype: "Column Break"
		},
		{
			label: __("Mobile Number"),
			fieldname: "mobile_no",
			fieldtype: "Data",
			reqd: 1
		},
		{
			fieldtype: "Section Break",
			label: __("Primary Address Details"),
			collapsible: 0
		},
		{
			label: __("Address Line 1"),
			fieldname: "address_line1",
			fieldtype: "Data",
			reqd: 1
		},
		{
			label: __("Address Line 2"),
			fieldname: "address_line2",
			fieldtype: "Data"
		},
		{
			label: __("Postal Code"),
			fieldname: "pincode",
			fieldtype: "Data",
			reqd: 1
		},
		{
			fieldtype: "Column Break"
		},
		{
			label: __("City"),
			fieldname: "city",
			fieldtype: "Data",
			reqd: 1
		},
		{
			label: __("State"),
			fieldname: "state",
			fieldtype: "Data"
		},
		{
			label: __("Country"),
			fieldname: "country",
			fieldtype: "Link",
			options: "Country",
			reqd: 1
		},
		{
			label: __("Customer POS Id"),
			fieldname: "customer_pos_id",
			fieldtype: "Data",
			hidden: 1
		}];

		return variant_fields;
	},
})