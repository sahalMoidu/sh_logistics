
import frappe
from frappe import _
from frappe.utils import cint, flt, get_link_to_form, getdate, nowdate

from erpnext.accounts.doctype.purchase_invoice.purchase_invoice import (
	PurchaseInvoice,
	
)
from sh_logistics.logistics.doctype.job import job


class CustomPurchaseInvoice(PurchaseInvoice):
	def __init__(self, *args, **kwargs):
		super(CustomPurchaseInvoice, self).__init__(*args, **kwargs)

	

	def before_cancel(self):
		super(PurchaseInvoice, self).before_cancel()
		if self.job:
			job = frappe.get_doc('Job',self.job)
			if job.docstatus ==1:
				frappe.throw(_("Job Closed! Cannot Cancel"))
	def before_submit(self):
		super(PurchaseInvoice, self).before_submit()
		if self.job :
			job = frappe.get_doc('Job',self.job)
			if job.docstatus ==1:
				frappe.throw(_("Job Closed"))
			if job.docstatus ==2:
				frappe.throw(_("Job Cancelled! Cannot Submit"))
	

	