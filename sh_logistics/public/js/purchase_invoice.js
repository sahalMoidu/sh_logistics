frappe.ui.form.on("Purchase Invoice", {
    // before_submit: function (frm) {
    //     console.log("before", frm.doc.job)
    //     if (frm.doc.job) {
    //         let job = frappe.get_doc("job", frm.doc.job);
    //         if (job.docstatus != 0) {
    //             frappe.msgprint(__("You Cannot link cancelled/submitted job"));
    //             frappe.validated = false;
    //         }
    //     }

    // },
    before_cancel: function (frm) {
        console.log("before cancel", frm.doc.job)
        // if (frm.doc.job) {
        //     let job = frappe.get_doc("job", frm.doc.job);
        //     if (job.docstatus == 1) {
        //         frappe.msgprint(__("You Cannot cancel Invoice Linked to submitted Job"));
        //         frappe.validated = false;
        //     }
        // }

    },

});
// console.log("triggered hook si.js")