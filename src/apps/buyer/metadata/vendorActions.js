

export default [

  {
    status: 'NewVendor',
    label: 'Action',
    options: [
      {
        value: 'approveVendor',
        label: 'Approve',
        commit: 'takeAction'
      },
      {
        value: 'rejectVendor',
        label: 'Reject',
        commit: 'takeAction'
      }
    ]
  },
  {
    status: 'VendorApproved',
    label: 'Schedule Time',
    value: 'scheduleTime',
    commit: 'takeAction'
  },
  {
    status: 'ApptScheduled',
    label: 'Cancel',
    value: 'cancel',
    commit: 'takeAction'
  },
  {
    status: 'VendorRejected',
    label: 'Watch',
    options: [
      {
        label: 'Yes',
        value: 'watchVendor',
        dispatch: 'watch'
      },
      {
        label: 'No',
        value: 'unwatchVendor',
        dispatch: 'watch'
      }
    ]
  }
];
