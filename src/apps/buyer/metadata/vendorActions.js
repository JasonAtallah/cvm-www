

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
    values: 'scheduleTime'
  },
  {
    status: 'ApptScheduled',
    label: 'Reschedule',
    values: 'reschedule'
  },
  {
    status: 'VendorRejected',
    label: 'Yes',
    values: 'watchVendor'
  },
  {
    status: 'VendorRejected',
    label: 'No',
    values: 'unwatchVendor'
  }
];
