

export default [
  {
    status: 'NewVendor',
    label: 'Approve',
    value: 'approveVendor'
  },
  {
    status: 'NewVendor',
    label: 'Reject',
    value: 'rejectVendor'
  },
  {
    status: 'VendorApproved',
    label: 'Schedule Time',
    value: 'scheduleTime'
  },
  {
    status: 'ApptScheduled',
    label: 'Reschedule',
    value: 'reschedule'
  },
  {
    status: 'VendorRejected',
    label: 'Yes',
    value: 'watchVendor'
  },
  {
    status: 'VendorRejected',
    label: 'No',
    value: 'unwatchVendor'
  }
];
