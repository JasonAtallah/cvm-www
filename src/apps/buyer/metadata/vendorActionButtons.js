

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
    dispatch: 'overrideDetail'
  },
  {
    status: 'ApptScheduled',
    label: 'View Meeting',
    value: 'cancelMeeting',
    dispatch: 'overrideDetail'
  },
  {
    status: 'VendorRejected',
    label: 'Watch',
    value: 'watch',
    options: [
      {
        label: 'Yes',
        attribute: 'watchVendor',
        value: true,
        dispatch: 'updateThreadAttributes'
      },
      {
        label: 'No',
        attribute: 'watchVendor',
        value: false,
        dispatch: 'updateThreadAttributes'
      }
    ]
  }
];
