# Copyright (c) 2022, softwarehut and contributors
# For license information, please see license.txt

# import frappe
# from frappe.model.document import Document

# class BillOfEntry(Document):
# 	pass

from frappe.model.document import Document
from frappe.model.naming import make_autoname
import frappe
from frappe import _
class BillOfEntry(Document):
	def before_insert(self):
		if self.stock_movement == "In":
			for d in self.get("items"):
				if not d.item_no:
					d.item_no = make_autoname('BOEI-')
					# frappe.throw(_(d.item_no))
		else:
			for d in self.get("items"):
				if not d.item_no:
					frappe.throw(_("Enter Item No"))
