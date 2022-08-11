# Copyright (c) 2022, softwarehut and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe

class Job(Document):
	pass
@frappe.whitelist()
def createDoc (dt ):
	doc = frappe.new_doc(dt)
	# doc.job= job;
	return doc;
