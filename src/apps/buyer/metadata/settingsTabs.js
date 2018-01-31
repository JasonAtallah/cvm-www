

export default [
  {
    label: 'Profile',
    value: 'profile',
  },
  {
    label: 'Email Templates',
    value: 'emailTemplates'
  },
  {
    label: 'Questionnaire',
    value: 'questionnaire',
    options: [
      {
        value: 'introduction',
        label: 'Introduction',
        dispatch: 'updateQuestionnaire'
      },
      {
        value: 'completion',
        label: 'Completion',
        dispatch: 'updateQuestionnaire'
      }
    ]
  },
  {
    label: 'Button Generator',
    value: 'buttonGenerator'
  }
];
