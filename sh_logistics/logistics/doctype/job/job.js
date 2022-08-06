// Copyright (c) 2022, softwarehut and contributors
// For license information, please see license.txt

frappe.ui.form.on('Job', {
	refresh: function (frm) {
		if (frm.doc.docstatus == 0 || frm.doc.docstatus == 1) {
			frm.add_custom_button(__("Sales Invoice"), function () {
				// When this button is clicked, do this
				var doc = frappe.new_doc("Sales Invoice");
				doc.job = frm.doc.name;
				if (frm.doc.bill_to_party)
					doc.customer = frm.doc.bill_to_party;
				console.log(doc)
				frappe.route_options = { "job": frm.doc.name, "customer": frm.doc.bill_to_party };
				frappe.set_route("Form", doc.doctype, doc.name);
			}, "Create");

			frm.add_custom_button(__("Purchase Invoice"), function () {
				// When this button is clicked, do this
				var doc = frappe.new_doc("Purchase Invoice");
				frappe.route_options = { "job": frm.doc.name };
				frappe.set_route("Form", doc.doctype, doc.name);
			}, "Create");
		}

	}
});
