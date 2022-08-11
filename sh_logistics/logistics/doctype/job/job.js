// Copyright (c) 2022, softwarehut and contributors
// For license information, please see license.txt

frappe.ui.form.on('Job', {
	refresh: function (frm) {
		if (frm.doc.docstatus == 0 || frm.doc.docstatus == 1) {
			frm.add_custom_button(__("Sales Invoice"), function () {
				// When this button is clicked, do this
				// var doc = frappe.new_doc("Sales Invoice");
				// doc.job = frm.doc.name;
				// if (frm.doc.bill_to_party)
				// 	doc.customer = frm.doc.bill_to_party;
				// console.log(doc)
				// frappe.route_options = { "job": frm.doc.name, "customer": frm.doc.bill_to_party };
				// frappe.set_route("Form", "Sales Invoice", "new-sales-invoice-1");


				return frappe.call({
					method: 'sh_logistics.logistics.doctype.job.job.createDoc',
					args: {
						"dt": "Sales Invoice"

					},
					callback: function (r) {
						var doclist = frappe.model.sync(r.message)[0];
						doclist.job = frm.doc.name
						if (frm.doc.bill_to_party)
							doclist.customer = frm.doc.bill_to_party;
						frappe.set_route("Form", doclist.doctype, doclist.name);
					}
				});
			}, "Create");

			frm.add_custom_button(__("Purchase Invoice"), function () {
				// When this button is clicked, do this
				// var doc = frappe.new_doc("Purchase Invoice");
				// frappe.route_options = { "job": frm.doc.name };
				// frappe.set_route("Form", doc.doctype, doc.name);
				return frappe.call({
					method: 'sh_logistics.logistics.doctype.job.job.createDoc',
					args: {
						"dt": "Purchase Invoice"
					},
					callback: function (r) {
						var doclist = frappe.model.sync(r.message)[0];
						doclist.job = frm.doc.name
						frappe.set_route("Form", doclist.doctype, doclist.name);
					}
				});
			}, "Create");

			frm.add_custom_button(__('Ledger'), function () {
				frappe.route_options = {
					"job": frm.doc.name,

				};
				frappe.set_route("query-report", "General Ledger");
			}, "View");
			frm.add_custom_button(__('Profit & Loss'), function () {
				frappe.route_options = {
					"job": frm.doc.name,

				};
				frappe.set_route("query-report", "Profit and Loss Statement");
			}, "View");
		}

	}


});

frappe.ui.form.on('Job', 'before_submit', function (frm, cdt, cdn) {

	if (!frm.doc.job_close_date) {
		frappe.msgprint(__("You Cannot Submit without Job Close Date"));
		frappe.validated = false;
	}
});

