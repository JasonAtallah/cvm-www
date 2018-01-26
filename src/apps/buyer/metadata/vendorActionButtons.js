

export default [
  {
    status: 'NewVendor',
    label: 'Action',
    badge: 'success',
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
    dispatch: 'overrideDetail',
    badge: 'info'
  },
  {
    status: 'ApptScheduled',
    label: 'View Meeting',
    value: 'cancelMeeting',
    dispatch: 'overrideDetail',
    badge: 'primary'
  },
  {
    status: 'VendorRejected',
    label: 'Watch',
    value: 'watch',
    badge: 'danger',
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
  },
  {
    status: 'VendorNeedsToReviewTimes',
    badge: 'secondary'
  }
];
