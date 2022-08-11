# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors and contributors
# For license information, please see license.txt


import frappe
from frappe import _
from frappe.utils import cint, flt, get_link_to_form, getdate, nowdate

from erpnext.accounts.doctype.sales_invoice.sales_invoice import (
	SalesInvoice,
	get_bank_cash_account,
	get_mode_of_payment_info,
	update_multi_mode_option,
)
from erpnext.accounts.party import get_due_date, get_party_account
from erpnext.stock.doctype.serial_no.serial_no import get_pos_reserved_serial_nos, get_serial_nos
from sh_logistics.logistics.doctype.job import job

class CustomSalesInvoice(SalesInvoice):
	def __init__(self, *args, **kwargs):
		super(CustomSalesInvoice, self).__init__(*args, **kwargs)

	

	def before_cancel(self):
		super(SalesInvoice, self).before_cancel()
		job = frappe.get_doc('Job',self.job)
		if job.docstatus ==1:
			frappe.throw(_("Job Closed! Cannot Cancel"))
	def before_submit(self):
		super(SalesInvoice, self).before_cancel()
		job = frappe.get_doc('Job',self.job)
		if job.docstatus ==1:
			frappe.throw(_("Job Closed! Cannot Submit"))
		if job.docstatus ==2:
			frappe.throw(_("Job Cancelled! Cannot Submit"))
	

	