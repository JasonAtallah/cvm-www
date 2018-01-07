

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
    status: 'BuyerNeedsToSendTimes',
    label: 'Schedule Time',
    value: 'sendTimes',
    commit: 'overrideDetail'
  },
  {
    status: 'ApptScheduled',
    label: 'Cancel Meeting',
    value: 'cancelMeeting',
    commit: 'takeAction'
  },
  {
    status: 'VendorRejected',
    label: 'Watch',
    value: 'watch',
    options: [
      {
        label: 'Yes',
        value: 'watchVendor',
        dispatch: 'updateThreadAttribute'
      },
      {
        label: 'No',
        value: 'unwatchVendor',
        dispatch: 'updateThreadAttribute'
      }
    ]
  }
];
